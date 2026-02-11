import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0b0b0e",
        ink: "#11111a",
        glow: "#7c3aed",
        cyan: "#22d3ee",
        magenta: "#fb7185",
        lime: "#a3e635",
        orange: "#f97316"
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        body: ["Space Grotesk", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(60% 60% at 50% 20%, rgba(124,58,237,0.35) 0%, rgba(34,211,238,0.25) 35%, rgba(0,0,0,0) 70%)",
        "mesh": "radial-gradient(55% 55% at 10% 10%, rgba(251,113,133,0.15) 0%, rgba(0,0,0,0) 60%), radial-gradient(50% 50% at 90% 0%, rgba(34,211,238,0.18) 0%, rgba(0,0,0,0) 55%), radial-gradient(45% 45% at 70% 90%, rgba(163,230,53,0.16) 0%, rgba(0,0,0,0) 60%)"
      },
      boxShadow: {
        glow: "0 0 30px rgba(124,58,237,0.35)",
        "glow-cyan": "0 0 30px rgba(34,211,238,0.35)",
        "glow-magenta": "0 0 30px rgba(251,113,133,0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
