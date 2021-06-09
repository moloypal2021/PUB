module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "84px": "84px",
      },
      height: {
        "84px": "84px",
      },
      colors: {
        purple: {
          10: "#8027D8",
        },
      },
      fontSize: {
        "28px": "28px",
        "40px": "40px",
        "115px": "115px",
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
  plugins: [require("@tailwindcss/forms")],
};
