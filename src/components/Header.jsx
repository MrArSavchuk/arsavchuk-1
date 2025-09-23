import { NavLink, Link } from "react-router-dom";

export default function Header({ menuOpen, toggle, close }) {
  return (
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
          onClick={toggle}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

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
  );
}
