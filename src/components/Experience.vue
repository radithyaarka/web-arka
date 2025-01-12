<template>
  <div class="mb-[10vh]" data-aos="fade-up">
    <h1 class="text-5xl md:text-6xl font-extrabold text-center mb-8">
      My Experience
    </h1>

    <!-- Lingkaran Indikator -->
    <div class="flex justify-center gap-3 mb-8">
      <svg
        v-for="(experience, index) in experiences"
        :key="index"
        class="circle-indicator"
        @click="setActiveExperience(index)"
      >
        <circle
          cx="10"
          cy="10"
          r="8"
          :class="{
            'fill-[#a499e2]': currentIndex === index,
            'stroke-black': currentIndex !== index,
          }"
          stroke-width="2"
        />
      </svg>
    </div>

    <!-- Container untuk Experience Cards -->
    <div
      class="experience-card-container flex gap-6 overflow-x-auto snap-x snap-mandatory"
      ref="cardContainer"
    >
      <!-- Iterasi untuk setiap pengalaman -->
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="experience-card flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-none justify-center snap-start w-screen"
        :ref="`card${index}`"
        :data-index="index"
      >
        <!-- Bagian Image Experience -->
        <div class="experience-image flex-shrink-0 bg-none">
          <img
            :src="experience.imageUrl"
            alt="experience-image"
            class="w-[400px] h-[470px] rounded-md object-cover cursor-pointer"
            @click="openModal(index)"
          />
        </div>

        <!-- Bagian Deskripsi dan Judul -->
        <div
          class="experience-description flex-1 text-black text-sm bg-none max-w-2xl text-justify p-4"
        >
          <h2 class="font-bold text-xl mb-2">{{ experience.title }}</h2>
          <p class="text-xs mb-4">{{ experience.date }}</p>
          <p class="leading-relaxed whitespace-pre-line">
            {{ experience.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal untuk Foto -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="relative bg-white rounded-lg shadow-lg py-6 px-8">
      <button
        @click="closeModal"
        class="absolute top-1 right-2 text-black font-bold text-xl hover:text-red-500"
      >
        X
      </button>
      <img
        :src="currentImage"
        alt="modal-image"
        class="w-full h-auto max-h-[60vh] object-contain rounded-md"
      />
      <div class="flex justify-between mt-4">
        <button
          class="bg-white border-none px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 transform hover:text-[#ffcdd2] focus:outline-none active:scale-95 disabled:text-gray-400 disabled:cursor-default"
          @click="prevImage"
          :disabled="currentImageIndex === 0"
        >
          Previous
        </button>
        <button
          class="bg-white border-none px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 transform hover:text-[#ffcdd2] focus:outline-none active:scale-95 disabled:text-gray-400 disabled:cursor-default"
          @click="nextImage"
          :disabled="currentImageIndex === currentImageArray.length - 1"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import e1 from "@/assets/e1.jpg";
import e1_1 from "@/assets/e1_1.png";
import e1_2 from "@/assets/e1_2.png";
import e2 from "@/assets/e2.jpg";
import e2_1 from "@/assets/e2_1.jpg";
import e2_2 from "@/assets/e2_2.png";
import e2_3 from "@/assets/e2_3.jpg";
import e2_4 from "@/assets/e2_4.jpg";
import e3 from "@/assets/e3.jpg";
import e3_1 from "@/assets/itw.jpg";
import e3_2 from "@/assets/itw3.jpg";
import e3_3 from "@/assets/itw4.jpg";
import e4 from "@/assets/e4.jpg";
import e4_1 from "@/assets/e4_1.png";
import e4_2 from "@/assets/e4_2.png";
import e4_3 from "@/assets/e4_3.png";
import e4_5 from "@/assets/e4_5.jpg";
import e5 from "@/assets/e5.jpg";
import e5_1 from "@/assets/e5_1.jpg";
import e5_2 from "@/assets/e5_2.jpg";
import e5_3 from "@/assets/e5_3.jpg";
import e5_4 from "@/assets/e5_4.jpg";

export default {
  data() {
    return {
      experiences: [
        {
          title: "Excelsior Website Team - UI/UX",
          date: "March 2023",
          imageUrl: e1,
          description:
            "Joining the Excelsior Website Team as a UI/UX designer was an incredible opportunity that expanded my skills and understanding of user-centric design. " +
            "This project was particularly significant as it was the first web project I had ever undertaken, marking a milestone in my journey as a designer." +
            "I worked closely with a dynamic team to conceptualize, prototype, and implement intuitive interfaces. " +
            "The process involved conducting user research, creating wireframes, and refining designs based on user feedback. " +
            "Through this experience, I gained invaluable knowledge about usability testing and the importance of aligning design choices with user needs and business goals.",
        },
        {
          title: "ARA 5.0 - Staff of Design and Documentation",
          date: "October 2023 - May 2024",
          imageUrl: e2,
          description:
            "As a member of the Design and Documentation team at ARA 5.0, I played a critical role in crafting the visual identity of the event. " +
            "This involved creating promotional materials, designing event guides, and documenting key moments to preserve memories. " +
            "Working under tight deadlines, I developed my ability to manage multiple projects simultaneously and collaborate effectively with other departments. " +
            "The experience taught me the importance of creativity, consistency, and attention to detail in delivering impactful visual storytelling.",
        },
        {
          title: "HMIT - Staff of Media Information",
          date: "February 2024 - Now",
          imageUrl: e3,
          description:
            "Being a part of the Media Information team at HMIT has been a rewarding journey where I’ve contributed to the creation of engaging and informative content. " +
            "My responsibilities include designing eye-catching visuals for social media, writing compelling captions, and strategizing ways to boost audience engagement. " +
            "This role has sharpened my skills in digital content creation, branding, and analytics. " +
            "I’ve also had the opportunity to work with a supportive team that encourages innovation and fosters growth, making the experience both fulfilling and educational.",
        },
        {
          title: "HMIT Website Team - UI/UX",
          date: "June 2024 - August 2024",
          imageUrl: e4,
          description:
            "As a UI/UX designer for the HMIT Website Team, I was tasked with enhancing the user experience of the organization’s website. " +
            "My role involved analyzing user feedback, identifying pain points, and implementing design improvements to make navigation more seamless and intuitive. " +
            "Additionally, I collaborated with developers to ensure that the designs were translated effectively into functional interfaces. " +
            "This experience not only deepened my technical skills but also taught me the value of iterative design and the importance of cross-functional teamwork.",
        },
        {
          title: "OKKBK IT 2024 - Head of Design and Documentation",
          date: "August 2024",
          imageUrl: e5,
          description:
            "Leading the Design and Documentation team for OKKBK IT 2024 was a defining moment in my journey as a creative leader. " +
            "OKKBK, as the orientation program for new students, required visuals that not only captured the spirit of the event but also conveyed a welcoming and inspiring message. " +
            "I managed a team of talented individuals to conceptualize and produce high-quality materials, from designing orientation guides and promotional content to documenting key moments that highlighted the event's success. " +
            "By brainstorming creative concepts and overseeing every stage of execution, I ensured that the visuals reflected the enthusiasm and energy of the program. " +
            "This role significantly enhanced my leadership and project management skills while providing a platform to inspire and empower others in delivering impactful visual narratives.",
        },
      ],
      currentIndex: 0, // Indeks kartu aktif
      isModalOpen: false,
      currentImageIndex: 0,
      currentImageArray: [],
    };
  },
  computed: {
    currentImage() {
      return this.currentImageArray[this.currentImageIndex];
    },
  },
  mounted() {
    this.createIntersectionObserver();
    // Disable scrolling when modal is open
    if (this.isModalOpen) {
      document.body.style.overflow = "hidden";
    }
  },
  methods: {
    openModal(index) {
      this.currentImageIndex = 0; // Set ke gambar pertama dari array
      if (this.experiences[index].imageUrl === e2) {
        this.currentImageArray = [e2_1, e2_2, e2_3, e2_4];
      } else if (this.experiences[index].imageUrl === e3) {
        this.currentImageArray = [e3_1, e3_2, e3_3];
      } else if (this.experiences[index].imageUrl === e1) {
        this.currentImageArray = [e1, e1_1, e1_2];
      } else if (this.experiences[index].imageUrl === e4) {
        this.currentImageArray = [e4_5, e4_1, e4_2, e4_3];
      } else if (this.experiences[index].imageUrl === e5) {
        this.currentImageArray = [e5_4, e5_1, e5_2, e5_3];
      } else {
        this.currentImageArray = [this.experiences[index].imageUrl];
      }
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.currentImageArray.length - 1;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.currentImageArray.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0;
      }
    },
    createIntersectionObserver() {
      const container = this.$refs.cardContainer;
      if (!container) return;

      const updateCurrentIndex = () => {
        const containerWidth = container.offsetWidth;
        const scrollPosition = container.scrollLeft;

        let closestIndex = Math.round(scrollPosition / containerWidth);
        this.currentIndex = closestIndex;
      };

      container.addEventListener("scroll", updateCurrentIndex);
    },

    setActiveExperience(index) {
      this.$nextTick(() => {
        const container = this.$refs.cardContainer;
        const card = this.$refs[`card${index}`][0];

        if (container && card) {
          const cardOffset = card.offsetLeft;

          container.scrollTo({
            left: cardOffset,
            behavior: "smooth",
          });

          setTimeout(() => {
            this.currentIndex = index;
          }, 600);
        }
      });
    },
  },
};
</script>

<style scoped>
.experience-card-container {
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
}

.experience-card {
  scroll-snap-align: start;
  flex: 0 0 auto;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-image:hover {
  transform: scale(1.01); 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); 
}

.experience-image {
  transition: transform 0.3s ease; 
}

.experience-card-container::-webkit-scrollbar {
  display: none;
}

.circle-indicator {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.circle-indicator circle {
  transition: all 0.3s ease;
}
.modal {
  max-height: 20vh;
  overflow-y: auto;
}

.modal img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.modal .content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
