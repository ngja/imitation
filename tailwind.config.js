/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.teal, DEFAULT: colors.teal[600] },
        'github': {
          'light-default': {
            header: '#f6f8fa',
            background: '#ffffff',
            button: '#f3f4f6',
            border: '#d0d7de',
            icon: '#656d76',
          },
        },
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')"
      }
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities)
    })
  ],
}