<template>
  <div>
    <!-- Hero Section -->
    <section
      class="hero bg-primary h-screen flex items-center justify-center text-white text-center"
    >
      <div class="container mx-auto">
        <h1 class="text-5xl font-semibold mb-4">Welcome to Our Gallery</h1>
        <p class="text-lg mb-6">
          Explore the beautiful memories we have captured.
        </p>
      </div>
    </section>

    <!-- Locked Section -->
    <section
      id="locked"
      class="bg-primary h-screen flex items-center justify-center text-white text-center relative"
    >
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-4">Unlock the Gallery</h2>
        <p class="text-lg mb-6">
          Press the button 5 times to unlock the gallery.
        </p>
        <div class="mt-20">
          <button
            @click="incrementClickCount"
            class="love-button flex justify-center items-center"
          >
            <div class="progress-bar-heart">
              <img src="@/assets/secret/images.png" alt="Heart Icon" />
            </div>
          </button>
        </div>
        <div class="mt-8">
          <!-- Progress Bar -->
          <div class="progress-bar-wrapper">
            <div class="w-4/5">
              <div
                class="bg-red-500"
                :style="{ width: `${Math.min((clickCount / 30) * 100, 100)}%` }"
              ></div>
              <!-- Heart icon -->
              <div
                class="progress-bar-heart"
                :style="{
                  left: `${Math.min((clickCount / 30) * 100, 100)}%`,
                }"
              >
                <img src="@/assets/secret/images.png" alt="Heart Icon" />
              </div>
            </div>
          </div>
        </div>

        <div
          v-for="(emoticon, index) in emoticons"
          :key="index"
          class="absolute z-50 love-emoticon-wrapper"
          :style="emoticon.style"
        >
          <img
            src="@/assets/secret/images.png"
            alt="Love Emoticon"
            style="width: 24px; height: 24px"
          />
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <transition name="gallery-fade" data-aos="fade-up">
      <Porto v-if="isGalleryUnlocked" />
    </transition>
    <transition name="gallery-fade" data-aos="fade-up">
      <div v-if="isGalleryUnlocked" class="bg-white py-6" id="gallery">
        <div class="container mx-auto text-center">
          <h2 class="text-primary text-3xl font-semibold mb-6">Our Memories</h2>
          <div class="relative">
            <swiper
              :slides-per-view="3"
              :space-between="10"
              loop
              autoplay
              pagination
              navigation
              class="rounded-lg"
            >
              <swiper-slide v-for="(photo, index) in photos" :key="index">
                <div class="group relative">
                  <div
                    class="image-container rounded-xl transition-transform duration-300 group-hover:scale-95"
                  >
                    <img :src="photo.url" :alt="photo.alt" />
                    <div
                      class="text-overlay absolute bottom-0 left-0 w-full bg-[#1e4f8d] bg-opacity-90 p-4 rounded-b-xl text-white"
                    >
                      {{ photo.text }}
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Porto from "@/components/Porto.vue";

import itwImage from "@/assets/itw.png";
import photo3 from "@/assets/photo/3.jpg";
import photo4 from "@/assets/photo/4.jpg";

