module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  //purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],  // this is the old script, commented out on 4/23/24
  mode: "jit",
  //darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

