import React, { useEffect } from "react";
import { jobs, extra } from "../data/dataJobs";

function highlightNumbers(text) {
  const regex = /(\b\d{4}\b|\b\d[\d.,]*(?:%|k|K|m|M)?\b)/g;
  const parts = String(text).split(regex);
  return parts.map((part, i) => {
    if (regex.test(part)) {
      return (
        <strong key={i} className="num">
          {part}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function Services() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll(".reveal");
    if (reduceMotion) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="exp-section">
      <header className="exp-header reveal">
        <h1 className="exp-title">Experience</h1>
        <p className="exp-lead">
          A reverse-chronological story of how I grew from business-facing operations to a front-end developer building fast, accessible, and scalable products.
        </p>
        <p className="exp-lead">
          Across every role I focused on one thing: turning ideas into reliable user experiences. Along the way I learned to balance clean engineering with measurable business impact — faster loads, higher conversions, and smoother releases.
        </p>
      </header>

      <div className="exp-timeline">
        {jobs.map((job, idx) => (
          <article key={idx} className="exp-item reveal">
            <div className="exp-dot" aria-hidden="true" />
            <div className="exp-card">
              <h3 className="exp-card-title">
                <span className="exp-icon" aria-hidden="true">{job.icon}</span>
                {job.title} — <span className="exp-company">{job.company}</span>
              </h3>
              <div className="exp-meta">{highlightNumbers(job.dates)}</div>
              <ul className="exp-list">
                {job.bullets.map((b, i) => (
                  <li key={i}>{highlightNumbers(b)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <section className="exp-additional reveal">
        <h3 className="exp-subheading">Additional Experience</h3>
        <ul className="exp-list">
          {extra.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <figure className="exp-callout">
          <blockquote>
            <p>“I build scalable, high-performance front-end solutions that feel effortless and impactful for people.”</p>
          </blockquote>
        </figure>
      </section>
    </section>
  );
}
