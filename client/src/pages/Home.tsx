import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Stats from "../components/stats/Stats";
// import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        
        <About />
        
        <Projects />
        
        <Skills />
        
        <Experience />
        
        <Stats />
        
        {/* <Testimonials /> */}
        
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;