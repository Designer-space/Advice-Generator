/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "15%": { borderBottomRightRadius: "3px"},
        
          "25%": { transform: "translateY(9px) rotate(22.5deg)" },
        
          "50%": { transform: "translateY(18px) scale(1, .9) rotate(45deg)", borderBottomRightRadius: "40px" },
        
          "75%": { transform: "translateY(9px) rotate(67.5deg)" },
        
          "100%": { transform: "translateY(0) rotate(90deg)" }
        },
      
        shadow: {
          "0%, 100%": { transform: "scale(1, 1)"},
        
          "50%": { transform: "scale(1.2, 1)" }
        }
      },
      animation: {
        'jump': 'jump 0.5s linear infinite',
        'shadow': 'shadow 0.5s linear infinite'
      },
      fontFamily: {
        'Manrope': ['var(--ff-primary)']
      }
    },
    colors: {
      'neutral': {
        700: 'hsla(var(--clr-neutral-700), 1)',
        600: 'hsla(var(--clr-neutral-600), 1)',
        500: 'hsla(var(--clr-neutral-500), 1)',
        400: 'hsla(var(--clr-neutral-400), 1)',
      },
      'accent': {
        300: 'hsla(var(--clr-accent-300), 1)',
      }
    }
  },
  plugins: [],
}