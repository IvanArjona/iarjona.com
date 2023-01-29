/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 800px)' },
        tall: { raw: '(min-height: 800px)' },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
