import { useEffect, useState } from "react";
import heroPhoto from "./assets/cover-optimized.jpg";
import profilePhoto from "./assets/profile.jpg";
import journalPhoto from "./assets/journal.jpg";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.JPG";

const GITHUB_PROFILE = "https://github.com/adhikariganesh9813";

const GitHubIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.867-.013-1.702-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const highlights = [
  { title: "Data Engineering", detail: "ETL/ELT pipelines, data modeling, and analytics layers", icon: "spark" },
  { title: "Software Engineering", detail: "2+ years shipping enterprise systems in semiconductor manufacturing", icon: "gear" },
  { title: "AI + Analytics", detail: "ML foundations, Business Intelligence, and data-driven decision support", icon: "globe" },
];

const skills = [
  "ETL/ELT & Pipelines", "Relational & NoSQL DBs", "Data Warehousing",
  "AI / Machine Learning", "Python", "SQL & MS SQL Server",
  "JavaScript", "Tableau & BI", "Airflow · Spark · Hadoop",
  "REST APIs · Postman", "IBM Cloud", ".NET",
  "Web Development", "Git & GitHub", "SDLC · Product Development",
];

const featuredProjects = [
  {
    title: "eLearning Web Platform — GeoTechBrain",
    description: "Full-stack e-learning platform for GeoTech Engineering PE License exam prep. Built and maintained as sole developer, covering coursework, quizzes, and structured exam prep content.",
    link: "https://github.com/adhikariganesh9813/eLearning-Web-Platform-geoTechBrain-",
    tags: ["Full-Stack", "Web", "Education"],
    category: "Web",
  },
  {
    title: "Pendulum Balancing — Reinforcement Learning",
    description: "Reinforcement learning agent trained to balance an inverted pendulum using Python. Explores policy gradient methods, reward shaping, and core RL fundamentals.",
    link: "https://github.com/adhikariganesh9813/Pendulum-Balancing-Reinforcement-Learning",
    tags: ["Python", "Machine Learning", "RL"],
    category: "ML",
  },
  {
    title: "Focus Mode Productivity App",
    description: "Cross-platform desktop deep-work timer for macOS & Windows. Features focus countdown, water-break reminders, voice alerts, session stats, a progress ring, and weekly/monthly/yearly focus charts.",
    link: "https://github.com/adhikariganesh9813/FocusMode-Productivity-App-for-PC-",
    tags: ["JavaScript", "Desktop", "App"],
    category: "App",
  },
];

