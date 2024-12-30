<template>
  <div class="container mx-auto py-10">
    <h1 class="text-center text-4xl font-bold mb-8 text-white">
      Journey Timeline
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
            width: 300px;
            height: 450px;
            overflow: hidden;
            box-shadow: 0 0 15px 5px #ffcdd2;
          "
        >
          <img
            :src="timelineData[activeIndex].image"
            alt="Main Timeline Image"
            class="w-full h-full object-cover rounded-t-lg transition-all duration-1000"
          />
          <div
            class="w-full h-10 bg-gray-800 text-white text-center flex items-center justify-center rounded-b-lg"
          >
            <p>{{ timelineData[activeIndex].description }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/img1.jpeg";
import itcare2 from "@/assets/itcare2.png";
import idcard from "@/assets/idcard.jpg";

export default {
  name: "Journey",
  data() {
    return {
      timelineData: [
        {
          text: "20th May 2023",
          image: itcare2,
          description: "jalan yay",
        },
        {
          text: "Text 2",
          image: img1,
          description: "This is the second timeline description.",
        },
        {
          text: "Text 3",
          image: idcard,
          description: "This is the third timeline description.",
        },
        {
          text: "Text 4",
          image: "https://via.placeholder.com/300x400?text=Image+4",
          description: "This is the fourth timeline description.",
        },
        {
          text: "Text 5",
          image: "https://via.placeholder.com/300x400?text=Image+5",
          description: "This is the fifth timeline description.",
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
.glass-card {
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent color */
  backdrop-filter: blur(10px); /* Blur effect on the background */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Transparent border */
  border-radius: 16px; /* Rounded corners */
  box-shadow: 0 8px 32px rgba(255, 205, 210, 0.37);
  padding: 1rem; /* Padding inside the card */
  transition: all 0.3s ease-in-out;
  position: relative; /* Set relative position */
  z-index: 0; /* Ensure the background is behind the content */
}

/* Keep other styles for the text as is */
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
  text-shadow: 0 0 10px #ffcdd2, 0 0 20px #ffcdd2, 0 0 30px #ffcdd2;
}

.glow-text.active::before {
  width: 100%;
  border-right: none;
  text-shadow: 0 0 10px #ffcdd2, 0 0 20px #ffcdd2, 0 0 30px #ffcdd2;
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
