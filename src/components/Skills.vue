<template>
    <!-- Sub Service -->
    <section class="service py-[100px] px-[18%] text-light" id="myskill">
      <div class="heading text-center mb-2">
        <h1 class="text-5xl md:text-6xl font-extrabold">My Skills</h1>
      </div>
    </section>
  
    <div class="service-carousel flex justify-center w-full mx-auto relative overflow-hidden rounded-lg pb-6">
      <div class="service-container flex flex-wrap gap-6 px-8 py-4 items-center justify-center">
        <div
          class="glass-card box flex flex-col items-center text-center p-4 rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg opacity-0 transform translate-y-5 scale-95 snap-center animate-box w-full md:w-5/12"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <div class="box-img w-20 h-20 mb-4 rounded-full bg-bg p-3 shadow-md">
            <img :src="skill.imgSrc" :alt="skill.altText" class="w-full h-full object-contain" loading="lazy" />
          </div>
          <h3 class="text-dark text-xl mb-3">{{ skill.title }}</h3>
          <p class="text-light text-xs">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Skills",
    data() {
      return {
        skills: [
          {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/888/888879.png", // Photoshop logo
            altText: "Photoshop",
            title: "Photoshop",
            description:
              "I possess basic editing skills in Photoshop, which is my default editing software.",
          },
          {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/888/888869.png", // Adobe Illustrator logo
            altText: "Adobe Illustrator",
            title: "Adobe Illustrator",
            description: "I possess basic editing skills in Adobe Illustrator.",
          },
          {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/888/888861.png", // Lightroom logo
            altText: "Lightroom",
            title: "Lightroom",
            description: "I possess basic editing skills in Lightroom.",
          },
          {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/888/888885.png", // Canva logo
            altText: "Canva",
            title: "Canva",
            description: "Canva is another editing app that I master.",
          },
          {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/888/888876.png", // VS Code logo
            altText: "vscode",
            title: "Visual Studio Code",
            description:
              "I frequently use Visual Studio Code as my main development editor.",
          },
          {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/888/888874.png", // HTML logo
            altText: "HTML",
            title: "HTML",
            description:
              "Highly skilled in HTML for creating clean, semantic web structures.",
          },
          {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/888/888874.png", // CSS logo
            altText: "CSS",
            title: "CSS",
            description:
              "Proficient in CSS, crafting responsive designs and complex layouts with precision.",
          },
          {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/888/888887.png", // Vue.js logo
            altText: "Vue.js",
            title: "Vue.js",
            description:
              "Vue.js is a framework for website development that I master.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
  }
  
  .glass-card:hover {
    transform: scale(1.05) rotate(5deg); /* Scales up and rotates */
    box-shadow: 0 15px 30px rgba(31, 38, 135, 0.4); /* Stronger glowing effect */
    filter: brightness(1.1); /* Increases brightness to make the card pop */
  }
  
  /* Optional: If you want the text to stand out more on hover */
  .glass-card:hover h3 {
    color: purple; /* Change the text color on hover */
  }
  
  /* Animasi untuk kotak skill saat muncul */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px); /* Slight translation */
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-box {
    animation: fadeInUp 0.8s ease-out forwards; /* Reduce duration */
  }
  </style>
  