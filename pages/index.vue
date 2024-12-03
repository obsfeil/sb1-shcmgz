<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900">Robot Control Interface</h1>
        <p class="mt-2 text-lg text-gray-600">Draw paths to control the robot's movement</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-3">
          <RobotCanvas />
        </div>
        <div class="lg:col-span-1">
          <RobotStatus />
        </div>
      </div>
      
      <div class="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Instructions</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Draw paths on the canvas to create movement commands</li>
          <li>Click "Clear" to reset the canvas</li>
          <li>Click "Send Commands" to execute the drawn path</li>
          <li>Monitor robot status and battery level in the side panel</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRobotStore } from '~/stores/robot'

const robotStore = useRobotStore()

onMounted(async () => {
  await robotStore.connect()
})
</script>