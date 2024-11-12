<script setup>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import PreloaderComponent from './components/PreloaderComponent.vue';
</script>

<template>
  <PreloaderComponent />

  <HeaderComponent />

  <router-view v-slot="{ Component }">
      <component :is="Component"></component>
  </router-view>

  <FooterComponent />
</template>
