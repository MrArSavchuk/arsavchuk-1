import React, { useEffect, useRef, useState } from "react";
import "../styles/FirstPage.css";
import image from "../assets/employee.jpg";
import icon_github from "../assets/icon_github.png";
import icon_lin from "../assets/icon_lin.png";
import icon_mail from "../assets/icon_mail.jpg";
import icon_education from "../assets/icon_education.png";
import icon_cv from "../assets/icon_cv.png";
import { certs } from "../data/dataCerts";

function FirstPage() {
  const [showCerts, setShowCerts] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!showCerts) return;
    const onKey = (e) => e.key === "Escape" && setShowCerts(false);
    document.addEventListener("keydown", onKey);
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => document.removeEventListener("keydown", onKey);
  }, [showCerts]);

  return (
    <div className="block_about_with_photo">
      <div className="block-about">
        <h1>
          Hi, I'm <span className="name_span">Artem Savchuk</span>
        </h1>
        <h2>
          <span className="rotator">
            <span>WEB DEVELOPER</span>
            <span>FRONT-END</span>
            <span>UI/UX BUILDER</span>
            <span>REACT DEVELOPER</span>
            <span>FREELANCER</span>
          </span>
        </h2>
        <p>
          Helping companies transform their vision into impactful, user-friendly digital products.<br />
          Let’s bring your vision to life and turn ideas into interactive experiences.
        </p>

        <footer className="block_links">
          <a href="https://www.linkedin.com/in/artemii-savchuk/" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn"
          >
            <img src={icon_lin} alt="LinkedIn" />
          </a>

          <a
            href="https://github.com/MrArSavchuk"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img src={icon_github} alt="GitHub" />
          </a>

          <button
            type="button"
            className="icon-btn"
            onClick={() => setShowCerts(true)}
            aria-haspopup="dialog"
            aria-controls="certs-modal"
            title="Certificates"
          >
            <img src={icon_education} alt="Education / Certificates" />
          </button>

          <a
            href="/Artem_Savchuk_Resume.docx"
            target="_blank"
            className="icon-link"
            title="Download CV (.docx)"
          >
            <img src={icon_cv} alt="Download CV (.docx)" />
          </a>

          <a href="mailto:mrarsavchuk@gmail.com" title="Email me">
            <img src={icon_mail} alt="Email" />
          </a>
        </footer>
      </div>

      <div className="block_photo">
        <img src={image} alt="Photoporfolio" width="400" />
      </div>

      {showCerts && (
        <div
          className="modal-overlay"
          onClick={() => setShowCerts(false)}
          role="presentation"
        >
          <div
            className="modal"
            id="certs-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certs-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowCerts(false)}
              aria-label="Close"
              ref={closeBtnRef}
            >
              ×
            </button>
            <h2 id="certs-title">Certificates</h2>
            <div className="certs-grid">
              {certs.map((c) => (
                <figure className="cert-card" key={c.id}>
                  <div className="cert-thumb">
                    <img
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption>
                    <h3>{c.title}</h3>
                    <p className="cert-meta">{c.meta}</p>
                    <p className="cert-info">{c.info}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstPage;
