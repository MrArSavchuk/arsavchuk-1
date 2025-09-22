const IMG = {
    table1: new URL("../assets/TableTime.png", import.meta.url).href,
    table2: new URL("../assets/TableTime2.png", import.meta.url).href,
    cine1: new URL("../assets/Cinescope_pht.png", import.meta.url).href,
    cine2: new URL("../assets/Cinescope_pht2.png", import.meta.url).href,
    fin1: new URL("../assets/fintrack_pht.png", import.meta.url).href,
    fin2: new URL("../assets/fintrack_pht2.png", import.meta.url).href,
    dish1: new URL("../assets/Choose_You_Dish_pht.png", import.meta.url).href,
    dish2: new URL("../assets/Choose_You_Dish_pht2.png", import.meta.url).href,
};

export const projects = [
    {
        key: "tabletime",
        title: "TableTime — Table Booking Service",
        tagline: "One-page booking app",
        desc: "A single-page app for quick restaurant table reservations.",
        features: [
            "Form validation (React Hook Form)",
            "Booking confirmation (mock API)",
            "Dark / Light theme",
        ],
        links: {
            live: "https://tabletime123.netlify.app",
            github: "https://github.com/MrArSavchuk/TableTime",
        },
        img: [IMG.table1, IMG.table2],
        tech: ["React", "CSS Modules", "React Hook Form", "Mock API"],
        color: "#A56C53",
    },
    {
        key: "cinescope",
        title: "CineScope — Movies & TV Search",
        tagline: "Search movies & shows",
        desc: "Find movies by title or genre with ratings, posters, and overviews.",
        features: ["TheMovieDB API", "Genre filters"],
        links: {
            live: "https://cinemascope123.netlify.app",
            github: "https://github.com/MrArSavchuk/Cinemascope",
        },
        img: [IMG.cine1, IMG.cine2],
        tech: ["React", "Axios", "Styled Components", "TMDB API"],
        color: "#3B82F6",
    },
    {
        key: "fintrack",
        title: "FinTrack — Personal Finance Tracker",
        tagline: "Track income & spend",
        desc: "Track income and expenses with interactive charts and categories.",
        features: ["Chart.js visualizations", "LocalStorage persistence", "Live balance"],
        links: {
            live: "https://fin-track123.netlify.app",
            github: "https://github.com/MrArSavchuk/fintrack",
        },
        img: [IMG.fin1, IMG.fin2],
        tech: ["React", "Chart.js", "CSS"],
        color: "#F59E0B",
    },
    {
        key: "recipehub",
        title: "Choose You Dish — Personalized Recipe & Meal Finder",
        tagline: "Find & discover recipes",
        desc: "Find and discover recipes with photos and tags.",
        features: ["React", "Booking confirmation (mock API)", "Ingredient search"],
        links: {
            live: "https://chooseyoudish.netlify.app",
            github: "https://github.com/MrArSavchuk/Choose_Your_Dish",
        },
        img: [IMG.dish1, IMG.dish2],
        tech: ["React", "React Hook Form", "CSS", "API"],
        color: "#06B6D4",
    },
];