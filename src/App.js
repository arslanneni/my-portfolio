import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import "aos/dist/aos.css"; // AOS CSS
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <About />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        {/* Uncomment the Contact section when implemented */}
        {/* <Contact />
        <hr className="section-divider" /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
