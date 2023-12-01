/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-1": "#1A232E",
        "black-2": "rgba(33, 41, 50, 0.54)",
        "black-3": "#14202e8a",
        "gray-1": "#ecf0f6ff",
        "gray-2": "#4E5460",
      },
    },
  },
  plugins: [],
};
