// /src/Gallery.jsx (EN)
import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const projects = [
  {
    key: "tabletime",
    title: "TableTime — Table Booking Service",
    tagline: "One-page booking app",
    desc: "A single-page app for quick restaurant table reservations.",
    features: [
      "Form validation (React Hook Form)",
      "Booking confirmation (mock API)",
      "Dark / Light theme",
    ],
    links: { live: "#", github: "#" },
    tech: ["React", "CSS Modules", "React Hook Form", "Mock API"],
    color: "#A56C53",
  },
  {
    key: "cinescope",
    title: "CineScope — Movies & TV Search",
    tagline: "Search movies & shows",
    desc: "Find movies by title or genre with ratings, posters, and overviews.",
    features: ["TheMovieDB API", "Pagination & Infinite Scroll", "Genre filters"],
    links: { live: "#", github: "#" },
    tech: ["React", "Axios", "Styled Components", "TMDB API"],
    color: "#3B82F6",
  },
  {
    key: "tripmate",
    title: "TripMate — Travel Planner",
    tagline: "Plan trips on a map",
    desc: "Plan trip routes with landmarks displayed on the map.",
    features: ["Google Maps API", "Save routes to localStorage", "Mobile friendly"],
    links: { live: "#", github: "#" },
    tech: ["React", "CSS", "Google Maps API"],
    color: "#10B981",
  },
  {
    key: "coffeeguide",
    title: "CoffeeGuide — Coffee Shop Catalog",
    tagline: "Find coffee near you",
    desc: "Interactive coffee shop map with photos, reviews, and menus.",
    features: ["Sort by rating", "“Near me” via Geolocation", "Map (Leaflet)"],
    links: { live: "#", github: "#" },
    tech: ["React", "Leaflet", "CSS", "Geolocation API"],
    color: "#8B5CF6",
  },
  {
    key: "fintrack",
    title: "FinTrack — Personal Finance Tracker",
    tagline: "Track income & spend",
    desc: "Track income and expenses with interactive charts and categories.",
    features: ["Chart.js visualizations", "LocalStorage persistence", "Live balance"],
    links: { live: "#", github: "#" },
    tech: ["React", "Chart.js", "Tailwind CSS"],
    color: "#F59E0B",
  },
  {
    key: "resumeforge",
    title: "ResumeForge — Resume Generator",
    tagline: "Design & export to PDF",
    desc: "Online resume builder with design customization and PDF export.",
    features: ["Drag-and-drop blocks", "Color themes", "PDF via react-pdf"],
    links: { live: "#", github: "#" },
    tech: ["React", "react-pdf", "CSS"],
    color: "#EF4444",
  },
  {
    key: "recipehub",
    title: "RecipeHub — Mini Recipe Social",
    tagline: "Share & discover recipes",
    desc: "Publish and share recipes with photos and tags.",
    features: ["Photo upload (Cloudinary)", "Likes & comments", "Ingredient search"],
    links: { live: "#", github: "#" },
    tech: ["React", "Firebase", "Tailwind CSS"],
    color: "#06B6D4",
  },
];

function Carousel({ items, intervalMs = 3500 }) {
  const [i, setI] = useState(0);
  const pausedRef = useRef(false);

  const prev = () => setI((p) => (p === 0 ? items.length - 1 : p - 1));
  const next = () => setI((p) => (p + 1) % items.length);

  // Autoplay with pause on tab hidden
  useEffect(() => {
    const tick = () => { if (!pausedRef.current) next(); };
    const id = setInterval(tick, intervalMs);
    const onVisibility = () => { pausedRef.current = document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [intervalMs]);

  // Pause on hover/focus
  const setPaused = (v) => (pausedRef.current = v);

  // Keyboard navigation ← / →
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Touch swipe
  const startX = useRef(null);
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 40) (delta > 0 ? prev() : next());
    startX.current = null;
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button aria-label="Previous" className="car-arrow left" onClick={prev}>‹</button>

      <div className="car-viewport" tabIndex={0}>
        <div className="car-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {items.map((p) => (
            <div className="car-slide" key={p.key}>
              {/* Placeholder “title screenshot”. Replace with <img src={p.img} .../> later */}
              <div className="hero hover-zoom" style={{ background: `linear-gradient(135deg, ${p.color}, #fbeec1)` }}>
                <span className="hero-kicker">{p.tagline}</span>
                <h3 className="hero-title">{p.title}</h3>
                <span className="hero-note">Screenshot coming soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button aria-label="Next" className="car-arrow right" onClick={next}>›</button>

      <div className="car-dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === i ? "active" : ""}`}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <main className="page">
      <header className="gal-head">
        <h1 className="gal-title">Gallery</h1>
        <p className="gal-sub">Selected projects — screenshots coming soon; features are ready.</p>
      </header>

      <Carousel items={projects} />

      <section className="cards">
        {projects.map((p) => (
          <article className="card hover-lift" key={p.key}>
            <div className="card-cover hover-zoom" style={{ background: `linear-gradient(135deg, ${p.color}, #fbeec1)` }}>
              {/* For real screenshots later:
                 <img src={p.img} alt={p.title} className="cover-img" /> */}
              <span className="cover-title">{p.title}</span>
            </div>

            <div className="card-body">
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>

              <ul className="card-list">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>

              <div className="card-tech">
                {p.tech.map((t) => <span className="pill" key={t}>{t}</span>)}
              </div>

              <div className="card-links">
                <a href={p.links.live} target="_blank" rel="noreferrer">Live Demo</a>
                <a href={p.links.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
