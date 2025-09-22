import Skills from "../components/Skills";
import "../styles/App.css";

export default function About() {
    return (
        <main className="page">
            <h1 className="page-title">About Me</h1>
            <p className="page-sub">
                Front-End Developer skilled in <strong>HTML5, CSS3, JavaScript (ES6+), React, Redux</strong> and modern build tools.
                Experienced in working with <strong>REST APIs</strong>, Git/GitHub and Node.js.
                Focused on clean, maintainable code with strong attention to UX and responsive design.
                Currently growing towards a <strong>Full-Stack</strong> role.
            </p>

            <Skills />
        </main>
    );
}
