module.exports = {
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
    enabled: process.env.NODE_ENV === "production",
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        }
      },
      fontFamily: {
        headline: 'Poppins, sans-serif',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
