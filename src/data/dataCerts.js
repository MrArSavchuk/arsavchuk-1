import diplomImg from "../assets/diplom.png";
import certificateHtmlImg from "../assets/sertificatehtml.png";
import certificateReactReduxlImg from "../assets/sertificate_React_Redux.png";
import placeholderImg from "../assets/placeholder.png";

export const certs = [
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
        title: "Certificate",
        meta: "Montreal, Canada",
        info: "React, Redux",
        img: certificateReactReduxlImg,
        alt: "Certificate in React, Redux",
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