const additionalProjects = [
  {
    title: "ETL Pipeline Project 3",
    description: "Advanced Python ETL pipeline for structured data engineering workflows and transformations.",
    link: "https://github.com/adhikariganesh9813/ETL-PJ-3",
    tags: ["Python", "ETL", "Data Engineering"],
    category: "Data",
  },
  {
    title: "ETL Pipeline Project 2",
    description: "Python ETL pipeline for extraction, transformation, and loading of structured data sources.",
    link: "https://github.com/adhikariganesh9813/ETL-PJ-2",
    tags: ["Python", "ETL"],
    category: "Data",
  },
  {
    title: "ETL Pipeline Project 1",
    description: "Python ETL pipeline for CSV, JSON, and XML data extraction, transformation, and loading.",
    link: "https://github.com/adhikariganesh9813/ETL-PJ-1",
    tags: ["Python", "ETL"],
    category: "Data",
  },
  {
    title: "Web Scraping — Film Data to SQLite",
    description: "Python ETL mini-project: scrape top film data from the web, export to CSV, and load into a SQLite database.",
    link: "https://github.com/adhikariganesh9813/Web-Scraping-1",
    tags: ["Python", "Web Scraping", "ETL"],
    category: "Data",
  },
  {
    title: "Text Analysis in Python",
    description: "Natural language processing and text analysis project using Python for extracting insights from textual data.",
    link: "https://github.com/adhikariganesh9813/Text-Analysis-in-Python",
    tags: ["Python", "NLP"],
    category: "Data",
  },
  {
    title: "Data Cleaning — Python & Pandas",
    description: "Data cleaning workflows using Python and Pandas to prepare structured datasets for analysis pipelines.",
    link: "https://github.com/adhikariganesh9813/Data-Cleaning-For-Data-Analysis-Python-Pandas",
    tags: ["Python", "Pandas"],
    category: "Data",
  },
  {
    title: "Data Project 4 — Categorical Encoding",
    description: "Notebook on categorical encoding with pandas get_dummies and scikit-learn LabelEncoder, including dummy creation and dataset merging.",
    link: "https://github.com/adhikariganesh9813/data-project-4-python",
    tags: ["Python", "Scikit-Learn", "Jupyter"],
    category: "Data",
  },
  {
    title: "Data Project 3 — Missing Data Imputation",
    description: "Advanced missing-data detection and imputation: statistical methods, KNN-based imputation, encoding, and visualization.",
    link: "https://github.com/adhikariganesh9813/data-project-3-python",
    tags: ["Python", "Pandas", "Jupyter"],
    category: "Data",
  },
  {
    title: "Data Project 2 — Missing Value Analysis",
    description: "Detect, visualize, and handle missing values in datasets using pandas and seaborn, including heatmaps and imputation strategies.",
    link: "https://github.com/adhikariganesh9813/data-project-2-python",
    tags: ["Python", "Seaborn", "Jupyter"],
    category: "Data",
  },
  {
    title: "Data Project 1 — Excel Survey Analysis",
    description: "Excel survey analysis using data cleaning, pivot tables, and charts to uncover music-listening behavior insights.",
    link: "https://github.com/adhikariganesh9813/data-project-1-excel",
    tags: ["Excel", "Data Analysis"],
    category: "Data",
  },
  {
    title: "Tableau Data Visualization",
    description: "Tableau story deck analyzing U.S. profit performance with KPI attainment at regional and state levels, and quarterly profit ratio trends.",
    link: "https://github.com/adhikariganesh9813/Tableau-Data-Visualization-Project",
    tags: ["Tableau", "BI", "Visualization"],
    category: "Data",
  },
  {
    title: "Python To Do List (macOS/Windows)",
    description: "Cross-platform desktop to-do list app built with Python and Tkinter for simple task management.",
    link: "https://github.com/adhikariganesh9813/pythonToDoList-macOS-windows-",
    tags: ["Python", "Tkinter", "App"],
    category: "App",
  },
  {
    title: "Library Management System — OOP",
    description: "Object-oriented library management system in Python demonstrating OOP design principles.",
    link: "https://github.com/adhikariganesh9813/LibraryManagementSystem-OOP",
    tags: ["Python", "OOP"],
    category: "App",
  },
  {
    title: "Shopping Website (HTML/CSS/JS)",
    description: "E-commerce website for a local shop built with HTML, CSS, and vanilla JavaScript.",
    link: "https://github.com/adhikariganesh9813/Shopping-Website---HTML-CSS-JS",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
  },
  {
    title: "Database Design Proposal",
    description: "Full project report proposing a database design for a travel company transitioning from Excel to a modern relational database.",
    link: "https://github.com/adhikariganesh9813/Proposal-for-Data-Integration-and-Database-Design---Full-Project-Report",
    tags: ["Database", "SQL", "Report"],
    category: "Data",
  },
  {
    title: "Research: Digital Marketing & Consumer Behavior",
    description: "Academic research on digital marketing and psychological aspects of consumer buying behavior, covering learning, motivational, and perceptual factors.",
    link: "https://github.com/adhikariganesh9813/Research-Paper-Digital-Marketing-and-Psychological-Aspects-of-Consumer-Buying-Behavior",
    tags: ["Research", "Marketing"],
    category: "Research",
  },
  {
    title: "Replace Text in a File",
    description: "Python utility script for finding and replacing text patterns across files.",
    link: "https://github.com/adhikariganesh9813/Replace-text-in-a-file",
    tags: ["Python", "Utility"],
    category: "Utility",
  },
];

const ALL_CATEGORIES = ["All", "Data", "App", "Web", "Research", "Utility"];

const icons = {
  globe: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3c2.8 3.2 2.8 14.8 0 18-2.8-3.2-2.8-14.8 0-18z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 8.6a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8Z" />
      <path d="M19.4 13.5c.1-.5.1-1 .1-1.5s0-1-.1-1.5l2-1.6-2-3.4-2.4.8a7.6 7.6 0 0 0-2.6-1.5l-.4-2.5h-4l-.4 2.5a7.6 7.6 0 0 0-2.6 1.5l-2.4-.8-2 3.4 2 1.6c-.1.5-.1 1-.1 1.5s0 1 .1 1.5l-2 1.6 2 3.4 2.4-.8a7.6 7.6 0 0 0 2.6 1.5l.4 2.5h4l.4-2.5a7.6 7.6 0 0 0 2.6-1.5l2.4.8 2-3.4-2-1.6Z" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l1.8 4.9L19 9l-5.2 1.1L12 15l-1.8-4.9L5 9l5.2-1.1L12 3Z" />
      <path d="M4 18l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </svg>
  ),
};

