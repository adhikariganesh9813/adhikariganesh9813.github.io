import { useEffect, useState } from "react";
import heroPhoto from "./assets/cover.jpg";
import profilePhoto from "./assets/profile.jpg";
import journalPhoto from "./assets/journal.jpg";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.JPG";

const highlights = [
  {
    title: "Data Engineering",
    detail: "ETL/ELT pipelines, data modeling, and analytics layers",
    icon: "spark",
  },
  {
    title: "Software & ERP",
    detail: "2+ years shipping enterprise systems in manufacturing",
    icon: "gear",
  },
  {
    title: "AI + Analytics",
    detail: "ML foundations, Business Intelligence, and data‑driven decision support",
    icon: "globe",
  },
];

const skills = [
  "ETL/ELT & Pipelines",
  "Relational & NoSQL DBs",
  "Data Warehousing",
  "AI / Machine Learning",
  "Python (Pandas, NumPy, Scikit‑Learn)",
  "SQL & SQL Server",
  "JavaScript",
  "Tableau & BI",
  "Airflow · Spark · Hadoop",
  "REST APIs · Postman",
  "IBM Cloud",
  "Dot Net",
  "Web Development",
  "Git & GitHub",
  "SDLC · Product Development",
  "Product Management",
];

const projects = [
  {
    title: "Data Cleaning For Data Analysis Python Pandas",
    subtitle: "Data Project | Python | Pandas",
    link: "https://github.com/adhikariganesh9813/Data-Cleaning-For-Data-Analysis-Python-Pandas",
    tags: ["Data", "Python"],
    category: "Data",
    icon: "grid",
  },
  {
    title: "Data Project 1 Excel",
    subtitle: "Data analysis/ Vizualization - Excel",
    link: "https://github.com/adhikariganesh9813/data-project-1-excel",
    tags: ["Data"],
    category: "Data",
    icon: "grid",
  },
  {
    title: "Data Project 2 Python",
    subtitle: "GitHub repository",
    link: "https://github.com/adhikariganesh9813/data-project-2-python",
    tags: ["Notebook", "Data", "Python"],
    category: "Data",
    icon: "grid",
  },
  {
    title: "Data Project 3 Python",
    subtitle: "GitHub repository",
    link: "https://github.com/adhikariganesh9813/data-project-3-python",
    tags: ["Notebook", "Data", "Python"],
    category: "Data",
    icon: "grid",
  },
  {
    title: "Data Project 4 Python",
    subtitle: "GitHub repository",
    link: "https://github.com/adhikariganesh9813/data-project-4-python",
    tags: ["Notebook", "Data", "Python"],
    category: "Data",
    icon: "grid",
  },
  {
    title: "ELearning Web Platform GeoTechBrain",
    subtitle: "Full stack development, I am sole developer of this site. (Currently in testing phase)",
    link: "https://github.com/adhikariganesh9813/eLearning-Web-Platform-geoTechBrain-",
    tags: ["Web"],
    category: "Web",
    icon: "grid",
  },
  {
    title: "Focus Mode App (macOS/Windows)",
    subtitle: "GitHub repository",
    link: "https://github.com/adhikariganesh9813/FocusModeApp_NoVoice_macOS_Windows_x64",
    tags: ["JavaScript", "App"],
    category: "App",
    icon: "grid",
  },
  {
    title: "Library Management System (OOP)",
    subtitle: "GitHub repository",
    link: "https://github.com/adhikariganesh9813/LibraryManagementSystem-OOP",
    tags: ["Python"],
    category: "App",
    icon: "grid",
  },
  {
    title: "Personal Website",
    subtitle: "Personal website developed by me for my own personal portfolio. Planning to scale up the features in near future.",
    link: "https://github.com/adhikariganesh9813/Personal-Website-",
    tags: ["Web"],
    category: "Web",
    icon: "grid",
  },
  {
    title: "Proposal for Data Integration and Database Design",
    subtitle: "Database design proposal report for a travel company moving from Excel to a modern database.",
    link: "https://github.com/adhikariganesh9813/Proposal-for-Data-Integration-and-Database-Design---Full-Project-Report",
    tags: ["Data", "Database"],
    category: "Data",
    icon: "grid",
  },
  {
    title: "Python To Do List (macOS/Windows)",
    subtitle: "To do list app using Python & Tkinter",
    link: "https://github.com/adhikariganesh9813/pythonToDoList-macOS-windows-",
    tags: ["Python", "App"],
    category: "App",
    icon: "grid",
  },
  {
    title: "Replace Text in a File",
    subtitle: "Personal projects",
    link: "https://github.com/adhikariganesh9813/Replace-text-in-a-file",
    tags: ["Python"],
    category: "Others",
    icon: "grid",
  },
  {
    title: "Research Paper: Digital Marketing & Consumer Behavior",
    subtitle: "Research paper on digital marketing and psychological aspects of consumer buying behavior.",
    link: "https://github.com/adhikariganesh9813/Research-Paper-Digital-Marketing-and-Psychological-Aspects-of-Consumer-Buying-Behavior",
    tags: ["Research"],
    category: "Others",
    icon: "grid",
  },
  {
    title: "Shopping Website (HTML/CSS/JS)",
    subtitle: "Website project for a local shop",
    link: "https://github.com/adhikariganesh9813/Shopping-Website---HTML-CSS-JS",
    tags: ["HTML", "Web"],
    category: "Web",
    icon: "grid",
  },
  {
    title: "Tableau Data Visualization Project",
    subtitle: "GitHub repository",
    link: "https://github.com/adhikariganesh9813/Tableau-Data-Visualization-Project",
    tags: ["Data", "Tableau"],
    category: "Data",
    icon: "grid",
  },
];

