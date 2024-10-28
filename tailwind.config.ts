import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        normal:
          "0 0 10px 0px rgba(0, 0, 0, 0.07), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        primary: "#581C87",
        secondary: "#F59E0B",
        tertiary: "#FCD34D",
        "light-purple": "#7E22CE",
        "light-blue": "#0369A1",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        paragraph: "1.125rem",
        heading: "3.5rem",
      },
      lineHeight: {
        large: "1.8",
        medium: "1.6",
        normal: "1.4",
        small: "1.1",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
    stroke: ["hover", "focus"],
  },
  plugins: [],
};
export default config;
