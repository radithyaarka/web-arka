<template>
  <div class="container mx-auto py-10 bg-black">
    <h1 class="text-center text-4xl font-bold mb-8 text-white">
      Journey Timeline
    </h1>
    <div class="relative flex justify-center">
      <!-- Timeline Section -->
      <div class="relative">
        <!-- Timeline Line with glowing effect -->
        <div
          class="absolute left-1/5 top-0 w-1"
          style="
            background-color: #00bfff;
            height: 100%;
            box-shadow: 0 0 15px 5px #00bfff;
          "
        ></div>

        <!-- Timeline Content -->
        <div class="w-full flex flex-col space-y-6">
          <div v-for="(item, index) in timelineData" :key="index" class="pl-8">
            <p
              class="text-lg text-white glow-text"
              :data-text="item.text"
              :class="{ active: activeIndex === index }"
              @click="activateGlow(index, item.image)"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>

      <!-- Image Content with 3:4 Aspect Ratio -->
      <div
        class="flex justify-center items-center ml-[120px] rounded-lg shadow-lg"
        style="width: 300px; height: 400px"
      >
        <img
          :src="mainImage"
          alt="Main Timeline Image"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import itcare from "@/assets/itcare.png";
import itcare2 from "@/assets/itcare2.png";

export default {
  name: "Journey",
  data() {
    return {
      timelineData: [
        { text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet", image: itcare2 },
        { text: "Text 2", image: itcare },
        { text: "Text 3", image: "https://via.placeholder.com/300x400?text=Image+3" },
        { text: "Text 4", image: "https://via.placeholder.com/300x400?text=Image+4" },
        { text: "Text 5", image: "https://via.placeholder.com/300x400?text=Image+5" },
      ],
      mainImage: itcare2, // Default image
      activeIndex: 0, // Set the first item as active by default
    };
  },
  methods: {
    activateGlow(index, image) {
      this.activeIndex = index; // Set the clicked item's index as active
      this.mainImage = image; // Update the image based on the clicked item
    },
  },
};

</script>

<style scoped>
.glow-text {
  position: relative;
  text-decoration: none;
  color: #fff;
  display: inline-block;
}

.glow-text::before {
  content: attr(data-text); /* Mengambil data dari atribut `data-text` */
  position: absolute;
  top: 0;
  left: 0;
  color: var(--clr, #00bfff); /* Mengganti warna garis/glow menjadi biru muda */
  width: 0; /* Garis tidak terlihat */
  overflow: hidden;
  white-space: nowrap;
  border-right: none; /* Tidak ada garis sebelum hover */
  transition: width 1s ease, border-right 1s ease; /* Animasi munculnya garis */
}

.glow-text:hover::before {
  width: 100%; /* Garis memanjang sesuai panjang teks */
  border-right: 4px solid var(--clr, #00bfff); /* Mengganti warna garis saat hover menjadi biru muda */
  text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 30px #00bfff; /* Efek glow berwarna biru muda */
}

/* Remove the border when the text is clicked (active) */
.glow-text.active::before {
  width: 100%; /* Keeps the width, but no border-right to avoid line */
  border-right: none; /* No border when active */
  text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 30px #00bfff; /* Keep glow effect */
}

@keyframes glow-animation {
  0% {
    text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 30px #00bfff,
      0 0 40px #00bfff;
  }
  100% {
    text-shadow: 0 0 15px #00bfff, 0 0 30px #00bfff, 0 0 45px #00bfff,
      0 0 60px #00bfff;
  }
}
</style>
