/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
    },
  },
  plugins: [],
}