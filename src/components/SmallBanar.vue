<template>
    <section class="product-banner-area section-top-space">
    <div class="container">
        <div class="swiper banner-slider-container">
            <div class="swiper-wrapper">
            <carousel :items-to-show="1">
                 <div v-for="slide in slides" v-bind:key="slide" class="swiper-slide hero-slide-slide">
                <a  href="#" class="swiper-slide product-banner-item">
                    <img class="icon" :src="slide.banarimg" width="370" height="294" alt="Image-HasTech">
                </a>
                 </div>
                 <pagination />
                        </template>
                    </carousel>
            </div>
        </div>
    </div>
    <h6 class="visually-hidden">Banner Section</h6>
</section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import banarimg1 from '../assets/image/01.webp'
import banarimg2 from '../assets/image/02.webp'
import banarimg3 from '../assets/image/03.webp'
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
        slides:[
       {
        banarimg:banarimg1
       },
       {
        banarimg:banarimg2
       },
     {
        banarimg:banarimg3
       },
       ],
       }
    },
};
</script>
