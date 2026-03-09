import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Scans your root app folder
    './components/**/*.{js,ts,jsx,tsx,mdx}', // We will create this next
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F172A', // Deep Slate/Navy for trust and stability
          accent: '#F59E0B',  // Industrial Amber/Yellow for calls to action
          light: '#F8FAFC',   // Off-white for section backgrounds
        }
      },
    },
  },
  plugins: [],
}
export default config