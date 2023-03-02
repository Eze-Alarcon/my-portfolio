/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#151515',
        darkGray: '#242424',
        green: '#4EE1A0',
        gray: '#D9D9D9',
        white: '#FFFFFF'
      },
      fontFamily: {
        space: 'Space Grotesk, sans-serif'
      }
    }
  },
  plugins: []
}
