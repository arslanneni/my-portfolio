import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <hr className="hr" />
        <Projects />
        <hr className="hr" />
        <Skills />
        <hr className="hr" />
        {/* <Contact />
        <hr className="hr" /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
