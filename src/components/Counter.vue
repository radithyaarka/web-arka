<template>
  <div class="counter h-screen flex flex-col justify-center items-center mt-4 mb-16">
    <!-- Title -->
    <h1 class="title text-4xl font-bold text-[#ffcdd2] mb-4">Love Counter</h1>
    <!-- Subtitle -->
    <p class="sub-title text-xl text-white mb-8">
      yuk itung udah bucin berapa kali WKWKWK
    </p>

    <!-- Counter Cards -->
    <div class="word-counts flex justify-center gap-8">
      <div
        v-for="(count, word) in romanticWords"
        :key="word"
        class="word flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-48 h-32"
      >
        <p class="word-text text-2xl text-center mb-2">{{ word }}</p>
        <div
          class="count text-4xl text-teal-300 font-bold mb-2 text-center"
          :data-purecounter-start="0"
          :data-purecounter-end="count"
          :data-purecounter-duration="1"
          data-purecounter-delay="1"
        ></div>
      </div>
    </div>

    <!-- Additional Text and Button -->
    <p class="text-white mt-6 text-lg">send more dongg 👉👈</p>
    <a href="https://wa.me/6282254772727?text=haii%20sayangg"
      target="_blank">
      <button class="mt-4 bg-[#ffcdd2] text-black py-2 px-6 rounded-full text-l font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        klik ini!
      </button>
    </a>
  </div>
</template>

<script>
import PureCounter from "@srexi/purecounterjs";

export default {
  data() {
    return {
      romanticWords: {
        sayang: 1064,
        "love u": 909,
        kangen: 239,
      },
      counterCompleted: false, // Track whether the counter animation is complete
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Initialize PureCounter
      new PureCounter({
        selector: ".count", // Ensure the selector matches
      });
    });
  },
};
</script>

<style scoped>
.count {
  font-size: 2rem;
  color: teal;
}

/* Animation for fade-in effect */
.fade-in {
  animation: fadeIn 2s ease-out forwards;
}

/* Define the fade-in keyframe animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Style for the button */
button {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e79ea6;
}
</style>
