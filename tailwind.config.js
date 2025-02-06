/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ribes: ['Ribes', 'sans-serif'],
        stretchpro: ['StretchPro', 'sans-serif'],
      },
      boxShadow: {
        'bottom-right': '10px 10px #2D2D2D',
      },
    },
  },
  plugins: [],
};
