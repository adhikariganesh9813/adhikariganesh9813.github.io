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
    className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const highlights = [
  { title: "Data Engineering", detail: "ETL/ELT pipelines, data modeling, and analytics layers", icon: "spark" },
  { title: "Software & ERP", detail: "2+ years shipping enterprise systems in semiconductor manufacturing", icon: "gear" },
  { title: "AI + Analytics", detail: "ML foundations, Business Intelligence, and data-driven decision support", icon: "globe" },
];

const skills = [
  "ETL/ELT & Pipelines",
  "Relational & NoSQL DBs",
  "Data Warehousing",
  "AI / Machine Learning",
  "Python",
  "SQL & SQL Server",
  "JavaScript",
  "Tableau & BI",
  "Airflow · Spark · Hadoop",
  "REST APIs · Postman",
  "IBM Cloud",
  ".NET",
  "Web Development",
  "Git & GitHub",
  "SDLC · Product Development",
  "Product Management",
];

const featuredProjects = [
  {
    title: "eLearning Web Platform — GeoTechBrain",
    description:
      "Full-stack e-learning platform for GeoTech Engineering PE License exam prep. Built and maintained as sole developer, covering coursework, quizzes, and structured exam prep content. Currently in testing phase.",
    link: "https://github.com/adhikariganesh9813/eLearning-Web-Platform-geoTechBrain-",
    tags: ["Full-Stack", "Web", "Education"],
    category: "Web",
  },
  {
    title: "Pendulum Balancing — Reinforcement Learning",
    description:
      "Reinforcement learning agent trained to balance an inverted pendulum using Python. Explores policy gradient methods, reward shaping, and core RL fundamentals for classic control problems.",
    link: "https://github.com/adhikariganesh9813/Pendulum-Balancing-Reinforcement-Learning",
    tags: ["Python", "Machine Learning", "RL"],
    category: "ML",
  },
  {
    title: "Focus Mode Productivity App",
    description:
      "Cross-platform desktop deep-work timer for macOS & Windows. Features focus countdown, pause/reset, optional water-break reminders, voice/audio alerts, session stats, a progress ring, and weekly/monthly/yearly focus charts with week navigation.",
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
    description: "Object-oriented library management system in Python demonstrating OOP design principles and data structure fundamentals.",
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
    description: "Full project report proposing a database design for a travel company transitioning from Excel spreadsheets to a modern relational database.",
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
    description: "Python utility script for finding and replacing text patterns across files — a handy text processing tool.",
    link: "https://github.com/adhikariganesh9813/Replace-text-in-a-file",
    tags: ["Python", "Utility"],
    category: "Utility",
  },
];

const ALL_CATEGORIES = ["All", "Data", "App", "Web", "Research", "Utility"];

const icons = {
  code: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 9l-4 3 4 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19l4-14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3c2.8 3.2 2.8 14.8 0 18-2.8-3.2-2.8-14.8 0-18z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 8.6a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8Z" />
      <path d="M19.4 13.5c.1-.5.1-1 .1-1.5s0-1-.1-1.5l2-1.6-2-3.4-2.4.8a7.6 7.6 0 0 0-2.6-1.5l-.4-2.5h-4l-.4 2.5a7.6 7.6 0 0 0-2.6 1.5l-2.4-.8-2 3.4 2 1.6c-.1.5-.1 1-.1 1.5s0 1 .1 1.5l-2 1.6 2 3.4 2.4-.8a7.6 7.6 0 0 0 2.6 1.5l.4 2.5h4l.4-2.5a7.6 7.6 0 0 0 2.6-1.5l2.4.8 2-3.4-2-1.6Z" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l1.8 4.9L19 9l-5.2 1.1L12 15l-1.8-4.9L5 9l5.2-1.1L12 3Z" />
      <path d="M4 18l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </svg>
  ),
};

