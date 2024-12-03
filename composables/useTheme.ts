import { useColorMode } from '@vueuse/core'

export const useTheme = () => {
  const colorMode = useColorMode()

  const toggleTheme = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  return {
    colorMode,
    toggleTheme
  }
}