function ProjectCard({ project, featured = false }) {
  return (
    <article className="project-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
              style={{ background: "rgba(34,211,238,0.07)", color: "#7d8fa8", border: "1px solid rgba(34,211,238,0.12)" }}
            >
              {tag}
            </span>
          ))}
        </div>
        {featured && (
          <span
            className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em]"
            style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.25)" }}
          >
            Featured
          </span>
        )}
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate">{project.description}</p>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="github-btn self-start"
        aria-label={`View ${project.title} on GitHub`}
      >
        <GitHubIcon className="h-3.5 w-3.5" />
        View on GitHub
        <ExternalLinkIcon />
      </a>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const slides = [slide1, slide2, slide3];
  const [slideIndex, setSlideIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setSlideIndex((prev) => (prev + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredAdditional =
    categoryFilter === "All"
      ? additionalProjects
      : additionalProjects.filter((p) => p.category === categoryFilter);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background glow orbs */}
      <div className="pointer-events-none fixed -top-80 right-[-300px] h-[700px] w-[700px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)" }} />
      <div className="pointer-events-none fixed -bottom-80 left-[-300px] h-[700px] w-[700px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)" }} />
      <div className="pointer-events-none fixed top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)" }} />

      {/* ── Navigation ── */}
      <header
        className="sticky top-0 z-30 backdrop-blur-xl"
        style={{ background: "rgba(5,12,24,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl font-extrabold md:text-3xl">
            <span className="gradient-text">Ganesh</span>
            <span className="text-ink"> Adhikari</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {["About", "Projects", "Research", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate transition-all duration-200 hover:text-teal"
                style={{ "--hover-bg": "rgba(34,211,238,0.07)" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(34,211,238,0.07)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                {item}
              </a>
            ))}
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate transition-all duration-200 hover:text-teal"
              style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)"; e.currentTarget.style.background = "rgba(34,211,238,0.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </nav>

          <button
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate transition-colors duration-200 hover:text-teal md:hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="px-6 py-4 md:hidden animate-fade-in"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(5,12,24,0.95)" }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {["About", "Projects", "Research", "Contact"].map((item) => (
                <a
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate hover:text-teal"
                >
                  {item}
                </a>
              ))}
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate hover:text-teal"
                onClick={() => setMenuOpen(false)}
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub Profile
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-20 pt-4 md:pt-8">

        {/* ── Hero ── */}
        <section className="space-y-10">
          {/* Cover image */}
          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            <img
              src={heroPhoto}
              alt="Cover"
              className="h-40 w-full object-cover sm:h-56 md:h-72"
              style={{
                opacity: 0.55,
                maskImage: "linear-gradient(to right,transparent,black 4%,black 96%,transparent), linear-gradient(to bottom,transparent,black 8%,black 92%,transparent)",
                WebkitMaskImage: "linear-gradient(to right,transparent,black 4%,black 96%,transparent), linear-gradient(to bottom,transparent,black 8%,black 92%,transparent)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>

          {/* Hero content */}
          <div className="hero-grid grid items-center gap-8 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="order-2 space-y-6 reveal md:order-1">

              {/* Badge */}
              <div
                className="inline-flex flex-wrap items-center gap-2 rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] sm:px-4 sm:text-xs sm:tracking-[0.15em]"
                style={{ border: "1px solid rgba(34,211,238,0.18)", background: "rgba(34,211,238,0.05)", backdropFilter: "blur(8px)" }}
              >
                <span className="rounded-full px-2.5 py-1 text-slate sm:px-3" style={{ background: "rgba(255,255,255,0.05)" }}>
                  M.S. Computer Science
                </span>
                <span className="rounded-full px-2.5 py-1 sm:px-3" style={{ background: "rgba(34,211,238,0.12)", color: "#22d3ee" }}>
                  Texas Tech University
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-2xl font-bold text-ink sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                <span className="typing gradient-text">Software engineer</span>
                <span className="block mt-1 text-ink/80">blending engineering, analytics,</span>
                <span className="block text-ink/80">and product thinking.</span>
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-slate sm:text-base">
                M.S. Computer Science student at Texas Tech University with 2 years of professional experience in Japan.
                I build scalable data and software systems across ERP, analytics, and backend integration —
                with foundations in AI/ML and a focus on modern AI powered software engineering.
              </p>

              {/* CTAs */}
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a href="#projects" className="btn-primary w-full text-center sm:w-auto">
                  View Projects
                </a>
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub Profile
                </a>
              </div>

              {/* Stat chips */}
              <div className="flex flex-wrap gap-3 text-sm">
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(11,21,36,0.6)", backdropFilter: "blur(8px)" }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate/60">Interest</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Data Eng · Data Science · Software</p>
                </div>
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(11,21,36,0.6)", backdropFilter: "blur(8px)" }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate/60">Based In</p>
                  <p className="mt-1 text-sm font-semibold text-ink">Lubbock, TX & Sacramento, CA</p>
                </div>
              </div>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2">
                {["Data Engineering", "Data Science", "Software Engineer", "Data/Business Analysis", "Product Management"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate/60"
                    style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(11,21,36,0.5)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile photo */}
            <div
              className="hero-profile hero-profile-wrap order-1 relative mx-auto h-[340px] w-[250px] overflow-hidden rounded-[28px] reveal reveal-delay-2 sm:h-[390px] sm:w-[290px] md:order-2 md:h-[430px] md:w-[310px]"
              style={{ border: "1px solid rgba(34,211,238,0.15)" }}
            >
              {/* Subtle gradient overlay at top */}
              <div
                className="absolute inset-x-0 top-0 z-10 h-16 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, rgba(5,12,24,0.3), transparent)" }}
              />
              <img
                src={profilePhoto}
                alt="Ganesh Adhikari"
                className="h-full w-full object-cover object-[50%_10%] transition duration-500 hover:-translate-y-2"
              />
              {/* Bottom glow */}
              <div
                className="absolute inset-x-0 bottom-0 z-10 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(5,12,24,0.5), transparent)" }}
              />
            </div>
          </div>
        </section>

        {/* ── Highlights ── */}
        <section className="grid gap-5 md:grid-cols-3" aria-label="Expertise highlights">
          {highlights.map((item) => (
            <div key={item.title} className="card highlight-card">
              <div className="flex items-center justify-between">
                <div className="text-teal">{icons[item.icon]}</div>
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ background: "rgba(34,211,238,0.07)", color: "#7d8fa8", border: "1px solid rgba(34,211,238,0.12)" }}
                >
                  Highlight
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.detail}</p>
              {item.title === "Data Engineering" && (
                <div className="mt-6 flex justify-center">
                  <a
                    href="https://www.credly.com/badges/955e4e2a-da64-49f3-be7a-aac4d5568d9b/public_url"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-col items-center gap-2"
                    aria-label="View IBM Data Engineering Essentials badge on Credly"
                  >
                    <img
                      src="/credly-badge.png"
                      alt="IBM Data Engineering Essentials badge"
                      width="130"
                      height="130"
                      loading="lazy"
                      className="rounded-xl opacity-90 transition hover:opacity-100"
                      style={{ filter: "drop-shadow(0 0 12px rgba(34,211,238,0.15))" }}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/60">
                      IBM Data Engineering Essentials
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* ── About ── */}
        <section
          id="about"
          className="grid gap-12 rounded-[36px] p-8 md:p-12 md:grid-cols-[1fr_1.1fr]"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(11,21,36,0.6)", backdropFilter: "blur(12px)" }}
          aria-label="About me"
        >
          <div className="space-y-6">
            <div>
              <p className="section-label">Background</p>
              <h2 className="section-title mt-4">About Me</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
                I am a software engineer with hands-on experience developing data and ERP systems for semiconductor component manufacturing at TECDIA Co., Ltd. in Japan.
                I've automated ETL workflows, optimized MS SQL Server performance, integrated REST APIs, and designed analytics-ready reporting layers
                delivering actionable KPI insights.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate sm:text-base">
              Pursuing M.S. in Computer Science at Texas Tech University (expected Dec 2026). Seeking a full time role to contribute
              to data/software engineering and analytics while collaborating across software, data science, and product teams.
            </p>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Core Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative grid gap-6">
            <div className="overflow-hidden rounded-[28px]" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <img
                src={journalPhoto}
                alt="TECDIA journal feature"
                className="h-96 w-full object-contain md:h-[28rem]"
                style={{ background: "rgba(11,21,36,0.4)" }}
              />
            </div>
            <div className="overflow-hidden rounded-[28px]" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <img
                src={slides[slideIndex]}
                alt={`About slideshow ${slideIndex + 1}`}
                className="h-64 w-full object-contain md:h-72"
                style={{ background: "rgba(11,21,36,0.4)" }}
              />
              <div className="flex justify-end px-4 py-3">
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlideIndex(idx)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${slideIndex === idx ? "w-5 bg-teal" : "bg-slate/30"}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-5 -right-5 hidden rounded-2xl px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate md:block"
              style={{ border: "1px solid rgba(34,211,238,0.15)", background: "rgba(5,12,24,0.9)", backdropFilter: "blur(8px)" }}
            >
              4 Languages · Global Experience
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="space-y-10" aria-label="Projects">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="section-title mt-4">Projects & Products</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate sm:text-base">
                A curated selection of projects across software engineering, data analysis, machine learning, and web products.
                All open source — available on GitHub.
              </p>
            </div>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate transition-all duration-200 hover:text-teal"
              style={{ border: "1px solid rgba(255,255,255,0.09)", background: "rgba(11,21,36,0.6)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
            >
              <GitHubIcon className="h-4 w-4" />
              View GitHub Profile
            </a>
          </div>

          {/* Featured — always visible */}
          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>

          {/* Expand / Collapse */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
              <button
                onClick={() => { setShowAllProjects((p) => !p); setCategoryFilter("All"); }}
                className="expand-btn"
                aria-expanded={showAllProjects}
              >
                <span>{showAllProjects ? "Hide Additional Projects" : `Show All Projects (${additionalProjects.length} more)`}</span>
                <ChevronDownIcon open={showAllProjects} />
              </button>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            {showAllProjects && (
              <div className="space-y-8 animate-fade-in">
                {/* Category filters */}
                <div className="flex flex-wrap gap-2">
                  {ALL_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
                      style={
                        categoryFilter === cat
                          ? { background: "linear-gradient(125deg,#22d3ee,#818cf8)", color: "#050c18", fontWeight: 700 }
                          : { border: "1px solid rgba(255,255,255,0.09)", background: "rgba(11,21,36,0.6)", color: "#7d8fa8" }
                      }
                      onMouseEnter={e => { if (categoryFilter !== cat) { e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)"; e.currentTarget.style.color = "#22d3ee"; } }}
                      onMouseLeave={e => { if (categoryFilter !== cat) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "#7d8fa8"; } }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Additional project grid */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {filteredAdditional.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>

                {filteredAdditional.length === 0 && (
                  <p className="text-center text-sm text-slate/50">No projects in this category.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── Research ── */}
        <section
          id="research"
          className="grid gap-10 rounded-[36px] p-8 md:p-12 md:grid-cols-[1.1fr_0.9fr]"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(11,21,36,0.5)", backdropFilter: "blur(12px)" }}
          aria-label="Research"
        >
          <div className="space-y-5">
            <p className="section-label">Research</p>
            <h2 className="section-title mt-3">Digital Marketing & Consumer Psychology</h2>
            <p className="text-sm leading-relaxed text-slate sm:text-base">
              This research examines the effects of digital marketing on consumer psychological buying behavior, focusing on learning,
              motivational, and perceptual aspects. It highlights how firms can better understand customer behavior and apply these insights
              to grow their business.
            </p>
            <a
              href="https://github.com/adhikariganesh9813/Research-Paper-Digital-Marketing-and-Psychological-Aspects-of-Consumer-Buying-Behavior"
              className="btn-secondary inline-flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              View Paper on GitHub
              <ExternalLinkIcon />
            </a>
          </div>
          <div
            className="rounded-[24px] p-7"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(11,21,36,0.5)" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal/70">Key Takeaways</p>
            <ul className="mt-5 space-y-4 text-sm text-slate">
              {[
                "Digital marketing reshapes consumer learning patterns.",
                "Motivational and perceptual shifts impact buying intent.",
                "Actionable insights for firms embracing digitalization.",
                "Psychology-first perspective for marketing strategy.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal/50" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          className="rounded-[36px] p-8 md:p-12"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(11,21,36,0.6)", backdropFilter: "blur(12px)" }}
          aria-label="Contact"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <p className="section-label">Contact</p>
              <h2 className="section-title mt-4">Let&apos;s Connect</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                Open to Summer 2026 internships across data engineering, data science, software engineering, analytics, and product roles.
                Flexible on location.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:min-w-[240px]">
              <a href="mailto:adhikariganesh9813@gmail.com" className="btn-primary text-center text-sm">
                adhikariganesh9813@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ganesh-adhikari-148918101"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn Profile
              </a>
              <a
                href={GITHUB_PROFILE}
                className="btn-secondary inline-flex items-center justify-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(5,12,24,0.8)" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate md:flex-row">
          <p>© 2026 Ganesh Adhikari. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-teal"
              href="https://www.linkedin.com/in/ganesh-adhikari-148918101"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-teal"
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`back-to-top ${showBackToTop ? "flex" : "hidden"}`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
