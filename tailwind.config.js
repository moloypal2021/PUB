module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "84px": "84px",
        "132px": "132px",
      },
      height: {
        "84px": "84px",
        "144px": "144px",
        "225px": "225px",
        "320px": "320px",
        "400px": "400px",
        "440px": "440px",
        "520px": "520px",
        "600px": "600px",
        "690px": "690px",
      },
      colors: {
        purple: {
          10: "#8027D8",
        },
        brown: {
          10: "#311F33",
          20: "#2C1030",
          30: "#311F33",
          40: "#040004",
        },
      },
      fontSize: {
        "28px": "28px",
        "40px": "40px",
        "64px": "64px",
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
