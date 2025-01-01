<template>
  <div class="bg-custom">
    <!-- Hero Section -->
    <section
      class="hero bg-none h-screen flex items-center justify-center text-white text-center"
    >
      <div class="container mx-auto glass-card">
        <h1 class="text-5xl font-semibold mb-4">Welcome to Our Gallery</h1>
        <p class="text-lg mb-6">
          Explore the beautiful memories we have captured.
        </p>
      </div>
    </section>
    <transition data-aos="fade-up">
      <Journey />
    </transition>
    <transition data-aos="fade-up">
      <Message />
    </transition>

      <Bijou />


    <!-- Locked Section -->
    <section
      id="locked"
      class="h-screen flex items-center justify-center text-white text-center relative"
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
          <div class="progress-bar-wrapper">
            <div class="w-4/5">
              <div
                class="bg-red-500"
                :style="{ width: `${Math.min((clickCount / 30) * 100, 100)}%` }"
              ></div>
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
      <div v-if="isGalleryUnlocked" class="bg-none py-6" id="gallery">
        <div class="container mx-auto text-center">
          <h2 class="text-white text-3xl font-semibold mb-6">Our Memories</h2>
          <div class="relative">
            <swiper
              :slides-per-view="3"
              loop
              autoplay
              pagination
              :simulateTouch="true"
              :allowTouchMove="true"
              :cssMode="true"
              :mousewheel="true"
              :keyboard="true"
              :modules="modules"
              class="rounded-lg"
            >
              <swiper-slide v-for="(photo, index) in photos" :key="index">
                <div class="group relative">
                  <div
                    class="image-container polaroid rounded-xl transition-transform duration-300 group-hover:scale-95"
                  >
                    <img :src="photo.url" :alt="photo.alt" />
                    <div
                      class="text-overlay absolute bottom-0 left-0 w-full bg-[#f76c88] bg-opacity-90 p-4 rounded-b-xl text-white"
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
import Journey from "../components/Journey.vue";
import Message from "@/components/Message.vue";
import Bijou from "@/components/Bijou.vue";

import itwImage from "@/assets/itw.png";
import p1 from "@/assets/secret/p1.jpg";
import photo3 from "@/assets/photo/3.jpg";
import photo4 from "@/assets/photo/4.jpg";

export default {
  name: "Gallery",
  components: {
    Swiper,
    SwiperSlide,
    Message,
    Bijou,
    Journey,
  },
  data() {
    return {
      photos: [
        { url: p1, alt: "Image 1", text: "Memory 1: A beautiful sunset" },
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
      once: false,
    });

    this.$nextTick(() => {
      AOS.refresh();
    });
  },
  methods: {
    incrementClickCount() {
      if (this.clickCount < 30) {
        this.clickCount += 1;
      }

      this.addEmoticon();

      if (this.clickCount >= 30) {
        this.isGalleryUnlocked = true;
      }
    },
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

      setTimeout(() => {
        this.emoticons.shift();
      }, 2000);
    },
  },
};
</script>

<style scoped>
.bg-custom {
  background-image: url("@/assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.hero {
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero .container {
  position: relative;
  z-index: 1;
}

#locked {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#locked .container {
  text-align: center;
  position: relative;
}

.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.gallery-fade-enter,
.gallery-fade-leave-to {
  opacity: 0;
}

.bg-primary {
  background-color: #000000;
}

.text-primary {
  color: #000000;
}
.image-container {
  position: relative;
  width: 500px;
  height: 500px;
  max-width: 400px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff; /* White background to mimic the Polaroid frame */
  padding: 20px; /* Padding to create a frame around the image */
  border-radius: 15px; /* Rounded corners for the Polaroid effect */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Soft shadow to lift the card */
  transition: transform 0.3s ease-in-out;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; /* Rounded corners inside the frame */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

#locked {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
}

#locked .container {
  text-align: center;
  position: relative;
  z-index: 2;
  width: 100%;
}

.progress-bar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 0;
  margin: 0 auto;
}

.progress-bar-wrapper .w-4\/5 {
  position: relative;
  width: 50%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 6px;
  overflow: visible;
}

.bg-red-500 {
  height: 100%;
  background-color: #ff4d4d;
  border-radius: 6px;
  transition: width 0.5s ease;
}

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
  perspective: 500px;
}

.love-button:active {
  transform: translateY(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.progress-bar-heart {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid #ff4d4d;
  z-index: 1;
}

.progress-bar-heart img {
  width: 16px;
  height: 16px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(255, 205, 210, 0.37);
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 0;
  height: 170px;
  width: 100%;
  max-width: 800px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
