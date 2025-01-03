<template>
  <div class="container mx-auto py-10">
    <h1 class="text-center text-4xl font-bold mb-8 text-white">
      our journey so farr!
    </h1>
    <div class="relative flex justify-center">
      <!-- Timeline Section -->
      <div class="relative glass-card p-8">
        <!-- Timeline Line with glowing effect -->
        <div
          class="absolute left-1/5 top-0 w-1"
          style="
            background-color: #ffcdd2;
            height: 95%;
            box-shadow: 0 0 15px 5px #ffcdd2;
            margin-top: 10px;
          "
        ></div>

        <!-- Timeline Content -->
        <div class="w-full flex flex-col space-y-6">
          <div v-for="(item, index) in timelineData" :key="index" class="pl-8">
            <p
              class="text-lg text-white glow-text"
              :data-text="item.text"
              :class="{ active: activeIndex === index }"
              @click="activateGlow(index)"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>

      <!-- Image and Card Content with transition effects -->
      <transition name="fade" mode="out-in">
        <div
          :key="activeIndex"
          class="flex flex-col justify-center items-center ml-[220px] rounded-lg shadow-lg"
          style="
            width: 450px;
            height: 580px;
            overflow: hidden;
            box-shadow: 0 0 15px 5px #ffcdd2;
          "
        >
          <div class="image-container">
            <img
              :src="timelineData[activeIndex].image"
              alt="Main Timeline Image"
              class="timeline-image transition-all duration-1000"
            />
          </div>
          <div
            class="w-full h-auto bg-gray-800 text-white text-center flex items-center justify-center rounded-b-lg"
          >
            <p class="m-2">{{ timelineData[activeIndex].description }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import journey1 from "@/assets/secret/journey1.jpg";
import journey2 from "@/assets/secret/journey2.jpg";
import journey3 from "@/assets/secret/journey3.jpg";
import journey4 from "@/assets/secret/journey4.jpg";
import journey5 from "@/assets/secret/journey5.jpg";
import journey6 from "@/assets/secret/journey6.jpg";
import journey7 from "@/assets/secret/journey7.jpg";
import journey8 from "@/assets/secret/journey8.jpg";
import journey9 from "@/assets/secret/journey9.jpg";
import journey10 from "@/assets/secret/journey10.jpg";
import img1 from "@/assets/img2.png";

export default {
  name: "Journey",
  data() {
    return {
      timelineData: [
        {
          text: "17th March 2023",
          image: journey1,
          description: "first meet pas makrab! (gaada foto😔)",
        },
        {
          text: "8th May 2023",
          image: journey2,
          description: "first datee! (kinda)",
        },
        {
          text: "11th September 2023",
          image: journey3,
          description: "first photo together! WKWKWK",
        },
        {
          text: "18th December 2023",
          image: journey4,
          description: "last meeting smst3, dah mulai dekett",
        },
        {
          text: "21st February 2024",
          image: journey5,
          description: "taulah tanggal apa💕",
        },
        {
          text: "1st May 2024",
          image: journey6,
          description: "tunjungan date! (lewat doang)",
        },
        {
          text: "10th May 2024",
          image: journey7,
          description: "exploit together!",
        },
        {
          text: "29th June 2024",
          image: journey8,
          description: "gaminggg!🎮",
        },
        {
          text: "20th December 2024",
          image: journey9,
          description: "bus dateee!",
        },
        {
          text: "21st December 2024",
          image: journey10,
          description: "PHOTOBOX DATE FINALLYY!! (ini lucu bgt fotonya😍)",
        },
        {
          text: "??? 2025",
          image: img1,
          description: "2025 baru mulai bro, hope our journey continues!",
        },
      ],
      activeIndex: 0, // Set the first item as active by default
    };
  },
  methods: {
    activateGlow(index) {
      this.activeIndex = index; // Set the clicked item's index as active
    },
  },
};
</script>

<style scoped>
.timeline-image {
  width: 100%;
  height: 100%; /* Pastikan gambar mengisi seluruh kartu */
  object-fit: cover; /* Potong gambar jika terlalu besar untuk menjaga proporsi */
}

.image-container {
  width: 100%;
  height: 100%; /* Samakan tinggi dengan kartu */
  overflow: hidden; /* Potong bagian gambar yang keluar dari container */
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(255, 205, 210, 0.37);
  padding: 1rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 0;
}

.glow-text {
  position: relative;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  cursor: pointer;
}

.glow-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: var(--clr, #ffcdd2);
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  border-right: none;
  transition: width 1s ease, border-right 1s ease;
}

.glow-text:hover::before {
  width: 100%;
  border-right: 4px solid var(--clr, #ffcdd2);
}

.glow-text.active::before {
  width: 100%;
  border-right: none;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Start below */
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0); /* Element moves up */
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Element leaves upwards */
}
</style>
