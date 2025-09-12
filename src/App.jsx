import { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import About from './navigation/About';
import Services from './navigation/Services';
import Gallery from './navigation/Gallery';
import ContactMe from './navigation/ContactMe';
import FirstPage from './navigation/FirstPage';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 760) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <Router>
      <header className="site-header">
        <nav className="navbar">
          <Link to="/" className="brand link home_page" onClick={close}>
            Artem Savchuk
          </Link>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-controls="nav-links"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Ссылки */}
          <div id="nav-links" className={`nav-links ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={close} className={({ isActive }) => isActive ? "link pages active" : "link pages"} end>
              Home
            </NavLink>
            <NavLink to="/about" onClick={close} className={({ isActive }) => isActive ? "link pages active" : "link pages"}>
              About
            </NavLink>
            <NavLink to="/services" onClick={close} className={({ isActive }) => isActive ? "link pages active" : "link pages"}>
              Experience
            </NavLink>
            <NavLink to="/gallery" onClick={close} className={({ isActive }) => isActive ? "link pages active" : "link pages"}>
              Portfolio
            </NavLink>
            <NavLink to="/contactMe" onClick={close} className={({ isActive }) => isActive ? "link pages active" : "link pages"}>
              Contacts
            </NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </Router>
  )
}

export default App;
