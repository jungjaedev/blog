/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black20: '#525252',
        black40: '#303030',
        black60: '#1C1C1C',
        gray20: '#EBEBEB',
        gray100: '#8C8C8C',
        darkBg: '#323437',
        darkText: '#F3F4F6',
        darkPText: '#E5E7EB',
        darkTag: '#334155',
        darkInputBg: '#4a5260',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
