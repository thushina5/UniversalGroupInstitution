/**
 * Universal Institutions — front-end interactions.
 * Vanilla JS, no dependencies.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initMobileMenu();
    initReveal();
    initCounters();
    initTestimonialSlider();
    initFormValidation();
  });

  /* ---- Sticky header background on scroll ---- */
  function initHeaderScroll() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile menu toggle ---- */
  function initMobileMenu() {
    var toggle = document.getElementById("nav-toggle");
    var menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("[data-close]").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Scroll reveal via IntersectionObserver ---- */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Animated counters ---- */
  function initCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    var run = function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 2000;
      var start = performance.now();

      var tick = function (now) {
        var p = Math.min((now - start) / duration, 1);
        var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        var value = Math.round(eased * target);
        el.textContent = value.toLocaleString("en-IN") + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(run);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            run(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Testimonial slider ---- */
  function initTestimonialSlider() {
    var slider = document.getElementById("testimonial-slider");
    if (!slider) return;

    var slides = slider.querySelectorAll(".slide");
    var dots = slider.querySelectorAll(".dot");
    var prev = document.getElementById("prev-slide");
    var next = document.getElementById("next-slide");
    var index = 0;
    var timer;

    var show = function (i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) {
        s.classList.toggle("active", n === index);
      });
      dots.forEach(function (d, n) {
        d.classList.toggle("active", n === index);
      });
    };

    var start = function () {
      stop();
      timer = setInterval(function () {
        show(index + 1);
      }, 6000);
    };
    var stop = function () {
      if (timer) clearInterval(timer);
    };

    if (prev)
      prev.addEventListener("click", function () {
        show(index - 1);
        start();
      });
    if (next)
      next.addEventListener("click", function () {
        show(index + 1);
        start();
      });
    dots.forEach(function (dot, n) {
      dot.addEventListener("click", function () {
        show(n);
        start();
      });
    });

    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", start);
    start();
  }

  /* ---- Lightweight client-side form validation ---- */
  function initFormValidation() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var phone = form.querySelector('[name="phone"]');
      var ok = true;

      clearError(name);
      clearError(email);
      clearError(phone);

      if (!name.value || name.value.trim().length < 2) {
        setError(name, "Please enter your full name.");
        ok = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        setError(email, "Enter a valid email address.");
        ok = false;
      }
      if (!/^[0-9+\-\s]{8,15}$/.test(phone.value)) {
        setError(phone, "Enter a valid phone number.");
        ok = false;
      }

      if (!ok) {
        e.preventDefault();
      }
    });

    function setError(input, msg) {
      input.style.borderColor = "#f87171";
      var note = document.createElement("p");
      note.className = "ui-field-error";
      note.style.cssText =
        "margin-top:.35rem;font-size:.72rem;font-weight:500;color:#ef4444;";
      note.textContent = msg;
      input.parentNode.appendChild(note);
    }
    function clearError(input) {
      input.style.borderColor = "";
      var existing = input.parentNode.querySelector(".ui-field-error");
      if (existing) existing.remove();
    }
  }
})();
