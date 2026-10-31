import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StandalonePage } from "./StandalonePage.jsx";
import "./index.css";

const apps = [
  {
    name: "Ping Pong Counter",
    href: "/pingpong/",
    status: "Beta",
    description:
      "Point your phone camera at a table tennis table and it keeps score for you. A custom-trained YOLO11n model detects the ball live in the browser, then tracks bounces and returns to call points, serve rotation, and games using official rules.",
    tags: ["YOLO11n", "ONNX Runtime Web", "WebGPU", "Computer Vision"],
  },
];

export function MyApps() {
  return (
    <StandalonePage
      activeLabel="MyApps"
      eyebrow="Dashboard"
      title="MyApps"
      description="A simple home for apps I build and publish. This dashboard will grow into a curated list of tools, experiments, and products with quick links, status notes, and launch details."
    >
      <section className="grid gap-6 md:grid-cols-2" aria-label="Apps">
        {apps.map((app) => (
          <a key={app.name} href={app.href} className="panel group block rounded-[28px] p-7 transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-xl font-bold text-ink group-hover:text-teal">{app.name}</h2>
              <span className="meta-label text-teal/80">{app.status}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate">{app.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span key={tag} className="panel-inset rounded-full px-3 py-1 text-xs font-semibold text-slate">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold text-teal">Open app →</p>
          </a>
        ))}
      </section>
    </StandalonePage>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApps />
  </StrictMode>,
);
