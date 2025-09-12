import Skills from "../components/Skills";
import "../App.css";

export default function About() {
    const info = [
        { label: "Experience", value: "3+ years" },
        { label: "Location", value: "USA (ET)" },
        { label: "Availability", value: "24 / 7" },
        { label: "Tech Focus", value: "Front-End (React)" },
        { label: "Languages", value: "English / Russian" },
        { label: "Goal", value: "Grow into Full-Stack" },
    ];

    const skills = [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 70 },
        { name: "Redux", level: 78 },
        { name: "Node.js", level: 60 },
        { name: "REST API", level: 82 },
        { name: "Git/GitHub", level: 90 },
        { name: "Responsive Design", level: 92 },
    ];

    return (
        <main className="page">
            <h1 className="page-title">About Me</h1>
            <p className="page-sub">
                Front-End Developer skilled in <strong>HTML5, CSS3, JavaScript (ES6+), React, Redux</strong> and modern build tools.
                Experienced in working with <strong>REST APIs</strong>, Git/GitHub and Node.js.
                Focused on clean, maintainable code with strong attention to UX and responsive design.
                Currently growing towards a <strong>Full-Stack</strong> role.
            </p>
            <Skills info={info} skills={skills} />
        </main>
    );
}
