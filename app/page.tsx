import About from "@/components/About";
import Achievements from "@/components/Achievements";
import BackgroundFX from "@/components/BackgroundFX";
import CareerDirection from "@/components/CareerDirection";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Philosophy from "@/components/Philosophy";
import Pillars from "@/components/Pillars";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <Pillars />
        <Experience />
        <Skills />
        <Philosophy />
        <Projects />
        <Achievements />
        <CareerDirection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
