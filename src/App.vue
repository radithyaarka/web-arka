<script setup>
import { RouterView } from 'vue-router'; // Untuk menampilkan rute dinamis
import Navbar from './components/Header.vue'; // Header atau Navbar
import '@fortawesome/fontawesome-free/css/all.css';
</script>

<template>
  <div class="app-container">
    <!-- Router View untuk menampilkan konten rute -->
    <RouterView />
  </div>
</template>

<style>

</style>
