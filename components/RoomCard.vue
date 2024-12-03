<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden">
    <img :src="room.image" :alt="room.name" class="w-full h-64 object-cover">
    <div class="p-6">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-semibold">{{ room.name }}</h3>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span class="ml-1 font-semibold">{{ room.rating }}</span>
          <span class="text-gray-500 ml-1">({{ room.reviews }})</span>
        </div>
      </div>
      <p class="text-gray-600 mb-4">{{ room.location }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="amenity in room.amenities" :key="amenity" class="px-3 py-1 bg-gray-100 rounded-full text-sm">
          {{ amenity }}
        </span>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <span class="text-xl font-bold">${{ room.price }}</span>
          <span class="text-gray-500">/night</span>
        </div>
        <button class="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition">
          Book now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Room } from '~/types/room'

defineProps<{
  room: Room
}>()
</script>