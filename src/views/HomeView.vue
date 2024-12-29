<template>
  <div class="overflow-y-scroll">
    <Header />
    <HeroSection />
    <About />
    <Porto />
    <Documentation />
    <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue';
import HeroSection from '@/components/HeroSection.vue';
import About from '@/components/About.vue';
import Porto from '@/components/Porto.vue';
import Documentation from '@/components/Documentation.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    HeroSection,
    About,
    Porto,
    Documentation,
    Footer
  },
  data() {
  },
  methods: {
    learnMore() {
      alert('Thank you for your interest!');
    }
  }
};
</script>