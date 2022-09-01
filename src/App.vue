<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
</script>

<template>
<Header/>
  <router-view :key="$route.path"></router-view>
 <Footer/> 
</template>

