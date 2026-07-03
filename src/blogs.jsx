import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StandalonePage } from "./StandalonePage.jsx";
import "./index.css";

export function Blogs() {
  return (
    <StandalonePage
      activeLabel="Blogs"
      eyebrow="Writing"
      title="Blogs"
      description="A separate space for technical notes, project writeups, learning logs, and longer reflections. Blog posts will be added here as they are published."
      emptyLabel="No blog posts yet"
      emptyDescription="Future blog cards will appear here with article titles, summaries, topics, and reading links."
    />
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Blogs />
  </StrictMode>,
);
