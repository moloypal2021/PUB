module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          10: "#8027D8",
        },
      },
      fontSize: {
        "28px": "28px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        discodiva: ["Disco Diva", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
