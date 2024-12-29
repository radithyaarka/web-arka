<template>
  <footer>
    <div class="container mx-auto flex items-center justify-between py-4">
      <div>
        <p class="text-white">&copy; 2023 AIA. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #000000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: auto;
}
.router-link {
  transition: color 0.3s ease-in-out;
  color: #fff; /* Default link color */
}

.router-link:hover {
  color: #7d12ff; /* Hover link color */
}
</style>
