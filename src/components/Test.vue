<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in items" :key="slide">
      {{ slide.title }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import banarimg1 from '../assets/image/slider1.webp'
import banarimg2 from '../assets/image/slider1-man2.webp'
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
   data(){
       return {
        items:[
       {
        except:'HURRY UP!',
        title:'Let’s find your fashion outfit.',
        subtitle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
        banarimg:banarimg1
       },
       {
        except:'HURRY UP!',
        title:'Let’s find your fashion outfit.',
        subtitle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
        banarimg:banarimg2
       },
       ],
       timer: null,
      currentIndex: 0
       }
    },
};
</script>