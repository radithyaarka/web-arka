<template>
  <div class="counter h-screen flex flex-col justify-center items-center mt-4 mb-16">
    <!-- Title -->
    <h1 class="title text-4xl font-bold text-[#ffcdd2] mb-4">Love Counter</h1>
    <!-- Subtitle -->
    <p class="sub-title text-xl text-white mb-8">yuk itung udah bucin berapa kali WKWKWK</p>

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
          data-purecounter-duration="1"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import PureCounter from '@srexi/purecounterjs';

export default {
  data() {
    return {
      romanticWords: {
        sayang: 1064,
        "love u": 909,
        kangen: 239,
      },
    };
  },
  mounted() {
    // Inisialisasi PureCounter
    this.$nextTick(() => {
      new PureCounter({
        selector: '.count', // Pilih elemen dengan class 'count'
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
</style>
