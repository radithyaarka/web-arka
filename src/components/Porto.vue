<template>
  <div class="min-h-screen bg-none py-12 " data-aos="fade-up" id="Porto">
    <div class="text-center mb-12">
      <h1
        class="text-5xl md:text-6xl font-extrabold"
      >
        Portofolio
      </h1>
      <p
        class="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed"
      >
        Explore more variety of my innovative and creative designs
      </p>
    </div>

    <div
      class="grid grid-cols-2 gap-8 justify-center px-6 md:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="(portfolio, index) in portfolios"
        :key="index"
        class="relative bg-primary rounded-lg shadow-lg w-full overflow-hidden group"
      >
        <div class="image-container">
          <img
            :src="portfolio.image"
            class="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:blur-sm"
          />
        </div>

        <div
          class="see-more-button absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <a
            :href="portfolio.link"
            class="px-6 py-2 bg-primary rounded-lg hover:bg-opacity-80 transition"
            >See More</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itcare from "@/assets/itcare.png";
import itcare2 from "@/assets/itcare2.png";
import itw1 from "@/assets/itw.png";
import itw2 from "@/assets/itw2.png";
import itw3 from "@/assets/itw3.png";
import itw4 from "@/assets/itw4.png";
import itgc from "@/assets/itgc.png";
import celebrait from "@/assets/celebrait.png";

import "aos/dist/aos.css";

export default {
  name: "Porto",
  data() {
    return {
      portfolios: [
        {
          image: itw1,
          link: "https://www.instagram.com/p/C7l2x-DJu7V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          image: itw2,
          link: "https://www.instagram.com/p/C7EjZdcpDCB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          image: itcare2,
          link: "https://www.instagram.com/p/DCdvc1QpM2H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          image: itw3,
          link: "https://www.instagram.com/p/C8woFVWPVtc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          image: itcare,
          link: "https://www.instagram.com/p/DDUZoB7vXmf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          image: itgc,
          link: "https://www.instagram.com/p/DBJFS4CvDt_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          image: celebrait,
          link: "https://www.instagram.com/p/DBqthUjPAB_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          image: itw4,
          link: "https://www.instagram.com/p/DB3lEXIPQHE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-white {
  background-color: white;
}

.bg-primary {
  background-color: #000000;
}

.text-primary {
  color: #000000;
}

.relative {
  position: relative;
}

.image-container {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.group:hover .image-container img {
  filter: blur(5px);
}

.see-more-button {
  transition: opacity 0.3s ease;
}

.group:hover .see-more-button {
  opacity: 1;
}

a {
  padding: 10px 20px;
  background-color: #000000;
  border-radius: 5px;
  transition: background-color 0.3s;
  text-decoration: none;
  color: white;
}

a:hover {
  background-color: #ffcdd2;
  color: #000000;
}
</style>
