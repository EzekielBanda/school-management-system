/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'red': '0 4px 14px 0 rgba(255, 0, 0, 0.39)',
        'orange': '0 4px 14px 0 rgba(255, 165, 0, 0.39)',
        'yellow': '0 4px 14px 0 rgba(255, 255, 0, 0.39)',
        'green': '0 4px 14px 0 rgba(0, 128, 0, 0.39)',
        'blue': '0 4px 14px 0 rgba(0, 0, 255, 0.39)',
        'indigo': '0 4px 14px 0 rgba(75, 0, 130, 0.39)',
        'purple': '0 4px 14px 0 rgba(128, 0, 128, 0.39)',
        'pink': '0 4px 14px 0 rgba(255, 105, 180, 0.39)',
      },
      scrollbar: ['dark']
    },
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar')
  ],
});