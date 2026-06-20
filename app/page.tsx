import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { Placements } from "@/components/Placements";
import { Admissions } from "@/components/Admissions";
import { Testimonials } from "@/components/Testimonials";
import { Faculty } from "@/components/Faculty";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Courses />
        <Placements />
        <Admissions />
        <Testimonials />
        <Faculty />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
