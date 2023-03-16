/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-light': 'rgb(var(--color-secondary-light) / <alpha-value>)',
        'secondary-dark': 'rgb(var(--color-secondary-dark) / <alpha-value>)',
        'secondary-darker': 'rgb(var(--color-secondary-darker) / <alpha-value>)',
        terciary: 'rgb(var(--color-terciary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
      },
      screens: {
        short: { raw: '(max-height: 800px)' },
        tall: { raw: '(min-height: 800px)' },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
