/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: [
          'Montserrat',
          'Arial',
          'sans-serif',
        ],

        cantata: [
          '"Cantata One"',
          'Georgia',
          'serif',
        ],
      },
    },
  },

  plugins: [],
}