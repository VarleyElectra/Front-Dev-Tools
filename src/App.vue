<template>
  <v-header />
  <div class="app">
    <router-view />
  </div>
  <v-footer />
</template>

<script>
import VHeader from "@/views/VHeader";
import VFooter from "@/views/VFooter";
export default {
    name: "App",
    components: {VFooter, VHeader}
}
</script>

<style>
.app {
  font-family: 'Exo 2', sans-serif;
  flex: 1 0 auto;
}
</style>
