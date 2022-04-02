module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        black:'#27272a'
      },
      keyframes: {
        blob_anim: {
          '0%': {
            transform: 'translate(-15vw, -10vw)',
            opacity: 0.5
          },
          '50%': {
            transform: 'translate(5vw, -3vw)',
            opacity: 1
          },
          '100%': {
            transform: 'translate(-7vw, 6vw)',
            opacity: 0.8
          }
        }
      },
      animation: {
        blob_anim: 'blob_anim ease-in-out 20s infinite alternate'
      }
    },
  },
  plugins: [],
};