import React, { useEffect, useRef } from "react";
import "./Skills.css";

export default function Skills({ info = [], skills = [] }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const bars = rootRef.current.querySelectorAll(".bar-fill");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            const pct = el.getAttribute("data-target");
            el.style.setProperty("--fill", pct + "%");
            el.classList.add("filled");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    bars.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  return (
    <section className="skills-grid" ref={rootRef}>
      <div className="about-list">
        {info.map(({ label, value }) => (
          <div className="about-row" key={label}>
            <span className="about-label">{label}:</span>
            <span className="about-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="bars">
        {skills.map(({ name, level }) => (
          <div className="bar" key={name}>
            <div className="bar-top">
              <span className="bar-label">{name}</span>
              <span className="bar-num">{level}%</span>
            </div>
            <div
              className="bar-track"
              role="progressbar"
              aria-valuenow={level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span className="bar-fill" data-target={level} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
