import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-grid">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
