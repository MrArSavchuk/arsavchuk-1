import React, { useEffect, useRef, useState } from "react";
import "./FirstPage.css";

import image from "../assets/employee.jpg";
import icon_github from "../assets/icon_github.png";
import icon_lin from "../assets/icon_lin.png";
import icon_mail from "../assets/icon_mail.jpg";
import icon_education from "../assets/icon_education.png";
import icon_cv from "../assets/icon_cv.png";

// ✨ новые импорты изображений для модалки
import diplomImg from "../assets/diplom.png";
import certificateHtmlImg from "../assets/sertificatehtml.png";
import placeholderImg from "../assets/placeholder.png";

function FirstPage() {
  const [showCerts, setShowCerts] = useState(false);
  const closeBtnRef = useRef(null);

  // Close on ESC and focus the close button when opened
  useEffect(() => {
    if (!showCerts) return;
    const onKey = (e) => e.key === "Escape" && setShowCerts(false);
    document.addEventListener("keydown", onKey);
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => document.removeEventListener("keydown", onKey);
  }, [showCerts]);

  // ✅ Теперь у каждого сертификата есть img и alt
  const certs = [
    {
      id: 1,
      title: "M.Sc. in Finance",
      meta: "Northern State Medical University",
      info: "Thesis: Evaluation of Enterprise Investment Project Performance",
      img: diplomImg,
      alt: "Diploma",
    },
    {
      id: 2,
      title: "Front-end Web Development",
      meta: "Montreal, Canada",
      info: "HTML5, CSS3, JavaScript",
      img: certificateHtmlImg,
      alt: "Front-end Certificate",
    },
    {
      id: 3,
      title: "...",
      meta: "Stand by",
      info: "Coming soon",
      img: placeholderImg,
      alt: "Placeholder certificate",
    },
    {
      id: 4,
      title: "...",
      meta: "Stand by",
      info: "Coming soon",
      img: placeholderImg,
      alt: "Placeholder certificate",
    },
  ];

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
          {/* LinkedIn (placeholder link) */}
          <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={icon_lin} alt="LinkedIn" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MrArSavchuk"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img src={icon_github} alt="GitHub" />
          </a>

          {/* Education → open modal */}
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

          {/* CV → download from /public */}
          <a
            href="/Artem_Savchuk_Resume.docx"
            target="_blank"
            className="icon-link"
            title="Download CV (.docx)"
          >
            <img src={icon_cv} alt="Download CV (.docx)" />
          </a>

          {/* Email */}
          <a href="mailto:mrarsavchuk@gmail.com" title="Email me">
            <img src={icon_mail} alt="Email" />
          </a>
        </footer>
      </div>

      <div className="block_photo">
        <img src={image} alt="Photoporfolio" width="400" />
      </div>

      {/* ===== Modal with certificates ===== */}
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
                  {/* 🔁 Был placeholder, теперь полноценное изображение */}
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
