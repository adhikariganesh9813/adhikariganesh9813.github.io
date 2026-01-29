/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"Source Serif 4\"", "serif"],
      },
      colors: {
        ink: "#0F172A",
        slate: "#334155",
        cloud: "#F8F4EF",
        fog: "#EFE7DD",
        mist: "#E2E8F0",
        teal: "#1E5D6C",
        coral: "#E06B4F",
        gold: "#D6A146",
        moss: "#3F6E63",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(31, 41, 51, 0.12)",
        lift: "0 12px 28px rgba(31, 41, 51, 0.18)",
        glow: "0 0 0 1px rgba(15, 23, 42, 0.06), 0 14px 36px rgba(15, 23, 42, 0.16)",
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
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