function ProjectCard({ project, featured = false }) {
  return (
    <article className="project-card flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-fog/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate"
            >
              {tag}
            </span>
          ))}
        </div>
        {featured && (
          <span className="shrink-0 rounded-full bg-teal/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-teal ring-1 ring-teal/20">
            Featured
          </span>
        )}
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="font-display text-xl font-semibold leading-snug text-ink">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate">{project.description}</p>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="github-btn inline-flex items-center gap-2 self-start"
        aria-label={`View ${project.title} on GitHub`}
      >
        <GitHubIcon className="h-4 w-4" />
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
      <div className="pointer-events-none absolute -top-32 right-[-120px] h-64 w-64 rounded-full bg-teal/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 left-[-80px] h-72 w-72 rounded-full bg-coral/20 blur-2xl" />

      {/* ── Navigation ── */}
      <header className="sticky top-0 z-30 border-b border-fog/80 bg-cloud/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-2xl font-extrabold text-ink md:text-3xl">
            <span className="text-teal">Ganesh</span>{" "}
            <span className="text-ink">Adhikari</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {["About", "Projects", "Research", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate transition-colors duration-200 hover:bg-teal/10 hover:text-teal"
              >
                {item}
              </a>
            ))}
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-lg border border-ink/15 bg-white/70 px-4 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-teal/60 hover:bg-teal/10 hover:text-teal"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </nav>

          <button
            className="rounded-lg border border-ink/15 bg-white/70 px-3 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-teal hover:text-teal md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-fog/80 bg-cloud px-6 py-4 md:hidden animate-fade-in"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {["About", "Projects", "Research", "Contact"].map((item) => (
                <a
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate hover:bg-teal/10 hover:text-teal"
                >
                  {item}
                </a>
              ))}
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-ink/15 px-3 py-2.5 text-sm font-semibold text-ink hover:text-teal"
                onClick={() => setMenuOpen(false)}
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub Profile
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-16 pt-4 md:pb-20 md:pt-8">

        {/* ── Hero ── */}
        <section className="space-y-10">
          <div className="overflow-hidden">
            <img
              src={heroPhoto}
              alt="Cover"
              className="h-40 w-full object-cover opacity-95 sm:h-56 md:h-72 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent),linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)] [mask-composite:intersect]"
            />
          </div>

          <div className="hero-grid grid items-center gap-8 sm:gap-10 lg:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 space-y-5 reveal md:order-1 lg:pr-0">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-fog/80 bg-white/80 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-ink shadow-soft sm:px-4 sm:text-sm sm:tracking-[0.15em]">
                <span className="rounded-full bg-fog px-2.5 py-1 text-ink sm:px-3 sm:py-1.5">M.S. Computer Science</span>
                <span className="rounded-full bg-white px-2.5 py-1 text-ink sm:px-3 sm:py-1.5">Texas Tech University</span>
              </div>
              <h1 className="font-display text-2xl font-semibold text-ink sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="typing">Software engineer</span>
                <span className="block">blending engineering, analytics, and product thinking.</span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate sm:text-lg">
                M.S. Computer Science student at Texas Tech University with 2+ years of professional experience in Software Engineering at Japanese semiconductor component manufacturer. I build scalable data and
                software systems across ERP, analytics, and backend integration, with foundations in AI/ML and a focus on modern software engineering.
              </p>
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
              <div className="flex flex-col gap-3 text-sm text-slate sm:flex-row sm:flex-wrap sm:gap-4">
                <div className="glass rounded-2xl px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate/70">Interest</p>
                  <p className="mt-1 font-semibold text-ink">Data Eng · Data Science · Software</p>
                </div>
                <div className="glass rounded-2xl px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate/70">Based In</p>
                  <p className="mt-1 font-semibold text-ink">Lubbock, TX & Rancho Cordova, CA</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-slate/60 sm:text-xs sm:tracking-[0.2em]">
                {["Data Engineering", "Data Science", "Software Engineer", "Data/Business Analysis", "Product Management"].map((tag) => (
                  <span key={tag} className="rounded-full border border-fog/80 bg-white/80 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-profile order-1 relative mx-auto reveal reveal-delay-2 h-[360px] w-[260px] overflow-hidden rounded-[32px] border border-fog/80 bg-white/80 sm:h-[400px] sm:w-[300px] md:order-2 md:h-[440px] md:w-[320px] md:mx-auto lg:ml-0 lg:mr-0">
              <img
                src={profilePhoto}
                alt="Ganesh Adhikari"
                className="relative h-full w-full rounded-[32px] object-cover object-[50%_10%] shadow-glow transition duration-500 hover:-translate-y-2 hover:shadow-lift"
              />
            </div>
          </div>
        </section>

        {/* ── Highlights ── */}
        <section className="grid gap-6 md:grid-cols-3" aria-label="Expertise highlights">
          {highlights.map((item) => (
            <div key={item.title} className="card glass highlight-card">
              <div className="flex items-center justify-between">
                <div className="text-teal">{icons[item.icon]}</div>
                <span className="rounded-full bg-fog px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                  Highlight
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.detail}</p>
              {item.title === "Data Engineering" && (
                <div className="mt-6 flex justify-center">
                  <a
                    href="https://www.credly.com/badges/955e4e2a-da64-49f3-be7a-aac4d5568d9b/public_url"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex"
                    aria-label="View IBM Data Engineering Essentials badge on Credly"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src="/credly-badge.png"
                        alt="IBM Data Engineering Essentials badge"
                        width="150"
                        height="150"
                        loading="lazy"
                        className="rounded-md shadow-soft"
                      />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate/70">
                        IBM Data Engineering Essentials
                      </span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* ── About ── */}
        <section
          id="about"
          className="grid gap-12 rounded-[40px] border border-fog/80 bg-white/80 p-8 shadow-soft md:p-10 md:grid-cols-[1fr_1.1fr]"
          aria-label="About me"
        >
          <div className="space-y-6">
            <div>
              <p className="section-label">Background</p>
              <h2 className="section-title mt-3">About Me</h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                I'm a software engineer with hands-on experience building data and ERP systems in the semiconductor manufacturing industry at TECDIA
                Co. Ltd. I've automated ETL workflows, optimized MS SQL Server performance, integrated REST APIs, and designed analytics-ready
                reporting layers that deliver actionable KPI insights.
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate">
              I'm pursuing my M.S. in Computer Science at Texas Tech University (expected Dec 2026). I am interested in data/software engineering and analytics while collaborating across software, data science, and product teams.
            </p>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">Core Skills</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative grid gap-6">
            <div className="rounded-[32px]">
              <img
                src={journalPhoto}
                alt="TECDIA journal feature"
                className="h-96 w-full rounded-[32px] object-contain md:h-[28rem]"
              />
            </div>
            <div className="rounded-[32px]">
              <img
                src={slides[slideIndex]}
                alt={`About slideshow ${slideIndex + 1}`}
                className="h-72 w-full rounded-[32px] object-contain md:h-80"
              />
              <div className="mt-4 flex justify-end">
                <div className="flex gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlideIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition ${slideIndex === idx ? "bg-teal" : "bg-slate/30"}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-3xl border border-ink/10 bg-cloud/90 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate md:block">
              4 Languages · Global Experience
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="space-y-10" aria-label="Projects">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="section-title mt-3">Projects & Products</h2>
              <p className="mt-3 max-w-2xl text-base text-slate">
                A curated selection of projects across software engineering, data analysis, machine learning, and web products. All projects are
                open source and available on GitHub.
              </p>
            </div>
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate transition-colors duration-200 hover:border-teal/60 hover:text-teal"
            >
              <GitHubIcon className="h-4 w-4" />
              View GitHub Profile
            </a>
          </div>

          {/* Featured (always visible) */}
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>

          {/* Expand / Collapse */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-fog/80" />
              <button
                onClick={() => {
                  setShowAllProjects((prev) => !prev);
                  setCategoryFilter("All");
                }}
                className="expand-btn inline-flex items-center gap-2.5"
                aria-expanded={showAllProjects}
              >
                <span>{showAllProjects ? "Hide Additional Projects" : `Show All Projects (${additionalProjects.length} more)`}</span>
                <ChevronDownIcon open={showAllProjects} />
              </button>
              <div className="h-px flex-1 bg-fog/80" />
            </div>

            {showAllProjects && (
              <div className="space-y-8 animate-fade-in">
                {/* Category filters */}
                <div className="flex flex-wrap gap-2">
                  {ALL_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                        categoryFilter === cat
                          ? "bg-teal text-white shadow-soft"
                          : "border border-ink/15 bg-white/70 text-slate hover:border-teal/60 hover:text-teal"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Additional project grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredAdditional.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>

                {filteredAdditional.length === 0 && (
                  <p className="text-center text-sm text-slate/60">No projects in this category.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ── Research ── */}
        <section
          id="research"
          className="grid gap-10 rounded-[36px] border border-fog/80 bg-cloud/90 p-8 md:p-10 md:grid-cols-[1.1fr_0.9fr]"
          aria-label="Research"
        >
          <div className="space-y-4">
            <p className="section-label">Research</p>
            <h2 className="section-title mt-3">Digital Marketing & Consumer Psychology</h2>
            <p className="text-base text-slate">
              This research examines the effects of digital marketing on consumer psychological buying behavior, focusing on learning, motivational,
              and perceptual aspects. It highlights how firms can better understand customer behavior and apply these insights to grow their business.
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
          <div className="glass rounded-[28px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">Key Takeaways</p>
            <ul className="mt-6 space-y-4 text-base text-slate">
              <li>Digital marketing reshapes consumer learning patterns.</li>
              <li>Motivational and perceptual shifts impact buying intent.</li>
              <li>Actionable insights for firms embracing digitalization.</li>
              <li>Psychology-first perspective for marketing strategy.</li>
            </ul>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          className="rounded-[32px] border border-fog/80 bg-white/80 p-8 shadow-soft md:p-10"
          aria-label="Contact"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="section-title mt-3">Let&apos;s Connect</h2>
              <p className="mt-3 text-base text-slate">
                Open to roles across data engineering, data science, software engineering, and analytics.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:min-w-[250px]">
              <a href="mailto:adhikariganesh9813@gmail.com" className="btn-primary text-center">
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
      <footer className="border-t border-fog/80 bg-cloud/80">
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
