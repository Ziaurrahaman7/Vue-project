<template>
    <section class="hero-slider-area position-relative">
                <div class="swiper hero-slider-container">
                    <div class="swiper-wrapper">
                    <carousel :items-to-show="1">
                        <div v-for="slide in slides" v-bind:key="slide" class="swiper-slide hero-slide-slide">

                            <div class="container">
                                <div class="row align-slides-center position-relative">
                                    <div class="col-12 col-sm-6">
                                        <div class="hero-slide-content">
                                            <div class="hero-slide-shape-img"><img src="https://htmldemo.net/merier/merier/assets/images/slider/shape1.png" width="180" height="180" alt="Image"></div>
                                            <h4 class="hero-slide-sub-title">{{slide.except}}</h4>
                                            <h1 class="hero-slide-title">{{slide.title}}</h1>
                                            <p class="hero-slide-desc">{{slide.subtitle}}</p>
                                            <div class="hero-slide-meta">
                                                <a class="btn btn-border-primary" href="shop.html">Shop Now</a>
                                                <a class="ht-popup-video" data-fancybox data-type="iframe" href="https://player.vimeo.com/video/172601404?autoplay=1">
                                                    <i class="fa fa-play icon"></i>
                                                    <span>Play Now</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="hero-slide-thumb">
                                            <img :src="slide.banarimg" width="555" height="550" alt="Image">
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="hero-social">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener">fb</a>
                                    <a href="https://www.twitter.com/" target="_blank" rel="noopener">tw</a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener">in</a>
                                </div> -->
                            </div>
                        </div>
                         <template #addons>
                        <!-- <navigation /> -->
                        <pagination />
                        </template>
                    </carousel>
                    </div>
                    <!--== Add Pagination ==-->
                    <div class="hero-slider-pagination"></div>
                </div>
            </section>
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
        slides:[
       {
        except:'HURRY UP!',
        title:'Let???s find your fashion outfit.',
        subtitle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
        banarimg:banarimg1
       },
       {
        except:'HURRY UP!',
        title:'Let???s find your fashion outfit.',
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
