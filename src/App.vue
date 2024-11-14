<script setup>
import { RouterView } from 'vue-router';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import PreloaderComponent from './components/PreloaderComponent.vue';
</script>

<template>
  <PreloaderComponent />

  <HeaderComponent />

  <RouterView></RouterView>

  <FooterComponent />
</template>
