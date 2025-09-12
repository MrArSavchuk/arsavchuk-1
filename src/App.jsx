import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import About from './navigation/About';
import Services from './navigation/Services';
import Gallery from './navigation/Gallery';
import ContactMe from './navigation/ContactMe';
import FirstPage from './navigation/FirstPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="link home_page">Artem Savchuk</Link>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "link pages active" : "link pages"}
          end>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "link pages active" : "link pages"}>
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? "link pages active" : "link pages"}>
          Experience
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) => isActive ? "link pages active" : "link pages"}>
          Portfolio
        </NavLink>
        <NavLink
          to="/contactMe"
          className={({ isActive }) => isActive ? "link pages active" : "link pages"}>
          Contacts
        </NavLink>
      </nav>

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
