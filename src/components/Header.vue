<template>
  <nav class="bg-none">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-center">
        <div class="flex space-x-6">
          <a
            class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
            :class="{ 'underline font-bold text-purple-700': activeSection === 'home' }"
            @click.prevent="navigateToSection('home')"
          >
            Home
          </a>
          <a
            class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
            :class="{ 'underline font-bold text-purple-700': activeSection === 'about' }"
            @click.prevent="navigateToSection('about')"
          >
            About
          </a>
          <a
            class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
            :class="{ 'underline font-bold text-purple-700': activeSection === 'portfolio' }"
            @click.prevent="navigateToSection('portfolio')"
          >
            Portfolio
          </a>
          <a
            class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
            :class="{ 'underline font-bold text-purple-700': activeSection === 'contact' }"
            @click.prevent="navigateToSection('contact')"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeSection: "home",
    };
  },
  methods: {
    navigateToSection(section) {
      this.activeSection = section;
      this.$emit("navigate", section); // Emit the section identifier to parent
    },
  },
};
</script>
