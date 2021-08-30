module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#111453",
      },
      backgroundImage: (theme) => ({
        hero: "url('https://res.cloudinary.com/zentai-consulting/image/upload/v1630323137/game-landing-page/hero-bg_izldt4.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
