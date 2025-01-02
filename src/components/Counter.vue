<template>
    <div class="counter h-screen flex flex-col justify-center items-center mt-4 mb-16">
      <!-- Title -->
      <h1 class="title text-4xl font-bold text-[#ffcdd2] mb-4">Love Counter</h1>
      <!-- Subtitle -->
      <p class="sub-title text-xl text-white mb-8">Yuk itung udah bucin berapa kali WKWKWK</p>
      
      <!-- Counter Cards -->
      <div class="word-counts flex justify-center gap-8">
        <div v-for="(count, word) in romanticWords" :key="word" class="word flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-48 h-32">
          <p class="word-text text-2xl text-center mb-2">{{ word }}</p>
          <div class="count text-4xl text-teal-300 font-bold mb-2 text-center">{{ count }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        romanticWords: {
          "sayang": 0,
          "love u": 0,
          "kangen": 0,
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tidak ada styling tambahan karena semua sudah dikelola oleh Tailwind */
  </style>
  