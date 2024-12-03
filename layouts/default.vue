<template>
  <div class="min-h-screen">
    <header class="border-b dark:border-gray-800">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-primary-500">RoboControl</NuxtLink>
        <ThemeToggle />
      </nav>
    </header>
    
    <main>
      <slot />
    </main>
  </div>
</template>