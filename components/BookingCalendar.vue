<template>
  <div class="booking-calendar">
    <v-calendar
      v-model="selectedDates"
      :min-date="new Date()"
      :attributes="attributes"
      is-range
      @dayclick="onDayClick"
    />
    <div v-if="selectedDates.start && selectedDates.end" class="mt-4 p-4 bg-gray-50 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">Booking Summary</h3>
      <p>Check-in: {{ formatDate(selectedDates.start) }}</p>
      <p>Check-out: {{ formatDate(selectedDates.end) }}</p>
      <p class="mt-2">Total nights: {{ numberOfNights }}</p>
      <p class="font-bold">Total: ${{ totalPrice }}</p>
      <button 
        @click="confirmBooking"
        class="mt-4 w-full bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600"
      >
        Confirm Booking
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedDates = ref({ start: null, end: null })
const props = defineProps<{
  pricePerNight: number
}>()

const attributes = computed(() => [{
  highlight: {
    start: selectedDates.value.start,
    end: selectedDates.value.end,
  },
  dot: {
    color: 'rose-500',
  },
}])

const numberOfNights = computed(() => {
  if (!selectedDates.value.start || !selectedDates.value.end) return 0
  return Math.ceil((selectedDates.value.end - selectedDates.value.start) / (1000 * 60 * 60 * 24))
})

const totalPrice = computed(() => {
  return numberOfNights.value * props.pricePerNight
})

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

const confirmBooking = () => {
  // Here you would typically integrate with a booking API
  alert('Booking confirmed! (Demo purposes only)')
}
</script>