const icons = {
  code: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 9l-4 3 4 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19l4-14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 16v-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16V8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 16v-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3c2.8 3.2 2.8 14.8 0 18-2.8-3.2-2.8-14.8 0-18z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const slides = [slide1, slide2, slide3];
  const [slideIndex, setSlideIndex] = useState(0);
  const [projectFilter, setProjectFilter] = useState("All");

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-32 right-[-120px] h-64 w-64 rounded-full bg-teal/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 left-[-80px] h-72 w-72 rounded-full bg-coral/20 blur-2xl" />

      <header className="sticky top-0 z-30 border-b border-fog/80 bg-cloud/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-3xl font-extrabold text-ink">
            <span className="text-teal">Ganesh</span> <span className="text-ink">Adhikari</span>
          </a>
          <nav className="hidden items-center gap-8 text-lg font-bold text-ink md:flex">
            <a className="rounded-full px-3 py-1 transition duration-300 hover:bg-teal/10 hover:text-teal" href="#about">About</a>
            <a className="rounded-full px-3 py-1 transition duration-300 hover:bg-teal/10 hover:text-teal" href="#projects">Projects</a>
            <a className="rounded-full px-3 py-1 transition duration-300 hover:bg-teal/10 hover:text-teal" href="#research">Research</a>
            <a className="rounded-full px-3 py-1 transition duration-300 hover:bg-teal/10 hover:text-teal" href="#contact">Contact</a>
          </nav>
          <button
            className="rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-sm font-semibold text-ink transition duration-300 hover:border-teal hover:text-teal md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-fog/80 bg-cloud px-6 py-4 text-sm font-semibold text-slate md:hidden animate-fade-in">
            <div className="flex flex-col gap-3">
              <a onClick={() => setMenuOpen(false)} href="#about">About</a>
              <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
              <a onClick={() => setMenuOpen(false)} href="#research">Research</a>
              <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-16 pt-4 md:pb-20 md:pt-8">
        <section className="space-y-10">
          <div className="overflow-hidden bg-transparent">
            <img
              src={heroPhoto}
              alt="Cover"
              className="h-56 w-full object-cover opacity-95 md:h-72 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent),linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)] [mask-composite:intersect]"
            />
          </div>

          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 reveal">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-fog/80 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] text-ink shadow-soft">
              <span className="rounded-full bg-fog px-3 py-1.5 text-ink">M.S. Computer Science</span>
              <span className="rounded-full bg-white px-3 py-1.5 text-ink">Texas Tech University</span>
            </div>
            <h1 className="font-display text-4xl font-semibold text-ink md:text-6xl">
              <span className="typing">Data‑first software engineer</span>
              <span className="block">blending engineering, analytics, and product thinking.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate">
              M.S. Computer Science student at Texas Tech University with 2+ years of professional experience in Japan. I build scalable data and
              software systems across ERP, analytics, and backend integration, with foundations in AI/ML and a focus on modern data engineering.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
              </a>
              <a
                href="mailto:adhikariganesh9813@gmail.com"
                className="btn-secondary"
              >
                adhikariganesh9813@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate">
              <div className="glass rounded-2xl px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate/70">Interest</p>
                <p className="mt-1 font-semibold text-ink">Data Eng · Data Science · Software</p>
              </div>
              <div className="glass rounded-2xl px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate/70">Based In</p>
                <p className="mt-1 font-semibold text-ink">Lubbock, TX & Rancho Cordova, CA</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate/60">
              <span className="rounded-full border border-fog/80 bg-white/80 px-3 py-1">Data Engineering</span>
              <span className="rounded-full border border-fog/80 bg-white/80 px-3 py-1">Data Science</span>
              <span className="rounded-full border border-fog/80 bg-white/80 px-3 py-1">Software Engineer</span>
              <span className="rounded-full border border-fog/80 bg-white/80 px-3 py-1">Data/Business Analysis</span>
              <span className="rounded-full border border-fog/80 bg-white/80 px-3 py-1">Product Management</span>
            </div>
          </div>
          <div className="relative mr-auto reveal reveal-delay-2 h-[360px] w-[260px] overflow-hidden rounded-[32px] border border-fog/80 bg-white/80 md:h-[440px] md:w-[320px] md:-ml-28">
            <img
              src={profilePhoto}
              alt="Ganesh Adhikari profile"
              className="absolute inset-0 h-full w-full rounded-[32px] object-cover object-[50%_10%] shadow-glow transition duration-500 hover:-translate-y-2 hover:shadow-lift"
            />
          </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div key={item.title} className="card glass">
              <div className="flex items-center justify-between">
                <div className="text-teal">{icons[item.icon]}</div>
                <span className="rounded-full bg-fog px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                  Highlight
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.detail}</p>
            </div>
          ))}
        </section>

        <section id="about" className="grid gap-12 rounded-[40px] border border-fog/80 bg-white/80 p-10 shadow-soft md:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <h2 className="section-title">About Me</h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                I’m a software engineer with hands‑on experience building data and ERP systems in the semiconductor manufacturing industry at TECDIA
                Co. Ltd. I’ve automated ETL workflows, optimized MS SQL Server performance, integrated REST APIs, and designed analytics‑ready
                reporting layers that deliver actionable KPI insights.
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate">
              I’m pursuing my M.S. in Computer Science at Texas Tech University (expected Dec 2026). I’m seeking a Summer 2026 internship where I can
              contribute to data/software engineering and analytics while collaborating across software, data science, and product teams.
            </p>
            <div>
              <h3 className="font-display text-xl text-ink">Core Skills</h3>
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

        <section id="projects" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="section-title mt-3">Projects & Products</h2>
              <p className="mt-3 max-w-2xl text-base text-slate">
                A curated selection of projects across software engineering, data analysis, and web products.
              </p>
            </div>
            <div className="rounded-full border border-ink/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Updated for 2026
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {["All", "Data", "App", "Web", "Others"].map((filter) => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  projectFilter === filter
                    ? "bg-teal text-white shadow-soft"
                    : "border border-ink/15 bg-white/70 text-slate hover:border-teal hover:text-teal"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => projectFilter === "All" || project.category === projectFilter)
              .map((project, index) => (
              <article key={project.title} className="card glass flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-ink/10 bg-fog px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                    {project.tags[0]}
                  </span>
                  <span className="text-teal transition group-hover:text-coral">{icons[project.icon]}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{project.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate/70">{project.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-cloud px-3 py-1 text-xs font-semibold text-slate">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 flex flex-wrap gap-3 text-sm font-semibold">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary px-5 py-2"
                  >
                    View
                  </a>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary px-5 py-2"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="grid gap-10 rounded-[36px] border border-fog/80 bg-cloud/90 p-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-label">Research</p>
            <h2 className="section-title mt-3">Digital Marketing & Consumer Psychology</h2>
            <p className="text-base text-slate">
              This research examines the effects of digital marketing on consumer psychological buying behavior, focusing on learning, motivational,
              and perceptual aspects. It highlights how firms can better understand customer behavior and apply these insights to grow their business.
            </p>
            <a
              href="https://github.com/adhikariganesh9813/Research-Paper-Digital-Marketing-and-Psychological-Aspects-of-Consumer-Buying-Behavior.git"
              className="btn-secondary inline-flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              View PDF
              <span aria-hidden="true">→</span>
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

        <section id="contact" className="rounded-[32px] border border-fog/80 bg-white/80 p-10 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="section-title mt-3">Let&apos;s Connect</h2>
              <p className="mt-3 text-base text-slate">
                Open to Summer 2026 internships (Data Engineering priority) with flexibility across data science, software engineering, analytics,
                and product roles.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:adhikariganesh9813@gmail.com"
                className="btn-primary"
              >
                adhikariganesh9813@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ganesh-adhikari-148918101"
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-fog/80 bg-cloud/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate md:flex-row">
          <p>© 2026 Ganesh Adhikari. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="transition hover:text-teal" href="https://www.linkedin.com/in/ganesh-adhikari-148918101" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="transition hover:text-teal" href="https://github.com/adhikariganesh9813" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
