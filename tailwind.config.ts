/**@type {import('tailwindcss').Config} */
export default {
darkMode: 'class',
content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
theme: {
  extend: {
    colors: { primary: '#7C3AED', glass: 'rgba(255,255,255,0.1)' },
    fontFamily: { display: ['"Plus Jakarta Sans"', 'sans-serif'], body: ['Inter', 'sans-serif'] },
  }
},
plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}