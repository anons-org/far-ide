const sizeObj = {};

for (let i = 1; i <= 1000; i++) {
  sizeObj[`${i}px`] = `${i}px`;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/renderer/index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: sizeObj,
      fontSize: sizeObj,
      lineHeight: sizeObj,
      backgroundColor: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
}