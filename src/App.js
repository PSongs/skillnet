import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Engineering from "./pages/Engineering";
import Logistics from "./pages/Logistics";
import Tech from "./pages/Tech";
import Tracking from "./pages/Tracking";
import "./App.css";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home scrollToAbout={true} />} />
          <Route path="/services" element={<Home scrollToServices={true} />} />
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