export default {
  name: "Gallery",
  components: {
    Swiper,
    SwiperSlide,
    Porto,
  },
  data() {
    return {
      photos: [
        { url: itwImage, alt: "Image 1", text: "Memory 1: A beautiful sunset" },
        { url: photo3, alt: "Image 2", text: "Memory 2: A peaceful beach" },
        {
          url: itwImage,
          alt: "Image 3",
          text: "Memory 3: City lights at night",
        },
        { url: photo4, alt: "Image 4", text: "Memory 4: Mountain adventure" },
        {
          url: itwImage,
          alt: "Image 5",
          text: "Memory 5: The serenity of nature",
        },
      ],
      clickCount: 0,
      isGalleryUnlocked: false,
      emoticons: [],
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
    });

    this.$nextTick(() => {
      AOS.refresh(); // Refresh AOS to detect new elements
    });
  },
  methods: {
    incrementClickCount() {
      if (this.clickCount < 30) {
        this.clickCount += 1;
      }

      // Add a new love emoticon with random position
      this.addEmoticon();

      if (this.clickCount >= 30) {
        this.isGalleryUnlocked = true; // Unlock gallery after 5 clicks
      }
    },

    // Function to add a love emoticon with random position
    addEmoticon() {
      const container = document.querySelector("#locked .container");
      const containerRect = container.getBoundingClientRect();

      const maxVerticalOffset = 100;
      const maxHorizontalOffset = 300;

      const randomTop =
        Math.random() * maxVerticalOffset * 2 - maxVerticalOffset;
      const randomLeft =
        Math.random() * maxHorizontalOffset * 2 - maxHorizontalOffset;

      const emoticon = {
        style: {
          top: `${containerRect.height / 2 + randomTop}px`,
          left: `${containerRect.width / 2 + randomLeft}px`,
        },
      };

      this.emoticons.push(emoticon);

      // Automatically remove emoticons after a brief time
      setTimeout(() => {
        this.emoticons.shift(); // Remove the oldest emoticon
      }, 2000); // Remove after 2 seconds
    },
  },
};
</script>

<style scoped>
/* Hero section styles */
.hero {
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero .container {
  position: relative;
  z-index: 1;
}

/* Locked section styles */
#locked {
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#locked .container {
  text-align: center;
  position: relative;
}

/* Gallery fade transition */
.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.gallery-fade-enter,
.gallery-fade-leave-to {
  opacity: 0;
}

/* Gallery section styles */
.bg-white {
  background-color: white;
}

.bg-primary {
  background-color: #000000;
}

.text-primary {
  color: #000000;
}

.image-container {
  position: relative;
  width: 100%;
  height: 500px;
  max-width: 400px;
  margin: 0 auto;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.image-container:hover {
  transform: scale(0.98);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-overlay {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .text-overlay {
  opacity: 1;
}

.love-emoticon-wrapper {
  position: absolute;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.love-emoticon-wrapper img {
  width: 24px;
  height: 24px;
}

/* Optional: Add animation effects for fading in and out */
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.love-emoticon-wrapper {
  animation: fadeInOut 2s ease-in-out;
}

/* Locked section styles */
#locked {
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh; /* Ensure full height of the viewport */
}

#locked .container {
  text-align: center;
  position: relative;
  z-index: 2; /* Ensure the container is above the love emoticon */
  width: 100%; /* Ensure container takes up full width */
}

.progress-bar-wrapper {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically (if needed) */
  width: 100%;
  z-index: 0;
  margin: 0 auto; /* Center within the container */
}

/* Progress bar container */
.progress-bar-wrapper .w-4\/5 {
  position: relative;
  width: 50%; /* Adjust width as needed */
  height: 20px;
  background-color: #e0e0e0; /* Light gray background */
  border-radius: 6px; /* Rounded corners */
  overflow: visible;
}

/* Progress bar (red fill) */
.bg-red-500 {
  height: 100%;
  background-color: #ff4d4d; /* Bright red color for progress */
  border-radius: 6px; /* Match container rounding */
  transition: width 0.5s ease; /* Smooth transition for progress */
}

/* Heart icon indicator */
.love-button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 15px rgba(255, 255, 255, 0.6);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  perspective: 500px; /* Memberikan perspektif untuk efek 3D */
}

.love-button:active {
  transform: translateY(4px); /* Tombol akan 'masuk' saat ditekan */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Menambahkan bayangan saat tombol ditekan */
}

.progress-bar-heart {
  position: absolute;
  top: 50%; /* Tetap di tengah vertikal progress bar */
  transform: translate(-50%, -50%); /* Geser sedikit ke atas */
  width: 32px; /* Ukuran ikon */
  height: 32px;
  background-color: #fff; /* Warna latar belakang putih */
  border-radius: 50%; /* Membuat ikon berbentuk lingkaran */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Tambahkan bayangan */
  border: 2px solid #ff4d4d; /* Border merah */
  z-index: 1; /* Pastikan ikon berada di atas progress bar */
}

.progress-bar-heart img {
  width: 16px; /* Ukuran gambar hati */
  height: 16px;
}
</style>
