import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1e293b',
          900: '#0F172A',
          950: '#020617', // Latar belakang utama (Charcoal/Deep Navy)
        },
        gold: {
          500: '#C5A880', // Aksen sekunder
          600: '#D4AF37', // Aksen primer (Warm Bronze / Gold)
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;