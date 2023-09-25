<template>
  <div class="min-h-screen font-Roboto w-screen">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>


<style>
#app {
  overflow: hidden;
}
</style>
