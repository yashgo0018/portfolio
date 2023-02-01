/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
    extend: {
      backgroundColor: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
      },
      textColor: {
        primary: "rgb(var(--text-primary))",
      },
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
    },
  },
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: "media", // or 'media' or 'class'
};
