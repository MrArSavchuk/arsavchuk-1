import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import { useForm, ValidationError } from "@formspree/react";

function IconMail() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16
      a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/>
        </svg>
    );
}
function IconPhone() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2
      a1 1 0 0 1 1.1-.24c1.2.48 2.6.74 4 .74a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1
      C12.3 21 3 11.7 3 2a1 1 0 0 1 1-1h2.3a1 1 0 0 1 1 1c0 1.4.26 2.8.74 4
      a1 1 0 0 1-.24 1.1L6.6 10.8Z"/>
        </svg>
    );
}
function IconMapPin() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9
      a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
        </svg>
    );
}
function IconDownload() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 3v10.59l3.3-3.3 1.4 1.42L12 17.41l-4.7-4.7
      1.4-1.42 3.3 3.3V3h2ZM5 19h14v2H5v-2Z"/>
        </svg>
    );
}
function IconCheck() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
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
                    <div className="success-icon"><IconCheck /></div>
                    <h1>Thank you!</h1>
                    <p>I’ll get back to you soon. Meanwhile, feel free to download my resume.</p>
                    <div className="success-actions">
                        <a className="btn" href={RESUME_URL} download>
                            <IconDownload /> Download Resume (.docx)
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
                {/* Left: Contact cards */}
                <aside className="contact-cards reveal">
                    <div className="c-card">
                        <div className="c-icon" aria-hidden="true"><IconMail /></div>
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
                        <div className="c-icon" aria-hidden="true"><IconPhone /></div>
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
                        <div className="c-icon" aria-hidden="true"><IconMapPin /></div>
                        <div className="c-body">
                            <h3>Location</h3>
                            <p className="c-text">{CITY}</p>
                        </div>
                    </div>

                    <a className="btn download reveal" href={RESUME_URL} download>
                        <IconDownload /> Download Resume (.docx)
                    </a>
                </aside>

                {/* Right: Form */}
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
