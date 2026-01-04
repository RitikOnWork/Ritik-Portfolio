import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import CodingStats from "@/components/portfolio/CodingStats";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import BackToTop from "@/components/portfolio/BackToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Certifications />
      <CodingStats />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;