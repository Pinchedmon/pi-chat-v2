import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'dark-bg':'#1F1E1F',
        'light-bg':'#f0f0f0',
        'dark-bg-content':'#2C2C2C',
        'bg-content':'#FFFFFF',
        'gray-text':'#B5B5B5',
        'green':'#37B34A',
        
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
