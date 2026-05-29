import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2b2b2b",
        muted: "#666666",
        border: "#e0e0e0",
      },
      fontFamily: { sans: ["'Open Sans'", "sans-serif"] },
      container: { center: true, padding: { DEFAULT: "1.25rem", lg: "2rem" }, screens: { xl: "1200px" } },
    },
  },
  plugins: [],
};
export default config;
