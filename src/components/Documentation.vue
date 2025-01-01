<template>
  <div class="bg-none py-6">
    <div class="container mx-auto">
      <h2 class="text-black text-3xl font-semibold mb-6 text-center">
        My Photography
      </h2>
      <div class="relative m-7">
        <swiper
          :slides-per-view="3"
          :space-between="10"
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
          data-aos="fade-up"
        >
          <swiper-slide v-for="(photo, index) in photos" :key="index">
            <div class="group relative">
              <!-- Click on the image to open the modal -->
              <div
                class="image-container rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-95"
                @click="openModal(photo.url)"
              >
                <img
                  :src="photo.url"
                  :alt="photo.alt"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Modal for full-size image -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div
          class="bg-white p-4 rounded-lg max-w-4xl w-full max-h-screen overflow-auto"
        >
          <!-- Modal Image with max width and height settings -->
          <img
            :src="currentPhoto"
            class="w-full h-auto max-h-[80vh] object-contain mx-auto"
          />
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-white font-bold text-xl"
          >
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

// Import images statically
import photo1 from "@/assets/photo/1.jpg";
import photo2 from "@/assets/photo/2.jpg";
import photo3 from "@/assets/photo/3.jpg";
import photo4 from "@/assets/photo/4.jpg";
import photo5 from "@/assets/photo/5.jpg";
import photo6 from "@/assets/photo/6.jpg";
import photo7 from "@/assets/photo/7.jpg";
import photo8 from "@/assets/photo/8.jpg";
import photo9 from "@/assets/photo/9.jpg";
import photo10 from "@/assets/photo/10.jpg";

export default {
  name: "Documentation",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      photos: [
        { url: photo1, alt: "Image 1" },
        { url: photo2, alt: "Image 2" },
        { url: photo3, alt: "Image 3" },
        { url: photo4, alt: "Image 4" },
        { url: photo5, alt: "Image 5" },
        { url: photo6, alt: "Image 6" },
        { url: photo7, alt: "Image 7" },
        { url: photo8, alt: "Image 8" },
        { url: photo9, alt: "Image 9" },
        { url: photo10, alt: "Image 10" },
      ],
      isModalOpen: false,
      currentPhoto: null,
    };
  },
  methods: {
    openModal(url) {
      this.currentPhoto = url;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentPhoto = null;
    },
  },
};
</script>

<style scoped>
.bg-primary {
  background-color: #000000; /* Dark background */
}

.text-white {
  color: white; /* White text */
}

.text-center {
  text-align: center;
}

.relative {
  position: relative;
}

.image-container {
  position: relative;
  width: 100%;
  height: 600px; /* Set a fixed height for the card */
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire area and is cropped if needed */
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-xl {
  border-radius: 1rem;
}

/* Modal Styles */
.fixed {
  position: fixed;
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.z-50 {
  z-index: 50;
}

button {
  cursor: pointer;
}

button:hover {
  color: red;
}

/* Make sure the image in the modal scales well and fits in the viewport */
.max-height-80vh {
  max-height: 80vh;
}

.object-contain {
  object-fit: contain; /* Make sure the image fits without stretching */
}
</style>
