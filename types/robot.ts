export interface Position {
  x: number
  y: number
}

export interface Command {
  type: string
  from: Position
  to: Position
}

export interface RobotStatus {
  status: 'ONLINE' | 'OFFLINE' | 'BUSY'
  batteryLevel: number
  position: Position
}