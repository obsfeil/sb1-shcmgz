import { defineStore } from 'pinia'
import type { Room } from '~/types/room'

export const useRoomsStore = defineStore('rooms', {
  state: () => ({
    rooms: [
      {
        id: 1,
        name: "Luxury Beachfront Villa",
        description: "Stunning villa with direct beach access and panoramic ocean views",
        price: 350,
        location: "Malibu, California",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        amenities: ["Pool", "WiFi", "Kitchen", "Beach Access"],
        rating: 4.9,
        reviews: 128
      },
      {
        id: 2,
        name: "Mountain Retreat Cabin",
        description: "Cozy cabin surrounded by pine trees with mountain views",
        price: 200,
        location: "Aspen, Colorado",
        image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59",
        amenities: ["Fireplace", "Hot Tub", "WiFi", "Hiking Trails"],
        rating: 4.8,
        reviews: 95
      },
      {
        id: 3,
        name: "Urban Luxury Loft",
        description: "Modern loft in the heart of downtown with city views",
        price: 275,
        location: "New York City, New York",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        amenities: ["Gym", "Doorman", "WiFi", "Work Space"],
        rating: 4.7,
        reviews: 156
      }
    ] as Room[]
  }),
  getters: {
    getAllRooms: (state) => state.rooms,
    getRoomById: (state) => (id: number) => state.rooms.find(room => room.id === id)
  }
})