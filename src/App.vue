<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'

const route = useRoute();
</script>

<template>
  <div class="app-container">
      <NavBar v-if="route.path !== '/' && route.path !== '/Login'"></NavBar>
    <div class="app-view">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.app-container{
  padding-top: 0.15rem;
  padding-right: 0.30rem;
  padding-left: 0.30rem;
  display:flex;
  flex-direction: row;
  gap: 0.30rem;
}
.app-view{
  flex-grow: 1;
}


</style>
