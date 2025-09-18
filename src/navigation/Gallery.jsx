import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const IMG = {
  table1: new URL("../assets/TableTime.png", import.meta.url).href,
  table2: new URL("../assets/TableTime2.png", import.meta.url).href,
  cine1: new URL("../assets/Cinescope_pht.png", import.meta.url).href,
  cine2: new URL("../assets/Cinescope_pht2.png", import.meta.url).href,
  fin1: new URL("../assets/fintrack_pht.png", import.meta.url).href,
  fin2: new URL("../assets/fintrack_pht2.png", import.meta.url).href,
  dish1: new URL("../assets/Choose_You_Dish_pht.png", import.meta.url).href,
  dish2: new URL("../assets/Choose_You_Dish_pht2.png", import.meta.url).href,
};

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
    links: { live: "https://tabletime123.netlify.app", github: "https://github.com/MrArSavchuk/TableTime" },
    img: [IMG.table1, IMG.table2],
    tech: ["React", "CSS Modules", "React Hook Form", "Mock API"],
    color: "#A56C53",
  },
  {
    key: "cinescope",
    title: "CineScope — Movies & TV Search",
    tagline: "Search movies & shows",
    desc: "Find movies by title or genre with ratings, posters, and overviews.",
    features: ["TheMovieDB API", "Genre filters"],
    links: { live: "https://cinemascope123.netlify.app", github: "https://github.com/MrArSavchuk/Cinemascope" },
    img: [IMG.cine1, IMG.cine2],
    tech: ["React", "Axios", "Styled Components", "TMDB API"],
    color: "#3B82F6",
  },
  {
    key: "fintrack",
    title: "FinTrack — Personal Finance Tracker",
    tagline: "Track income & spend",
    desc: "Track income and expenses with interactive charts and categories.",
    features: ["Chart.js visualizations", "LocalStorage persistence", "Live balance"],
    links: { live: "https://fin-track123.netlify.app", github: "https://github.com/MrArSavchuk/fintrack" },
    img: [IMG.fin1, IMG.fin2],
    tech: ["React", "Chart.js", "CSS"],
    color: "#F59E0B",
  },
  {
    key: "recipehub",
    title: "Choose You Dish — Personalized Recipe & Meal Finder",
    tagline: "Find & discover recipes",
    desc: "Find and discover recipes with photos and tags.",
    features: ["React", "Booking confirmation (mock API)", "Ingredient search"],
    links: { live: "https://chooseyoudish.netlify.app", github: "https://github.com/MrArSavchuk/Choose_Your_Dish" },
    img: [IMG.dish1, IMG.dish2],
    tech: ["React", "React Hook Form", "CSS", "API"],
    color: "#06B6D4",
  },
];

function Carousel({ items, intervalMs = 3500 }) {
  const [i, setI] = useState(0);
  const pausedRef = useRef(false);

  const prev = () => setI((p) => (p === 0 ? items.length - 1 : p - 1));
  const next = () => setI((p) => (p + 1) % items.length);

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

  const setPaused = (v) => (pausedRef.current = v);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
              <div className="hero" style={{
                backgroundImage: `url(${p.img[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
                <span className="hero-kicker">{p.tagline}</span>
                <h3 className="hero-title">{p.title}</h3>
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
        <h1 className="gal-title">Portfolio</h1>
        <p className="gal-sub">Selected works — portfolio available; features ready to view</p>
      </header>

      <Carousel items={projects} />

      <section className="cards">
        {projects.map((p) => (
          <article className="card hover-lift" key={p.key}>
            <div className="card-cover" style={{ background: `linear-gradient(135deg, ${p.color}, #fbeec1)` }}>
              <div className="flip-wrap">
                <div className="face front">
                  <img src={p.img[0]} alt={`${p.title} – screenshot 1`} />
                </div>
                <div className="face back">
                  <img src={p.img[1]} alt={`${p.title} – screenshot 2`} />
                </div>
              </div>

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
