<template>
  <button
    class="btn-icon"
    @click="toggleTheme"
    :title="colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <div v-if="colorMode === 'dark'" class="i-carbon-moon text-2xl" />
    <div v-else class="i-carbon-sun text-2xl" />
  </button>
</template>

<script setup lang="ts">
const { colorMode, toggleTheme } = useTheme()
</script>

<style>
.btn-icon {
  @apply p-2 rounded-lg transition-colors duration-200;
  @apply hover:bg-gray-100 dark:hover:bg-gray-700;
}
</style>