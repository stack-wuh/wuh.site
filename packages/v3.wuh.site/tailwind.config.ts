import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        100: '100'
      },
      backgroundImage: {
        'section1': 'url(/assets/bg/section12.png)',
        'section2': 'url(/assets/bg/section11.png)',
        'section3': 'url(/assets/bg/section13.png)',
        'bg-fixed': 'background-position: center;background-attachment: fixed;background-size: cover;',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
