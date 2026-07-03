import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { StandalonePage } from "./StandalonePage.jsx";
import "./index.css";

const certificateFiles = import.meta.glob("./assets/certificates_img/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

const certificatePreviewFiles = import.meta.glob("./assets/certificates_img/previews/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const certificateTitles = {
  "AI Awareness Training.pdf": "AI Awareness Training",
  "Business Intelligence(BI) Dashboard.pdf": "Business Intelligence (BI) Dashboard",
  "Coursera_IntroToDataEr.pdf": "Introduction to Data Engineering",
  "Coursera_PythonPJ_DataEr.pdf": "Python Project for Data Engineering",
  "Cybersecurity training certificate ttu.pdf": "Cybersecurity Training",
  "Data Engineering Capstone.pdf": "Data Engineering Capstone",
  "Data Warehouse Fundamentals.pdf": "Data Warehouse Fundamentals",
  "Database and SQL for DataScience with Python_Certificate.pdf": "Databases and SQL for Data Science with Python",
  "DatabaseAdminCertificate.pdf": "Database Administration",
  "Generative AI- Elevate your Data Engineering Career .pdf": "Generative AI for Data Engineering Careers",
  "IBM Data Engineering Professional Certificate.pdf": "IBM Data Engineering Professional Certificate",
  "Intro to NoSQL-Database.pdf": "Introduction to NoSQL Databases",
  "Intro to big data with spark and hadoop.pdf": "Introduction to Big Data with Spark and Hadoop",
  "Intro to relational database_certificate.pdf": "Introduction to Relational Databases",
  "Linux-Shell-Certificate.pdf": "Linux Commands and Shell Scripting",
  "Machine Learning with Apache Spark.pdf": "Machine Learning with Apache Spark",
  "Python for DataScienceAI&Dev.pdf": "Python for Data Science, AI and Development",
};

const certificates = Object.entries(certificateFiles)
  .map(([path, url]) => {
    const fileName = path.split("/").pop() ?? "";
    const title =
      certificateTitles[fileName] ??
      fileName
        .replace(/\.pdf$/i, "")
        .replace(/_/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    return {
      title,
      url,
      previewUrl: certificatePreviewFiles[`./assets/certificates_img/previews/${fileName}.png`],
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

const featuredCertificate =
  certificates.find((certificate) => certificate.title === "IBM Data Engineering Professional Certificate") ??
  certificates[0];

const galleryCertificates = certificates.filter((certificate) => certificate.title !== featuredCertificate?.title);

export function Certifications() {
  const [startCertificateIndex, setStartCertificateIndex] = useState(0);
  const [displayCertificateIndex, setDisplayCertificateIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [isResettingTrack, setIsResettingTrack] = useState(false);
  const pauseTimerRef = useRef(null);
  const slideTimerRef = useRef(null);
  const orderedGalleryCertificates = [
    ...galleryCertificates.slice(startCertificateIndex),
    ...galleryCertificates.slice(0, startCertificateIndex),
  ];
  const previousGalleryCertificate =
    galleryCertificates[
      startCertificateIndex === 0 ? galleryCertificates.length - 1 : startCertificateIndex - 1
    ];
  const carouselSequence =
    orderedGalleryCertificates.length > 0
      ? [
          previousGalleryCertificate,
          ...orderedGalleryCertificates,
        ]
      : [];
  const marqueeCertificates = [...carouselSequence, ...carouselSequence];

  useEffect(() => {
    const countTimer = window.setInterval(() => {
      if (!isMarqueePaused && !slideDirection && galleryCertificates.length > 1) {
        setDisplayCertificateIndex((currentIndex) => (currentIndex + 1) % galleryCertificates.length);
      }
    }, 15000);

    return () => window.clearInterval(countTimer);
  }, [isMarqueePaused, slideDirection]);

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) {
        window.clearTimeout(pauseTimerRef.current);
      }
      if (slideTimerRef.current) {
        window.clearTimeout(slideTimerRef.current);
      }
    };
  }, []);

  const pauseMarqueeAtCenter = () => {
    setIsMarqueePaused(true);

    if (pauseTimerRef.current) {
      window.clearTimeout(pauseTimerRef.current);
    }

    pauseTimerRef.current = window.setTimeout(() => {
      setIsMarqueePaused(false);
      pauseTimerRef.current = null;
    }, 2000);
  };

  const shiftCertificates = (direction) => {
    if (slideDirection || galleryCertificates.length < 2) return;

    if (pauseTimerRef.current) {
      window.clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    if (slideTimerRef.current) {
      window.clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }

    setIsMarqueePaused(true);
    setDisplayCertificateIndex((currentIndex) => {
      if (direction === "previous") {
        return currentIndex === 0 ? galleryCertificates.length - 1 : currentIndex - 1;
      }

      return (currentIndex + 1) % galleryCertificates.length;
    });

    window.requestAnimationFrame(() => {
      setSlideDirection(direction);
    });

    slideTimerRef.current = window.setTimeout(() => {
      setIsResettingTrack(true);
      setStartCertificateIndex((currentIndex) => {
        if (direction === "previous") {
          return currentIndex === 0 ? galleryCertificates.length - 1 : currentIndex - 1;
        }

        return (currentIndex + 1) % galleryCertificates.length;
      });
      setSlideDirection(null);
      pauseMarqueeAtCenter();
      slideTimerRef.current = null;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsResettingTrack(false);
        });
      });
    }, 420);
  };

  const showPreviousCertificate = () => {
    shiftCertificates("previous");
  };

  const showNextCertificate = () => {
    shiftCertificates("next");
  };

  const selectCertificate = (index) => {
    setDisplayCertificateIndex(index);
    setStartCertificateIndex(index);
    pauseMarqueeAtCenter();
  };

  return (
    <StandalonePage
      activeLabel="Certifications"
      eyebrow="Credentials"
      title="Certifications"
      description="Gallery of professional certifications, badges, and learning credentials across data engineering, databases, AI, analytics, software development and engineering."
      heroContent={
        featuredCertificate && (
          <div className="mt-8 space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="meta-label lowercase text-teal/80">// featured certificate</p>
              <span
                className="meta-pill self-start lowercase"
                style={{ background: "rgba(8,145,178,0.08)", color: "#0891b2", border: "1px solid rgba(8,145,178,0.25)" }}
              >
                IBM professional certificate
              </span>
            </div>

            <a
              href={featuredCertificate.url}
              target="_blank"
              rel="noreferrer"
              className="mx-auto block max-w-[780px] overflow-hidden rounded-xl transition duration-200 hover:opacity-90"
              style={{ border: "1px solid rgba(148,163,184,0.24)", background: "rgba(255,255,255,0.86)" }}
              aria-label={`Open ${featuredCertificate.title}`}
            >
              <img
                src={featuredCertificate.previewUrl}
                alt={`${featuredCertificate.title} preview`}
                loading="eager"
                decoding="async"
                className="aspect-[1400/1081] w-full bg-white object-contain"
              />
            </a>

            <div className="mx-auto flex max-w-[780px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h2 className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                {featuredCertificate.title}
              </h2>
              <a
                href={featuredCertificate.url}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                View Certificate
              </a>
            </div>
          </div>
        )
      }
    >
      <section className="space-y-6" aria-label="Certificate gallery">
        <div className="flex flex-col gap-3">
          <div>
            <p className="section-label">Verified Learning</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <h2 className="section-title">Certificate Gallery</h2>
              <p className="mono rounded-xl px-4 py-2 text-base font-semibold lowercase text-ink shadow-soft sm:text-lg"
                style={{ border: "1px solid rgba(8,145,178,0.22)", background: "rgba(255,255,255,0.82)" }}
              >
                {displayCertificateIndex + 1}/{galleryCertificates.length} Certificates
              </p>
            </div>
          </div>
        </div>

        {galleryCertificates.length > 0 && (
          <div className="space-y-5">
            <div className="certificate-carousel">
              <button
                type="button"
                onClick={showPreviousCertificate}
                className="certificate-arrow"
                aria-label="Show previous certificate"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                className={`certificate-marquee ${isMarqueePaused ? "is-paused-centered" : ""} ${isResettingTrack ? "is-resetting-track" : ""}`}
                aria-label="Moving certificate carousel"
              >
                <div className="certificate-marquee-track">
                  <div className={`certificate-marquee-manual ${slideDirection === "next" ? "shift-next" : ""} ${slideDirection === "previous" ? "shift-previous" : ""}`}>
                    {marqueeCertificates.map((certificate, index) => (
                      <article key={`${certificate.title}-${index}`} className="project-card certificate-marquee-card">
                        <div className="flex items-start justify-between gap-3">
                          <span
                            className="meta-pill lowercase"
                            style={{ background: "rgba(8,145,178,0.08)", color: "#0891b2", border: "1px solid rgba(8,145,178,0.25)" }}
                          >
                            certificate
                          </span>
                          <span
                            className="meta-pill shrink-0 lowercase"
                            style={{ background: "rgba(148,163,184,0.1)", color: "#66758a", border: "1px solid rgba(148,163,184,0.22)" }}
                          >
                            pdf
                          </span>
                        </div>

                        <div
                          className="overflow-hidden rounded-xl"
                          style={{ border: "1px solid rgba(148,163,184,0.24)", background: "rgba(255,255,255,0.86)" }}
                        >
                          <img
                            src={certificate.previewUrl}
                            alt={`${certificate.title} certificate preview`}
                            loading={index < 4 ? "eager" : "lazy"}
                            decoding="async"
                            className="aspect-[1400/1081] w-full bg-white object-contain"
                          />
                        </div>

                        <div className="flex flex-1 flex-col gap-4">
                          <h3 className="font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                            {certificate.title}
                          </h3>
                          <a
                            href={certificate.url}
                            target="_blank"
                            rel="noreferrer"
                            className="github-btn self-start"
                            aria-label={`View ${certificate.title} certificate`}
                          >
                            View Certificate
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={showNextCertificate}
                className="certificate-arrow"
                aria-label="Show next certificate"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {galleryCertificates.map((certificate, index) => (
                <button
                  key={certificate.title}
                  type="button"
                  onClick={() => selectCertificate(index)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    index === startCertificateIndex ? "w-8 bg-teal" : "w-2.5 bg-slate/30"
                  }`}
                  aria-label={`Show ${certificate.title}`}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </StandalonePage>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Certifications />
  </StrictMode>,
);
