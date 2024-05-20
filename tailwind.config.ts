import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hpDarkBlue: "rgba(2, 40, 64, 1)",
        hpDarkGreen: "rgba(38, 59, 11, 1)",
        textWhite: "#ffffff",
        offWhite: "#F4F4F4",
        lightPurple: "#9980DA",
        pieChartColor1: "#9980DA",
        pieChartColor2: "#00C25E",
        pieChartColor3: "#005874",
        pieChartColor4: "#FF4440",
        pieChartColor5: "#007438",
      },
    },
  },
  plugins: [],
};

export default config;
