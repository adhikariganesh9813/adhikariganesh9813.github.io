/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./myapps.html", "./blogs.html", "./certifications.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"Inter\"", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink:   "#172033",
        slate: "#3f4f63",
        dim:   "#65748a",
        cloud: "#f6f8fc",
        fog:   "#ffffff",
        mist:  "#eef4fb",
        line:  "#d9e2ee",
        teal:  "#0891b2",
        coral: "#7c3aed",
        mint:  "#059669",
        gold:  "#b7791f",
        moss:  "#2563eb",
      },
      boxShadow: {
        soft: "0 10px 32px rgba(31,41,55,0.08), 0 0 0 1px rgba(148,163,184,0.16)",
        lift: "0 18px 48px rgba(31,41,55,0.12), 0 0 0 1px rgba(8,145,178,0.14)",
        glow: "0 0 0 1px rgba(8,145,178,0.16), 0 20px 60px rgba(31,41,55,0.12)",
        cyan: "0 0 20px rgba(8,145,178,0.22)",
        violet: "0 0 20px rgba(124,58,237,0.18)",
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
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(8,145,178,0.18), 0 0 24px rgba(8,145,178,0.1), 0 20px 60px rgba(31,41,55,0.16)" },
          "50%": { boxShadow: "0 0 0 1px rgba(8,145,178,0.32), 0 0 48px rgba(8,145,178,0.16), 0 20px 60px rgba(31,41,55,0.2)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "status-pulse": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(5,150,105,0.34)" },
          "50%": { opacity: "0.85", boxShadow: "0 0 0 5px rgba(5,150,105,0)" },
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
        "gradient-shift": "gradient-shift 6s ease infinite",
        "status-pulse": "status-pulse 2.4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
