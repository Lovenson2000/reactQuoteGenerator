module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm1': '300px',   // Custom breakpoint for screens smaller than 480px
        'sm2': '340px',
        'sm3': '400px',
        'md': '520px',
        'lg': '1024px',       
      },
    },
  },
  plugins: [],
};