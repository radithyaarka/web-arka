<template>
  <div class="wrapper-bijou flex flex-col justify-center items-center">
    <!-- Title Section -->
    <h2 class="title text-center text-white mb-8 text-xl font-semibold">
      sebelum lanjut, let's see all of this biboo pic first hehe
    </h2>

    <!-- Bijou Items -->
    <div class="bijou-item fade-left" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
      <img src="@/assets/secret/bijou1.jpg" alt="Event 1" class="bijou-image" />
      <div class="bijou-content">
        <p class="event">ini bijouuu</p>
      </div>
    </div>

    <div class="bijou-item fade-right" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
      <img src="@/assets/secret/bijou2.jpg" alt="Event 1" class="bijou-image" />
      <div class="bijou-content">
        <p class="event">kalo yang ini biboooo</p>
      </div>
    </div>

    <div class="bijou-item fade-left" data-aos="fade-left" data-aos-anchor-placement="top-bottom">
      <img src="@/assets/secret/bijou3.jpg" alt="Event 1" class="bijou-image" />
      <div class="bijou-content">
        <p class="event">kalo ini koseki bejo</p>
      </div>
    </div>

    <div class="bijou-item fade-right" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
      <img src="@/assets/secret/bijou4.jpg" alt="Event 1" class="bijou-image" />
      <div class="bijou-content">
        <p class="event">ini batu</p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "bijou",
  mounted() {
    AOS.init({
      duration: 4000,
      offset: 120,
      easing: "ease-in-out",
      once: false, 
      mirror: true,
    });
  },
};
</script>

<style scoped>
.wrapper-bijou {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Add spacing between the cards */
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.bijou-item {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(27, 26, 26, 0.1);
  padding: 15px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
}

.bijou-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.bijou-content {
  font-size: 14px;
}

.fade-left {
  transform: translateX(-400px);
}

.fade-right {
  transform: translateX(400px);
}
</style>
