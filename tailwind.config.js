export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BRIGHT & CLEAN palette
        navy: '#2D3142',           // Dark charcoal for text
        primary: '#5B7B9A',        // Soft steel blue - professional
        accent: '#E8856C',         // Warm coral - bright and memorable
        secondary: '#7A8FA6',      // Lighter steel for subtle text
        
        // Light backgrounds
        cream: '#FDFBF9',          // Very light warm white
        lightgray: '#F5F7F9',      // Cool light gray for alternating sections
        white: '#FFFFFF',
        
        // For highlights
        orange: '#E8856C',         // Matches accent
        highlight: '#FFF4F1',      // Very light coral tint
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
