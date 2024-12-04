/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS and JSX/TSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'cream1':'#e7e5dd',
        'blue-primary': '#263aff',
        'gray-secondary': '#609966',
        'pink-normaly': '#344D67',
        'rainbow': 'linear-gradient(to right, #ff9865, #ff691e)',
      },
      
    },
  },
  plugins: [],
};
