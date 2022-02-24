module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'short': { 'raw': '(max-height: 800px)' },
        'tall': { 'raw': '(min-height: 800px)' }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
