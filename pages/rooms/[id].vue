<template>
  <div>
    <NavBar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img :src="room.image" :alt="room.name" class="w-full h-96 object-cover rounded-lg">
          <div class="mt-8">
            <h1 class="text-3xl font-bold text-gray-900">{{ room.name }}</h1>
            <p class="text-gray-600 mt-2">{{ room.location }}</p>
            <div class="flex items-center mt-2">
              <span class="text-yellow-400">★</span>
              <span class="ml-1">{{ room.rating }}</span>
              <span class="text-gray-500 ml-1">({{ room.reviews }} reviews)</span>
            </div>
            <p class="mt-4 text-gray-700">{{ room.description }}</p>
            <div class="mt-6">
              <h2 class="text-xl font-semibold mb-2">Amenities</h2>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="amenity in room.amenities" 
                  :key="amenity"
                  class="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {{ amenity }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-lg h-fit">
          <div class="mb-4">
            <span class="text-2xl font-bold">${{ room.price }}</span>
            <span class="text-gray-500">/night</span>
          </div>
          <BookingCalendar :price-per-night="room.price" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const roomsStore = useRoomsStore()
const room = computed(() => roomsStore.getRoomById(parseInt(route.params.id as string)))

if (!room.value) {
  throw createError({ statusCode: 404, message: 'Room not found' })
}
</script>