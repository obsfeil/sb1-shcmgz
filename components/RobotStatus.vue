<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Robot Status</h2>
    <div class="space-y-4">
      <div class="flex items-center">
        <div class="w-3 h-3 rounded-full" :class="statusColor"></div>
        <span class="ml-2">{{ robotStore.status }}</span>
      </div>
      <div>
        <p class="font-semibold">Battery Level:</p>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div
            class="bg-green-600 h-2.5 rounded-full"
            :style="{ width: `${robotStore.batteryLevel}%` }"
          ></div>
        </div>
        <span class="text-sm text-gray-600">{{ robotStore.batteryLevel }}%</span>
      </div>
      <div>
        <p class="font-semibold">Current Position:</p>
        <p class="text-sm">X: {{ robotStore.position.x }}, Y: {{ robotStore.position.y }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRobotStore } from '~/stores/robot'

const robotStore = useRobotStore()

const statusColor = computed(() => {
  switch (robotStore.status) {
    case 'ONLINE':
      return 'bg-green-500'
    case 'BUSY':
      return 'bg-yellow-500'
    case 'OFFLINE':
      return 'bg-red-500'
    default:
      return 'bg-gray-500'
  }
})
</script>