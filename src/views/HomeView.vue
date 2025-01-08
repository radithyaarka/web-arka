<template>
  <div class="main-container">
    <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-center">
          <div class="flex space-x-6">
            <!-- Navbar links with scroll behavior -->
            <a
              class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
              :class="{
                'underline font-bold text-purple-700': activeSection === 'home',
              }"
              href="#home"
              @click.prevent="scrollToSection('home')"
            >
              Home
            </a>
            <a
              class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
              :class="{
                'underline font-bold text-purple-700':
                  activeSection === 'about',
              }"
              href="#about"
              @click.prevent="scrollToSection('about')"
            >
              About
            </a>
            <a
              class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
              :class="{
                'underline font-bold text-purple-700':
                  activeSection === 'experience',
              }"
              href="#experience"
              @click.prevent="scrollToSection('experience')"
            >
              Experience
            </a>
            <a
              class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
              :class="{
                'underline font-bold text-purple-700':
                  activeSection === 'portfolio',
              }"
              href="#portfolio"
              @click.prevent="scrollToSection('portfolio')"
            >
              Portfolio
            </a>
            <a
              class="text-gray-800 font-medium hover:text-purple-600 hover:underline cursor-pointer"
              :class="{
                'underline font-bold text-purple-700':
                  activeSection === 'contact',
              }"
              href="#contact"
              @click.prevent="scrollToSection('contact')"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div id="home" class="section">
      <HeroSection />
    </div>
    <div id="about" class="section">
      <About />
    </div>
    <div id="experience" class="section">
      <Experience />
    </div>
    <div id="portfolio" class="section">
      <Porto />
      <Documentation />
    </div>
    <div id="contact" class="section">
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Porto from "@/components/Porto.vue";
import Documentation from "@/components/Documentation.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    HeroSection,
    About,
    Experience,
    Porto,
    Documentation,
    Contact,
    Footer,
  },
  data() {
    return {
      activeSection: "home",
      isScrolled: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        this.activeSection = sectionId;
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > window.innerHeight * 0.01;
    },
    setActiveSection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    
    const options = {
      root: null,
      rootMargin: "0px 0px -50px 0px", // Add bottom margin to trigger early
      threshold: 0.2, // Trigger when 20% of the section is visible
    };
    
    const observer = new IntersectionObserver(this.setActiveSection, options);
    
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      observer.observe(section);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.main-container {
  background-image: url("@/assets/bg2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.navbar {
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  z-index: 1000;
  margin: 10px auto;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.navbar-scrolled {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  width: 50%;
  margin: 10px auto;
}

a {
  color: #4a4a4a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out, text-decoration 0.3s ease-in-out;
}

a:hover {
  text-decoration: underline;
  color: #7d12ff;
}

.underline {
  text-decoration: underline;
}

.font-bold {
  font-weight: bold;
}

.text-purple-700 {
  color: #6b46c1;
}

.hover\:text-purple-600:hover {
  color: #805ad5;
}

.section {
  padding: 50px 0; /* Space to make sure sections are tall enough to scroll */
}
</style>
