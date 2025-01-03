<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-section bg-none relative flex items-center justify-center">
      <div class="container mx-auto flex relative z-10 h-full px-8 items-center justify-between">
        <!-- Left Section (Text and Skills) -->
        <div :class="['flex flex-col gap-6 max-w-lg', fadeClassText]">
          <!-- Text Section -->
          <div class="text-section glass-card p-8">
            <h1 class="text-4xl font-bold text-black mb-4">
              Hi, I'm <span class="text-accent">Arka Radithya</span>
            </h1>
            <h2 class="text-xl font-light text-black mb-6 typing-effect">
              {{ textContent }}
            </h2>
            <p class="text-black mb-6">
              I have been studying since 2022. I am proficient in UI design, user experience, research, and web development.
            </p>
          </div>

          <!-- Best Skill On -->
          <div class="glass-card text-center p-6">
            <h3 class="text-lg text-black font-semibold mb-4">Best Skill On</h3>
            <div class="flex justify-center gap-4 text-white">
              <i class="icon bg-gray-800 rounded-full p-3">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="Figma" class="w-6 h-6">
              </i>
              <i class="icon bg-gray-800 rounded-full p-3">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="Adobe XD" class="w-6 h-6">
              </i>
              <i class="icon bg-gray-800 rounded-full p-3">
                <img src="https://cdn-icons-png.flaticon.com/512/906/906343.png" alt="Photoshop" class="w-6 h-6">
              </i>
            </div>
          </div>
        </div>

        <!-- Right Section (Image) -->
        <div :class="['image-section', fadeClassImage]">
          <img src="@/assets/logo.png" alt="Arka Radithya" class="custom-image rounded-xl shadow-lg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      textArray: [
        "a UI/UX Designer Enthusiast.",
        "a Front-End Developer Enthusiast.",
        "an Information Technology Student.",
        "a Mobile Developer Enthusiast.",
        "a UI/UX Designer Enthusiast."
      ],
      currentTextIndex: 0,
      textContent: "",
      fadeClassText: "fade-in-left", // Kelas untuk animasi fade-in dari kiri (teks)
      fadeClassImage: "fade-in-right" // Kelas untuk animasi fade-in dari kanan (gambar)
    };
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      const currentText = this.textArray[this.currentTextIndex];
      let i = 0;

      const typingInterval = setInterval(() => {
        this.textContent += currentText[i];
        i++;
        if (i === currentText.length) {
          clearInterval(typingInterval);
          setTimeout(this.deleteText, 1000); // Wait 1s before starting to delete
        }
      }, 150); // Speed of typing effect
    },
    deleteText() {
      let i = this.textContent.length;

      const deletingInterval = setInterval(() => {
        this.textContent = this.textContent.slice(0, i - 1);
        i--;
        if (i === 0) {
          clearInterval(deletingInterval);
          this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length; // Cycle through text
          setTimeout(this.typeText, 500); // Wait 0.5s before starting to type the next phrase
        }
      }, 100); // Speed of deleting effect
    }
  }
};
</script>

<style scoped>
.hero-section {
  background-size: cover;
  background-position: center;
  height: calc(100vh - 64px);
}

.text-accent {
  color: #d0b502;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.custom-image {
  width: 300px;
  height: 450px;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem; /* Add a gap between the two sections */
  margin-left: 15%; /* Add left margin to push sections to the center */
  margin-right: 15%; /* Add right margin to push sections to the center */
}

.image-section {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
}

.text-section {
  align-items: flex-start;
  margin-right: 0; /* Ensure no margin on the right */
}

.text-section, .image-section {
  margin: 0; /* Ensure no margin on both text and image sections */
}

/* Typing effect */
.typing-effect {
  display: inline-block;
  border-right: 4px solid #000000; /* Adds a cursor effect */
  white-space: nowrap;
  overflow: hidden;
  min-height: 1.5em; /* Maintain a consistent height for the text container */
}

/* Fade-In Animation */
.fade-in-left {
  animation: fadeInLeft 2s ease-in-out; /* Extended duration to 2s for slower animation */
}

.fade-in-right {
  animation: fadeInRight 2s ease-in-out; /* Extended duration to 2s for slower animation */
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>


