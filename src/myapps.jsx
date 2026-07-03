import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StandalonePage } from "./StandalonePage.jsx";
import "./index.css";

export function MyApps() {
  return (
    <StandalonePage
      activeLabel="MyApps"
      eyebrow="Dashboard"
      title="MyApps"
      description="A simple home for apps I build and publish. This dashboard will grow into a curated list of tools, experiments, and products with quick links, status notes, and launch details."
      emptyLabel="No apps listed yet"
      emptyDescription="Future app cards will appear here as new projects are ready to showcase."
    />
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApps />
  </StrictMode>,
);
