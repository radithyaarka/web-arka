<template>
  <div class="main-container">
    <Header />
    <HeroSection />
    <About />
    <Porto />
    <Documentation />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HeroSection from "@/components/HeroSection.vue";
import About from "@/components/About.vue";
import Porto from "@/components/Porto.vue";
import Documentation from "@/components/Documentation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    HeroSection,
    About,
    Porto,
    Documentation,
    Footer,
  },
  data() {},
  methods: {
    learnMore() {
      alert("Thank you for your interest!");
    },
  },
};
</script>

<style scoped>
.main-container {
  background-image: url("@/assets/bg2.png");
  background-size: cover; /* Ensure the image covers the entire background */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating */
  min-height: 100vh; /* Ensure it covers the viewport height */
}
</style>
