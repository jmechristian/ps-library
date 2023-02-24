/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-brand': '#1f97bf',
        'base-dark': '#04607e',
        'base-dark-highlight': '#0a2b35',
        'base-light': '#bee1ec',
        'base-mid': '#0585b0',
        clemson: '#ff9321',
        'clemson-dark': '#ca6800',
        dark: '#1a1a1a',
        'real-dark': '#0E0E0E',
      },
      fontFamily: {
        roboto: 'roboto, sans-serif',
        greycliff: 'greycliff-cf, sans-serif',
      },
      typography: {
        orange: {
          css: {
            '--tw-prose-bold': 'text-slate-800 dark:text-white',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
