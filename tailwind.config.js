/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2e9cca',     // Custom primary color
        secondary: '#ff6347',   // Custom secondary color
        accent: '#4CAF50',      // Custom accent color
        dark: {
          100: '#1a1a1a',       // Shades of custom dark color
          200: '#121212',
        },
        customPurple: '#6b46c1', // Another custom color
      },
    },
  },
  plugins: [],
};
