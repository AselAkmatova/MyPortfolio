import "./styles/App.scss";
import "./styles/Responsive.scss";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <nav className="header__nav">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <section className="home">
          <Home />
        </section>
        <section className="about" id="about">
          <About />
        </section>
        <section className="portfolio" id="portfolio">
          <Portfolio />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
