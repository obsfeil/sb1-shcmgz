<template>
  <div class="relative">
    <canvas
      ref="canvasRef"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="stopDrawing"
      class="border-2 border-gray-300 rounded-lg bg-white shadow-lg"
      :width="canvasWidth"
      :height="canvasHeight"
    ></canvas>
    <div class="absolute top-4 right-4 space-y-2">
      <button
        @click="clearCanvas"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Clear
      </button>
      <button
        @click="sendCommands"
        class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition block"
      >
        Send Commands
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRobotStore } from '~/stores/robot'

const robotStore = useRobotStore()
const canvasRef = ref<HTMLCanvasElement | null>(null)
const isDrawing = ref(false)
const canvasWidth = 800
const canvasHeight = 600
let ctx: CanvasRenderingContext2D | null = null
let lastX = 0
let lastY = 0

onMounted(() => {
  if (canvasRef.value) {
    ctx = canvasRef.value.getContext('2d')
    if (ctx) {
      ctx.strokeStyle = '#2563eb'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      drawGrid()
    }
  }
})

function drawGrid() {
  if (!ctx) return
  
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 1
  
  // Draw vertical lines
  for (let x = 0; x <= canvasWidth; x += 50) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvasHeight)
    ctx.stroke()
  }
  
  // Draw horizontal lines
  for (let y = 0; y <= canvasHeight; y += 50) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(canvasWidth, y)
    ctx.stroke()
  }
  
  // Reset stroke style for drawing
  ctx.strokeStyle = '#2563eb'
  ctx.lineWidth = 3
}

function startDrawing(e: MouseEvent) {
  isDrawing.value = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
}

function draw(e: MouseEvent) {
  if (!isDrawing.value || !ctx) return
  
  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  
  robotStore.addCommand({
    type: 'move',
    from: { x: lastX, y: lastY },
    to: { x: e.offsetX, y: e.offsetY }
  });
  
  [lastX, lastY] = [e.offsetX, e.offsetY]
}

function handleTouchStart(e: TouchEvent) {
  e.preventDefault()
  if (!canvasRef.value) return
  
  const touch = e.touches[0]
  const rect = canvasRef.value.getBoundingClientRect()
  const x = touch.clientX - rect.left
  const y = touch.clientY - rect.top
  
  isDrawing.value = true;
  [lastX, lastY] = [x, y]
}

function handleTouchMove(e: TouchEvent) {
  e.preventDefault()
  if (!isDrawing.value || !canvasRef.value) return
  
  const touch = e.touches[0]
  const rect = canvasRef.value.getBoundingClientRect()
  const x = touch.clientX - rect.left
  const y = touch.clientY - rect.top
  
  draw({ offsetX: x, offsetY: y } as MouseEvent)
}

function stopDrawing() {
  isDrawing.value = false
}

function clearCanvas() {
  if (!ctx || !canvasRef.value) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  drawGrid()
  robotStore.clearCommands()
}

async function sendCommands() {
  await robotStore.sendCommandsToRobot()
  clearCanvas()
}
</script>