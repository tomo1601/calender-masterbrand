/** @type {import('tailwindcss').Config} */

const usedColors = ["indigo", "gray", "green", "blue", "red", "purple"];
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Open Sans"],
      },
      colors: {
        customBlue: { light: "#5684AE", dark: "#0F4C81",},
        customOrange: { light: "#FFE4C8", dark: "#F9BE81",},
        customCalendarTile: "#E4F6ED",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  plugins: [require('@tailwindcss/forms'),],
  safelist: usedColors.map((c) => `bg-${c}-500`),
};
