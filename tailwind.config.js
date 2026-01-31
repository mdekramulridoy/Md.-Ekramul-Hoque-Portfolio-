module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#15A6FF", // আপনার main blue
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#15A6FF",
          "base-100": "#ffffff",
          "base-content": "#000000",
        },
      },
      {
        dark: {
          primary: "#15A6FF",
          "base-100": "#0f172a",
          "base-content": "#ffffff",
        },
      },
    ],
  },
};
