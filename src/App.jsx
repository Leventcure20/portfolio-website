import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Frameworks from "./pages/Frameworks";
import Tools from "./pages/DeveloperTools";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills/frameworks" element={<Frameworks />} />
          <Route path="/skills/developer" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;