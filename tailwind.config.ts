import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1e3a5f',    // Navy blue — trust, professionalism
          secondary: '#e87722',  // Orange — urgency, CTAs
          accent: '#4a90d9',     // Light blue — HVAC/cooling
          dark: '#0f1f33',
          light: '#f5f7fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
