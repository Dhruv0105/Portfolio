import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground";
import About from "./components/About";

export default function App() {

  return (

    <main className="relative min-h-screen bg-[#050505] overflow-hidden">

      <AnimatedBackground />

      <CustomCursor />

      <Navbar />

      <Hero />

      <About  />

      <Projects />

      <Skills />

      <Contact />

      <Footer />

    </main>

  );
}