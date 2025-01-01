<template>
  <div
    class="w-full overflow-hidden max-[500px]:flex max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center max-[500px]:mx-0"
  >
    <div class="wrapper-bijou flex flex-col justify-center items-center">
      <div
        class="bijou-item fade-left"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <img src="@/assets/itw.png" alt="Event 1" class="bijou-image" />
        <div class="bijou-content">
          <p class="date">Date: May 2023</p>
          <p class="event">Disurprise ulang tahuun best birthday everr</p>
        </div>
      </div>

      <div
        class="bijou-item fade-right"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <img src="@/assets/itw.png" alt="Event 1" class="bijou-image" />
        <div class="bijou-content">
          <p class="date">Date: Forever</p>
          <p class="event">All the foods we eat</p>
        </div>
      </div>

      <div
        class="bijou-item fade-left"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <img src="@/assets/itw.png" alt="Event 1" class="bijou-image" />
        <div class="bijou-content">
          <p class="date">Date: 24 Maret 2024</p>
          <p class="event">Happy Birthday to this Gorgeous Girl</p>
        </div>
      </div>

      <div
        class="bijou-item fade-right"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <img src="@/assets/itw.png" alt="Event 1" class="bijou-image" />
        <div class="bijou-content">
          <p class="date">Date: 20 Juni 2023</p>
          <p class="event">Main ke Malang with Da Friends</p>
        </div>
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
      easing: "ease-in-out",
      once: true,
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

/* Apply slight horizontal translation for fade-left and fade-right */
.fade-left {
  transform: translateX(-10px); /* Move a little to the left */
}

.fade-right {
  transform: translateX(10px); /* Move a little to the right */
}
</style>
