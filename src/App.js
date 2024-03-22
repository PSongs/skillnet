import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Engineering from "./pages/Engineering";
import Logistics from "./pages/Logistics";
import Tech from "./pages/Tech";
import Tracking from "./pages/Tracking";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
