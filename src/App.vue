<script setup>
import { RouterView } from 'vue-router'; // Untuk menampilkan rute dinamis
import Navbar from './components/Header.vue'; // Header atau Navbar
</script>

<template>
  <div class="app-container">
    <!-- Router View untuk menampilkan konten rute -->
    <RouterView />
  </div>
</template>

<style>

</style>
