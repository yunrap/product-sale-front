/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral Colors
        neutral: {
          0: '#FFFFFF',
          50: '#F4F4F6',
          200: '#D1D4DB',
          300: '#9096A2',
          500: '#202C46', // Base
          600: '#1B253C',
        },
        
        // Primary Blue Colors
        blue: {
          100: '#F5F7FE',
          200: '#EAEFFD',
          300: '#ADBEF7',
          400: '#5A7DEE',
          500: '#315CEA', // Base
          600: '#2A4EC7',
          700: '#2240A4',
        },
        
        // Red Colors (for buttons)
        red: {
          100: '#FCE9EC',
          200: '#F9D2D9',
          300: '#F2A6B4',
          400: '#E9677F',
          500: '#DF2648', // Base
          600: '#B71F3B',
        },
        
        // Basic Colors
        white: '#FFFFFF',
        black: '#000000',
      },
      
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

