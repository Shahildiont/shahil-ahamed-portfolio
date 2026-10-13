import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}