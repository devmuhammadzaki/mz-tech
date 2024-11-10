<script setup>
import { RouterView } from 'vue-router';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import PreloaderComponent from './components/PreloaderComponent.vue';
</script>

<template>
  <!-- preloader -->
  <PreloaderComponent />

  <!-- header -->
  <HeaderComponent />

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>


  <FooterComponent />
</template>
