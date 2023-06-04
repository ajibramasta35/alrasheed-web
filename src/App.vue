<template>
    <RouterView/>
    <Footer/>
</template>

<script>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
// import HeaderUtama from './components/HeaderUtama.vue';

export default {
components:{
  RouterView,
  Footer,
}
}
</script>

<style>

</style>