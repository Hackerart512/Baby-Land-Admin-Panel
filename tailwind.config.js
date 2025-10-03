/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',       // Extra small devices (phones, 320px and up)
        'sm': '640px',       // Small devices (portrait tablets and large phones, 640px and up)
        'md': '768px',       // Medium devices (landscape tablets, 768px and up)
        'lg': '1024px',      // Large devices (laptops/desktops, 1024px and up)
        'xl': '1280px',      // Extra large devices (large laptops and desktops, 1280px and up)
        '2xl': '1536px',     // 2x large devices (larger laptops and desktops, 1536px and up)
        // 'custom': {'min': '320px', 'max': '345px'}, // Custom breakpoint range
      },
    },
  },
  variants: {},
  plugins: [],
}

