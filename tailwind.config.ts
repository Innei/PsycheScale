import { addDynamicIconSelectors } from '@iconify/tailwind'
export default {
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    addDynamicIconSelectors(),
  ],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/shiro-rc/dist/**/*.{js,ts,jsx,tsx,mdx}', // add this
  ],

  daisyui: {
    darkTheme: 'dark',
    themes: [
      {
        light: {
          'color-scheme': 'light',
          primary: '#33A6B8',
          secondary: '#A8D8B9',
          accent: '#33A6B8',
          'accent-content': '#fafafa',
          neutral: '#C7C7CC',
          'base-100': '#fff',
          'base-content': '#000',
          info: '#007AFF',
          success: '#34C759',
          warning: '#FF9500',
          error: '#FF3B30',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem',
        },
      },
      {
        dark: {
          'color-scheme': 'dark',
          primary: '#F596AA',
          secondary: '#FB966E',
          accent: '#F596AA',
          neutral: '#48484A',
          'base-100': '#1C1C1E',
          'base-content': '#FFF',
          info: '#0A84FF',
          success: '#30D158',
          warning: '#FF9F0A',
          error: '#FF453A',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem',
        },
      },
    ],
  },
}
