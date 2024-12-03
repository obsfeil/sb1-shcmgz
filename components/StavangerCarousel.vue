<template>
  <div class="w-full mb-12">
    <swiper
      :modules="[SwiperAutoplay, SwiperEffectFade, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :pagination="{ clickable: true }"
      class="h-[500px] w-full rounded-xl overflow-hidden"
    >
      <swiper-slide v-for="(image, index) in stavangerImages" :key="index">
        <img
          :src="image.url"
          :alt="image.description"
          class="w-full h-full object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p class="text-lg">{{ image.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperAutoplay = Autoplay
const SwiperEffectFade = EffectFade
const SwiperNavigation = Navigation
const SwiperPagination = Pagination

const stavangerImages = [
  {
    url: 'https://images.unsplash.com/photo-1564501049890-c77a3b06894d',
    description: 'Gamle Stavanger (Old Stavanger) with its white wooden houses'
  },
  {
    url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    description: 'Stavanger Harbor with traditional boats'
  },
  {
    url: 'https://images.unsplash.com/photo-1565626929866-e8c945d898d6',
    description: 'Pulpit Rock (Preikestolen) near Stavanger'
  },
  {
    url: 'https://images.unsplash.com/photo-1566842937050-3232c0e0d8b4',
    description: 'Modern Stavanger city center'
  },
  {
    url: 'https://images.unsplash.com/photo-1565626415670-5a0d6316a389',
    description: 'Lysefjorden view from Stavanger'
  }
]
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: white !important;
}

.swiper-pagination-bullet {
  background: white !important;
}

.swiper-pagination-bullet-active {
  background: white !important;
}
</style>