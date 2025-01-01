<template>
  <div class="flex justify-center items-center min-h-screen bg-none">
    <div
      class="glass-card bg-none flex rounded-lg shadow-lg w-4/5 sm:w-2/3 md:w-1/2 lg:w-3/5 p-6"
    >
      <!-- Gambar -->
      <div
        class="flex-shrink-0 bg-gray-300 w-48 h-64 rounded-lg flex justify-center items-center"
      >
        <span class="text-gray-600 text-lg">image</span>
      </div>

      <!-- Konten Teks -->
      <div class="ml-6">
        <h2 class="text-white text-xl font-bold mb-4">a message from arka</h2>
        <p class="text-white text-sm leading-relaxed text-justify">
          a message from arka a message from arka a message from arka a message
          from arka a message from arka a message from arka a message from arka
          a message from arka a message from arka a message from arka a message
          from arka a message from arka a message from arka
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
};
</script>

<style>
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(255, 205, 210, 0.37);
  padding: 1rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 0;
}
</style>
