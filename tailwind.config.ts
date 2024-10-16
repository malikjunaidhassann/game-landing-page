import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueMain: "#6C5CE7", 
        dimWhite:"#ebf2ffd9"
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        syne: ['var(--font-Syne-Regular)'],
        syneBold: ['var(--font-Syne-Bold)'],
      },
    },
  },
  plugins: [],
};

export default config;
