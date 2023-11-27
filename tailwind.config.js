/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#ffffff'
      },
      backgroundColor: {
        'background': '#212529',
        'primary': '#212529',
        'border': '#454955'
      },
      borderColor: {
        'default': '#454955'
      }
    },
  },
  plugins: [],
}