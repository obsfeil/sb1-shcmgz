import { defineStore } from 'pinia'

interface Position {
  x: number
  y: number
}

interface Command {
  type: string
  from: Position
  to: Position
}

export const useRobotStore = defineStore('robot', {
  state: () => ({
    status: 'OFFLINE',
    batteryLevel: 100,
    position: { x: 0, y: 0 },
    commands: [] as Command[],
    isConnected: false
  }),
  
  actions: {
    addCommand(command: Command) {
      this.commands.push(command)
    },
    
    clearCommands() {
      this.commands = []
    },
    
    async connect() {
      try {
        const config = useRuntimeConfig()
        const response = await fetch(`${config.public.apiBase}/api/robot/connect`)
        const data = await response.json()
        this.isConnected = true
        this.status = 'ONLINE'
        this.updateBatteryLevel(data.batteryLevel)
        this.updatePosition(data.position)
      } catch (error) {
        console.error('Failed to connect to robot:', error)
        this.isConnected = false
        this.status = 'OFFLINE'
      }
    },
    
    async sendCommandsToRobot() {
      if (!this.isConnected) {
        await this.connect()
      }
      
      try {
        const config = useRuntimeConfig()
        const response = await fetch(`${config.public.apiBase}/api/robot/commands`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ commands: this.commands }),
        })
        
        const data = await response.json()
        this.updatePosition(data.position)
        this.updateBatteryLevel(data.batteryLevel)
        this.clearCommands()
      } catch (error) {
        console.error('Failed to send commands:', error)
      }
    },
    
    updateBatteryLevel(level: number) {
      this.batteryLevel = level
    },
    
    updatePosition(position: Position) {
      this.position = position
    }
  }
})

function useRuntimeConfig() {
throw new Error('Function not implemented.')
}
