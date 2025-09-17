import React, { useEffect } from "react";

const jobs = [
  {
    title: "Front-End Developer",
    company: "ADVIS LLC",
    dates: "2019–2022 · Remote",
    bullets: [
      "Built and launched modern web applications and marketing websites using React and Redux.",
      "Designed responsive, accessible interfaces (WCAG 2.1, mobile-first).",
      "Improved performance through code-splitting and lazy loading, reducing load times by 40%.",
      "Delivered interactive landing pages for marketing campaigns, increasing conversion rates by 25%.",
      "Streamlined deployment workflows with GitHub, accelerating release cycles by 30%."
    ]
  },
  {
    title: "Business Manager",
    company: "KrepMaster LLC",
    dates: "2017–2018 · Moscow, Russia",
    bullets: [
      "Contributed to the redesign of the company’s e-commerce platform with a focus on UX/UI.",
      "Collaborated with designers and developers to improve navigation and user flow.",
      "Simplified checkout process and implemented new design elements, boosting user retention.",
      "Supported integration of analytics to better track customer behavior."
    ]
  },
  {
    title: "Operations Manager",
    company: "Mornefteservice LLC",
    dates: "2015–2017 · Arkhangelsk, Russia",
    bullets: [
      "Designed and implemented internal analytics dashboards to improve operational visibility.",
      "Partnered with IT teams to optimize and modernize employee-facing web portals.",
      "Advocated for usability improvements to enhance day-to-day workflows."
    ]
  }
];

const extra = [
  "Assisted in UI adjustments for banking and insurance digital platforms (Rosgosstrakh Bank, Soglasie Insurance).",
  "Built a personal portfolio website and several demo projects (e-commerce mock platform, analytics dashboard, open-source contributions).",
  "Maintained a strong emphasis on user-friendly, modern, and accessible design across all projects."
];

export default function Services() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".reveal");
    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("in-view"));
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
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="exp-section">
      <header className="exp-header reveal">
        <h2 className="exp-title">
          <span className="accent-underline">Experience</span>
        </h2>
        <p className="exp-lead">
          A reverse-chronological story of how I grew from business-facing operations to a front-end developer building fast, accessible, and scalable products.
        </p>
        <p className="exp-lead">
          Across every role I focused on one thing: turning ideas into reliable user experiences. Along the way I learned to balance clean engineering with measurable business impact — faster loads, higher conversions, and smoother releases.
        </p>
      </header>

      <div className="exp-timeline">
        {jobs.map((job, idx) => (
          <article key={idx} className="exp-item exp-card reveal">
            <div className="exp-dot" aria-hidden="true" />
            <h3 className="exp-card-title">
              {job.title} — <span className="exp-company">{job.company}</span>
            </h3>
            <div className="exp-meta">{job.dates}</div>
            <ul className="exp-list">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
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
        <p className="exp-today">
          ✨ Today, I focus on building scalable, high-performance front-end solutions that combine technical expertise with clean, user-centered design. 
          This is not just my work — it is my passion for making technology feel effortless and impactful for people.
        </p>
      </section>
    </section>
  );
}
