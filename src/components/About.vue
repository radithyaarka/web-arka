<template>
  <div
    class="flex justify-center items-center min-h-screen bg-primary relative"
  >
    <!-- Background Stars -->
    <img
      src="@/assets/star.svg"
      alt="Star 1"
      class="absolute w-12 h-12 top-10 left-20 opacity-70 animate-spin-slow-reverse hover:animate-spin-fast filter-gold glow-effect"
      @click="openModal"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 2"
      class="absolute w-16 h-16 bottom-20 right-16 opacity-70 animate-spin-slow-reverse hover:animate-spin-fast filter-gold glow-effect"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 3"
      class="absolute w-8 h-8 top-1/3 left-1/2 opacity-70 animate-spin-slow hover:animate-spin-fast filter-gold glow-effect"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 4"
      class="absolute w-6 h-6 top-1/4 right-1/4 opacity-70 animate-spin-slow hover:animate-spin-fast filter-gold glow-effect"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 5"
      class="absolute w-6 h-6 bottom-1/3 left-1/3 opacity-70 animate-spin-slow-reverse hover:animate-spin-fast filter-gold glow-effect"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 6"
      class="absolute w-12 h-12 top-5 right-10 opacity-70 animate-spin-slow hover:animate-spin-fast filter-gold glow-effect"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 7"
      class="absolute w-8 h-8 bottom-5 left-5 opacity-70 animate-spin-slow hover:animate-spin-fast filter-gold glow-effect"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 8"
      class="absolute w-14 h-14 top-10 right-1/3 opacity-70 animate-spin-slow-reverse hover:animate-spin-fast filter-gold glow-effect"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 9"
      class="absolute w-10 h-10 bottom-10 left-1/4 opacity-70 animate-spin-slow hover:animate-spin-fast filter-gold glow-effect"
    />
    <img
      src="@/assets/star.svg"
      alt="Star 10"
      class="absolute w-7 h-7 bottom-1/2 left-9 opacity-70 animate-spin-slow hover:animate-spin-fast filter-gold glow-effect"
    />

    <div
      class="bg-white text-primary rounded-lg shadow-lg p-8 w-4/5 sm:w-2/3 md:w-1/2 lg:w-2/5 card z-10"
      data-aos="fade-up"
    >
      <div class="flex justify-center mb-6">
        <img
          src="@/assets/img2.png"
          alt="About Us"
          class="w-32 h-32 rounded-full object-cover shadow-md"
        />
      </div>
      <h2 class="text-3xl font-bold mb-4 text-center">About</h2>
      <p class="text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat
        ornare viverra. Cras vitae posuere elit. In lacus nibh, commodo ac
        mauris eget, posuere elementum sapien. Cras rutrum efficitur turpis, nec
        molestie nunc hendrerit eget. Sed justo urna, iaculis ac rutrum vel,
        venenatis at nulla. Quisque at velit enim. Nullam faucibus molestie
        scelerisque. Maecenas at quam mi. Integer at justo eu lacus convallis
        finibus sit amet ut lacus. In finibus mauris sed risus cursus mollis.
        Donec elit felis, dictum quis.
      </p>
      <div class="flex justify-center">
        <button
          class="text-white py-2 px-4 rounded-lg shadow-md"
          @click.stop="flipCard"
        >
          Learn More
        </button>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
    >
      <div
        class="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 z-30"
      >
        <h2 class="text-2xl font-bold mb-4">Secret Key</h2>
        <input
          v-model="secretInput"
          type="text"
          placeholder="Enter your secret key"
          class="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div class="flex justify-end">
          <button
            class="bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-opacity-80"
            @click="validateSecretKey"
          >
            Submit
          </button>
          <button
            class="ml-4 bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-opacity-80"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "AboutUs",
  data() {
    return {
      isModalOpen: false, // Modal visibility
      secretInput: "", // Input value
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
    }); // Initialize AOS when the component is mounted
  },
  methods: {
    openModal() {
      this.isModalOpen = true; // Open the modal
    },
    closeModal() {
      this.isModalOpen = false; // Close the modal
    },
    validateSecretKey() {
      if (this.secretInput === "bijoulucu") {
        localStorage.setItem("authenticated", true); // Store authentication flag
        this.$router.push("/secret").then(() => {
          // Ensure the page scrolls to the top after redirect
          window.scrollTo(0, 0);
        });
      } else {
        alert("Incorrect Secret Key!");
      }
    },
  },
};
</script>

<style scoped>
.bg-primary {
  background-color: #000000; /* Same as HeroSection background */
}

.text-primary {
  color: #000000; /* Same primary text color */
}

/* Removed the flip effect and related CSS */

/* Filter for gold color and light effect */
.filter-gold {
  filter: sepia(1) saturate(10) hue-rotate(20deg) brightness(1.2)
    drop-shadow(0 0 8px rgba(255, 223, 0, 0.8))
    drop-shadow(0 0 16px rgba(255, 223, 0, 0.6));
  animation: glow-pulse 2s infinite;
}

/* Animation for glow effect */
@keyframes glow-pulse {
  0%,
  100% {
    filter: sepia(1) saturate(10) hue-rotate(20deg) brightness(1.2)
      drop-shadow(0 0 8px rgba(255, 223, 0, 0.8))
      drop-shadow(0 0 16px rgba(255, 223, 0, 0.6));
  }
  50% {
    filter: sepia(1) saturate(10) hue-rotate(20deg) brightness(1.2)
      drop-shadow(0 0 12px rgba(255, 223, 0, 1))
      drop-shadow(0 0 24px rgba(255, 223, 0, 0.9));
  }
}

button {
  transition: background-color 0.3s ease-in-out;
  background-color: #000000;
}

button:hover {
  background-color: #7d12ff; /* Darker shade of red on hover */
}

button.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Animation for rotating stars */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-slow-reverse {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes spin-fast {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin-slow-reverse 20s linear infinite;
}

.hover\:animate-spin-fast:hover {
  animation: spin-fast 2s linear infinite;
}
</style>
