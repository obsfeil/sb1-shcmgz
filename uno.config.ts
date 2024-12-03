import { defineConfig, presetUno, presetAttributify, presetTypography, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,500,600,700',
        mono: 'Fira Code'
      }
    })
  ],
  theme: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e'
      }
    }
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg transition-colors duration-200 font-medium',
    'btn-primary': 'btn bg-primary-500 text-white hover:bg-primary-600',
    'btn-danger': 'btn bg-red-500 text-white hover:bg-red-600',
    'card': 'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6',
    'input': 'w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200'
  }
})