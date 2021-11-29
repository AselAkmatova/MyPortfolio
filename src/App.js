import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import PortfolioSaveTheAles from "./components/PortfolioSaveTheAles";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/savetheales"
            element={<PortfolioSaveTheAles />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
