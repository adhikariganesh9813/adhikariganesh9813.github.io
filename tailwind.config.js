/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"Inter\"", "\"Source Serif 4\"", "sans-serif"],
      },
      colors: {
        ink:   "#e2e8f4",   // primary text — cool near-white
        slate: "#7d8fa8",   // secondary text — blue-gray
        dim:   "#4a5568",   // muted text
        cloud: "#050c18",   // main background — deep space navy
        fog:   "#0b1524",   // card surface — dark navy
        mist:  "#122033",   // elevated surface
        teal:  "#22d3ee",   // primary accent — electric cyan
        coral: "#a78bfa",   // secondary accent — soft violet
        gold:  "#f0b94d",   // amber gold
        moss:  "#1a3a5c",   // deep blue
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
        lift: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,211,238,0.12)",
        glow: "0 0 0 1px rgba(34,211,238,0.15), 0 0 32px rgba(34,211,238,0.12), 0 20px 60px rgba(0,0,0,0.7)",
        cyan: "0 0 20px rgba(34,211,238,0.35)",
        violet: "0 0 20px rgba(167,139,250,0.3)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "profile-breathe": {
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(34,211,238,0.12), 0 0 24px rgba(34,211,238,0.08), 0 20px 60px rgba(0,0,0,0.7)" },
          "50%": { boxShadow: "0 0 0 1px rgba(34,211,238,0.25), 0 0 48px rgba(34,211,238,0.15), 0 20px 60px rgba(0,0,0,0.7)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        float: "float 6s ease-in-out infinite",
        "profile-breathe": "profile-breathe 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
