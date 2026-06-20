<?php
/**
 * Hero section.
 *
 * @package Universal_Institutions
 */
?>
<section class="hero" id="hero-section">
	<div class="hero-bg-gradient"></div>
	<div class="hero-bg-grid"></div>
	<div class="hero-blob a"></div>
	<div class="hero-blob b"></div>

	<!-- Floating glass cards -->
	<div class="hero-float" style="left:1.5rem;top:6rem;">
		<div class="float-card" style="animation-delay:0s">
			<span class="ic"><?php echo ui_icon( 'award', 'icon' ); // phpcs:ignore ?></span>
			<span class="t">Bangalore University Affiliated</span>
		</div>
	</div>
	<div class="hero-float" style="right:1rem;top:10rem;">
		<div class="float-card" style="animation-delay:1.2s">
			<span class="ic"><?php echo ui_icon( 'users', 'icon' ); // phpcs:ignore ?></span>
			<span class="t">5,000+ Alumni Mentored</span>
		</div>
	</div>
	<div class="hero-float" style="left:4rem;bottom:2.5rem;">
		<div class="float-card" style="animation-delay:.6s">
			<span class="ic"><?php echo ui_icon( 'book', 'icon' ); // phpcs:ignore ?></span>
			<span class="t">Integrated UPSC from Day 1</span>
		</div>
	</div>

	<div class="container">
		<div class="hero-copy">
			<span class="eyebrow eyebrow--light" data-reveal>
				<?php echo ui_icon( 'sparkles', 'icon' ); // phpcs:ignore ?> Admissions 2026 Now Open
			</span>
			<h1 data-reveal data-delay="1">
				Where PU &amp; Degree Education Meets <span class="accent">Civil Services</span> Success
			</h1>
			<p class="lead" data-reveal data-delay="2">
				Universal Group of Institutions is a Bengaluru PU and degree college with integrated IAS / IPS (UPSC &amp; PSC) training &mdash; so students prepare for their board, university and civil-services goals under one roof.
			</p>
			<div class="hero-actions" data-reveal data-delay="3">
				<a class="btn btn-secondary" href="#admissions">Apply for Admission <?php echo ui_icon( 'arrow' ); // phpcs:ignore ?></a>
				<a class="btn btn-ghost" href="#courses"><?php echo ui_icon( 'play' ); // phpcs:ignore ?> Explore Programs</a>
			</div>
			<div class="hero-stats" data-reveal data-delay="4">
				<div><p class="num">25+</p><p class="lbl">Years of Experience</p></div>
				<div><p class="num">50+</p><p class="lbl">Rank Holders</p></div>
				<div><p class="num">5,000+</p><p class="lbl">Alumni</p></div>
			</div>
		</div>

		<div class="hero-visual" data-reveal data-delay="2">
			<div class="hero-photo">
				<img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80" alt="Universal Group of Institutions students" loading="eager" />
			</div>
			<div class="hero-rank glass-card">
				<div style="display:flex;align-items:center;gap:.75rem">
					<span class="icon-pill" style="width:2.75rem;height:2.75rem"><?php echo ui_icon( 'award', 'icon' ); // phpcs:ignore ?></span>
					<div>
						<p style="font-family:var(--font-display);font-size:1.25rem;font-weight:800;color:var(--primary)">Since 1999</p>
						<p style="font-size:.75rem;color:rgba(10,46,101,.7)">Integrated UPSC pioneers</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hero-wave">
		<svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 80V40C240 0 480 0 720 30C960 60 1200 60 1440 30V80H0Z" fill="#ffffff" />
		</svg>
	</div>
</section>
