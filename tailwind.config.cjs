/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        lora: ["Lora", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
