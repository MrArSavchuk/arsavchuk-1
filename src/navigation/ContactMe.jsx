import React, { useEffect, useState } from "react";
import "../styles/ContactMe.css";
import { useForm, ValidationError } from "@formspree/react";
import IconMapPinPng from "../assets/IconMapPin.png";
import IconMailPng from "../assets/IconMail.png";
import IconPhonePng from "../assets/IconPhone.png";
import IconDownloadPng from "../assets/IconDownload.png";
import IconCheckPng from "../assets/IconCheck.png";

function ImgIcon({ src, alt = "", size = 20, className = "" }) {
    return (
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={className}
            loading="lazy"
            aria-hidden={alt === "" ? "true" : undefined}
            draggable="false"
        />
    );
}

function ContactMe() {
    const EMAIL = "artem_savchuk@icloud.com";
    const PHONE = "+1 (347) 330-0344";
    const CITY = "Erie, PA";
    const RESUME_URL = "/Artem_Savchuk_Resume.docx";

    const [copied, setCopied] = useState({ email: false, phone: false });

    const copy = (key, value) => {
        navigator.clipboard?.writeText(value).then(() => {
            setCopied((s) => ({ ...s, [key]: true }));
            setTimeout(() => setCopied((s) => ({ ...s, [key]: false })), 1400);
        });
    };

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
            { threshold: 0.2 }
        );
        document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const [state, handleSubmit] = useForm("mandpzap");

    if (state.succeeded) {
        return (
            <main className="contact-page success">
                <div className="success-box">
                    <div className="success-icon">
                        <ImgIcon src={IconCheckPng} alt="" size={22} />
                    </div>
                    <h1>Thank you!</h1>
                    <p>I’ll get back to you soon. Meanwhile, feel free to download my resume.</p>
                    <div className="success-actions">
                        <a className="btn" href={RESUME_URL} download>
                            <ImgIcon src={IconDownloadPng} alt="" size={18} className="btn-icon" /> Download Resume (.docx)
                        </a>
                        <button className="btn btn-ghost" onClick={() => window.location.reload()}>
                            Send another message
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    const mailto = `mailto:${EMAIL}?subject=Project%20Inquiry&body=Hi%20Artem,%20I'd%20like%20to%20discuss...`;

    return (
        <main className="contact-page">
            <header className="contact-header reveal">
                <h1>Contact Me</h1>
                <p className="subtitle">
                    Have a project in mind? Drop me a line via the form or reach out directly.
                </p>
            </header>

            <section className="contact-wrap">
                <aside className="contact-cards reveal">
                    <div className="c-card">
                        <div className="c-icon" aria-hidden="true">
                            <ImgIcon src={IconMailPng} alt="" />
                        </div>
                        <div className="c-body">
                            <h3>Email</h3>
                            <a className="c-link" href={mailto}>{EMAIL}</a>
                            <div className="c-actions">
                                <button className="tiny" onClick={() => copy("email", EMAIL)}>
                                    {copied.email ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="c-card">
                        <div className="c-icon" aria-hidden="true">
                            <ImgIcon src={IconPhonePng} alt="" />
                        </div>
                        <div className="c-body">
                            <h3>Phone</h3>
                            <a className="c-link" href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
                            <div className="c-actions">
                                <button className="tiny" onClick={() => copy("phone", PHONE)}>
                                    {copied.phone ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="c-card">
                        <div className="c-icon" aria-hidden="true">
                            <ImgIcon src={IconMapPinPng} alt="" />
                        </div>
                        <div className="c-body">
                            <h3>Location</h3>
                            <p className="c-text">{CITY}</p>
                        </div>
                    </div>

                    <a className="btn download reveal" href={RESUME_URL} download>
                        <ImgIcon src={IconDownloadPng} alt="" size={18} className="btn-icon" /> Download Resume (.docx)
                    </a>
                </aside>

                <section className="contact-form reveal">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid">
                            <div className="field">
                                <label htmlFor="name">Your Name</label>
                                <input id="name" name="name" type="text" className="input" placeholder="John Doe" />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email Address</label>
                                <input id="email" name="email" type="email" className="input" placeholder="john@example.com" required />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                        </div>

                        <div className="field">
                            <label htmlFor="subject">Subject</label>
                            <input id="subject" name="subject" type="text" className="input" placeholder="Project inquiry" />
                        </div>

                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" className="textarea" rows="6" placeholder="Tell me about your project..." required />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <div className="actions">
                            <button type="submit" className="btn" disabled={state.submitting}>
                                {state.submitting ? "Sending..." : "Send Message"}
                            </button>
                            <a className="btn btn-ghost" href={mailto}>Email me directly</a>
                        </div>
                    </form>
                </section>
            </section>
        </main>
    );
}

export default ContactMe;
