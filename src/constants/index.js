import {studentManagement, vlogBook,compressorDecompressor,portfol,tcs,luffy } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    plsql,
    cpp,
    sql,
    python,
    java,
    gfg,
    accio
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cpp,
        name: "c++",
        type: "DB",
    },
    {
        imageUrl: sql,
        name: "sql",
        type: "DB",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "DB",
    },
    {
        imageUrl: java,
        name: "java",
        type: "DB",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: plsql,
        name: "Pl/SQL",
        type: "DB",
    }
];

export const experiences = [
    {
        title: "Tata Consultency Services",
        company_name: "Designation - Systems Engineer",
        icon: tcs,
        iconBg: "#E37B2C",
        date: "August 2023 - June 2025",
        points: [
                 "👨‍💼 Led a 5-member team in Agile setup to deliver a full Line of Business system within 8 months.",
            "🚀 Designed and optimized RESTful Java backend services, boosting processing efficiency by 30%.",
            "🛠️ Worked extensively on PL/SQL—debugging legacy code and enhancing database procedures for smoother functionality.",
        ],
        link: "https://www.tcs.com/"
    },
    {
        title: "Manhwa.ai",
        company_name: "AI-Powered Video Creation Platform",
        icon: luffy, // Make sure to import your logo/icon variable
        iconBg: "#383E56",
        //date: "Oct 2025 - Present",
        points: [
            "🚀 \"Engineered a hybrid AI platform that transforms static Manga PDFs into narrated cinematic videos.\"",
            "🧰 \"Tech Used: FastAPI, React.js, FFmpeg.wasm, Docker, Supabase, Google Gemini, python.\"",
            "⚡ \"Implemented client-side video rendering via WebAssembly, effectively reducing backend GPU infrastructure costs to zero.\"",
            "🤖 \"Integrated multimodal LLMs to analyze visual context and auto-generate engaging 'Hinglish' narration scripts.\"",
            "☁️ \"Deployed scalable microservices on Google Cloud Run with automated CI/CD pipelines for reliable delivery.\"",
        ],
        link: "https://manhwa-ai-theta.vercel.app/"
    },
    {
        title: "VlogBook",
        company_name: "A dedicted website for Vlogers",
        icon: vlogBook,
        iconBg: "#accbe1",
        //date: "March 2020 - April 2021",
        points: [
           "🧑‍🤝‍🧑 \"We created this web app after surveying around 400 people.\"",
            "🧰 \"Tech Used: HTML5, CSS3, JS/ES6, Node.js, MongoDB Atlas.\"",
            "📍 \"By tracking the user's current location, it suggests the best trending places to visit.\"",
            "🤝 \"Learned the importance of code quality and team collaboration by actively participating in peer code reviews during my final year project.\"",
        ],
        link: "https://vlogbook.netlify.app/"
    },
    {
        title: "Student Management System",
        company_name: "Manage student information in a academic structure",
        icon: studentManagement,
        iconBg: "#fbc3bc",
        //date: "Jan 2021 - Feb 2022",
        points: [
           "🖥️ \"Built a desktop application using Java Swing to manage student records with a user-friendly GUI.\"",
            "🧰 \"Tech Used: Java, Java Swing, Object-Oriented Programming.\"",
            "🛠️ \"Implemented CRUD operations (Create, Read, Update, Delete) for student data using object-oriented principles.\"",
            "🗂️ \"Designed intuitive forms and tables using Swing components like JFrame, JTable, and JTextField.\""
        ],
        link:"https://github.com/anurag-bitan/Student_manegment"
        
    },
    {
        title: "Compressor-Decompressor",
        company_name: "Compress and Decompress files",
        icon: compressorDecompressor,
        iconBg: "#b7e4c7",
        //date: "Jan 2022 - Jan 2023",
        points: [
            "🧠 Designed and implemented a **lossless compression** 📦 as well as **decompression** 🔓",
            "🧰 Tech Used: **Java** ☕, **Java Swing** 🖼️",
            "📁 Implemented **file I/O operations** with **GZIP compression** 🗜️ using `GZIPOutputStream` and `GZIPInputStream` from the `java.util.zip` package 📦",
        ],
         link:"https://github.com/anurag-bitan/compressor_decompressor"
    },
     {
        title: "First Portfolio",
        company_name: "A responsive portfolio website",
        icon: portfol,
        iconBg: "#a2d2ff",
        //date: "March 2020 - April 2021",
        points: [
            "🧑‍🎨 Built a fully responsive portfolio website using HTML, CSS, and vanilla JavaScript, showcasing personal projects, skills, and contact information.",
            "🧰 Tech Used: HTML5, CSS3 (Flexbox & Grid), JavaScript (ES6), GitHub Pages",
            "🌐 Emphasized clean layout, scroll animations, and smooth navigation to create an engaging user experience.",
            "🛠️ Utilized JavaScript DOM manipulation for interactivity like dynamic modals, navbar toggling, and scroll-based highlights.",
            
        ],
        link: "https://anurag-bitan.github.io/"
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/anurag-bitan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/anurag-bhattacharya-256b351a4',
    }
    ,{
        name: 'GFG',
        iconUrl: gfg,
        link: 'https://www.geeksforgeeks.org/user/anuragbhattacharya1/',
    }
    ,{
        name: 'Acciojob',
        iconUrl: accio,
        link: 'https://storage.googleapis.com/acciojob-user-content/profileShareLink/e9d38d96-2407-43e9-a058-9caa33cfa1db-anurag20302001@gmail.com2025-07-21T15:19:24.922Z.jpeg',
    }
];
