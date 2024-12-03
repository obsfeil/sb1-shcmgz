<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-rose-500 text-xl font-bold">LuxStay</span>
          </NuxtLink>
        </div>
        <div class="flex space-x-8">
          <NuxtLink to="/" class="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
            Home
          </NuxtLink>
          <NuxtLink to="/rooms" class="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
            Rooms
          </NuxtLink>
          <NuxtLink to="/about" class="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>