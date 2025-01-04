<script setup>
import { RouterView } from "vue-router"; // Untuk menampilkan rute dinamis
import "@fortawesome/fontawesome-free/css/all.css";
</script>

<template>
  <div class="app-container">
    <!-- Router View untuk menampilkan konten rute -->
    <RouterView />
  </div>
</template>

<style>
/* Global CSS */
*,
*::before,
*::after {
  font-family: "Montserrat", sans-serif;
}
</style>
