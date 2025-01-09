<template>
  <div class="flex justify-center items-center min-h-screen mt-[100px] bg-none">
    <!-- Card yang tertutup -->
    <div
      v-if="isCardOpen"
      class="glass-card bg-none flex rounded-lg shadow-lg w-4/5"
    >
      <!-- Gambar -->
      <div class="flex-shrink-0 bg-gray-300 w-64 h-72 rounded-lg flex">
        <img
          src="@/assets/arka.png"
          alt="Image of Arka"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>

      <!-- Konten Teks -->
      <div class="ml-6">
        <h2 class="text-white text-xl font-bold mb-4 text-left">
          a message from arka
        </h2>
        <p class="text-white text-sm leading-relaxed text-justify">
          hai almaa, gimana webnya? bagus gaa? wkwk. btw lucu tau kalo diinget
          inget, awalnya kita kenal ga sengaja lewat makrab, sama sekali ga
          nyangka bakal jadi apa-apa. tapii, lama lama mulai sering chattan
          sampe malem, ga kerasa malah ngobrolin banyak something random. terus,
          kuajak mabar ml, yang ujungnya malah telponan sampe pagi padahal
          mabarnya cuma sekali dua kali. emang ya, kadang ngobrol tu lebih asik
          daripada main game WKWKWK. truss, kita jalan pertama kali, nonton
          bareng, dan dari situ mulai deh makin sering telponan, saling cerita,
          kadang gaada topik, tapi tetep seru seru ajaa. trus kita sempet jauh
          gara-gara liburan semester 3 kemaren, yang bikin rasanya kek
          kehilangan bond yang udah terbentuk. like, udah sedeket itu tapi malah
          jadi jauh lagi, sedih bet. tapi, after a while setelah masuk, kita
          deket lagi. deket banget to the point aku kek tipis-tipis confess di
          telpon WKWKWKW. muter muter sejaman anjay sampe kamu greget. and then,
          akhirnya kita hts, disitu aku kek seneng banget, finally ada some kind
          of relationship sama kamu wkwkw, ada something special going on lah
          intinya. eh tapi then malah berantem mulu pas liburan. tapi pas
          liburan itu i feel like malah kita makin deket. mendingan berantem
          trus baikan and then bucin dibanding liburan cuma diem dieman in my
          opinion wkwkw. soalnya kek gitu bikin makin deket dan mau gamau pasti
          kita bakal chattan, bakal maaf maafan, dan ujung ujungnya bakal bucin
          dan sayang sayangan lagi hehehe, aku mau di sayangg🥺. and thenn masuk
          semester 4 kita jadian (yay). lucunya, kita malah jadian pas tengah
          malem, malem pas pertama kali ketemu after liburan. lucu sih, kek
          nggak ada waktu lain apa (arka tolol😔). setelah jadian, hampir tiap
          hari kita jalan bareng, ngobrol, ketawa, kadang malah cuma duduk diem
          bareng. Kita mulai kirim pap-pap, even tho sekarang sih udah jarang
          (hehe, abisni mau pap yang banyak 👉👈). trus, sempet juga video call
          yang seneng-senang, ngobrol ngobrol random sambil liatin kamu. seru
          tau ngobrol sambil liatin someone that pretty HEHEHE. tapi after that
          malah gapernah lagi (sedihhhhhhh😔). then lama lama kita sering
          berantem, then abis berantem bucin lagi, kadang kayak ga jelas.
          rasanya ngulang ngulang mulu, berantem berantem, bucin bucin terus
          terusan.
        </p>
        <br />
        <p class="text-white text-sm leading-relaxed text-justify">
          nah, meskipun ada momen diem-dieman, aku tetap senang bisa punya kamu
          di hidup aku (anjayy w rizz😎). happy anniversary yakk! semoga kita
          terus bisa jadi lebih baik bareng bareng, bisa lebih ngertiin satu
          sama lain lagi, bisa lebih merhatiin satu sama lain lagi, dan tentunya
          bisa lebih sayang satu sama lain lagi hehehe. every moment that we've
          experience bakal jadi unforgettable memories in the future, and i'm
          sure, our story masih panjang. kalo ibarat buku, this is just the
          prologue + chapter 1 WKWKWK. kita udah ngelewatin banyak hal: ketawa
          bareng, sedih bareng, sampe berantem juga bareng, tapi itu semua made
          our relationship stronger. i'm lucky i have u as my girlfriend, karena
          kamu ga cuma pacar, tapi juga sahabat terbaik aku, temen cerita aku,
          temen nugas aku juga, rill beneran my everything WKWKW. semoga every
          step that we take in the future, bisa makin deketin kita, dan buat
          kita makin saling memahami dan mendukung satu sama lain. keep growing
          together, and keep being happy with each other. hehehe love u alma!💕
        </p>
      </div>
    </div>

    <!-- Form untuk membuka card -->
    <div v-else class="flex justify-center items-center w-full">
      <div class="flex space-x-4 w-1/2">
        <input
          type="text"
          v-model="inputValue"
          class="bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-blue-400 placeholder-white text-lg w-full p-3 rounded-md"
          placeholder="isi form dulu bro kalo mau lanjut"
          @keyup.enter="checkInput"
        />
        <button
          @click="checkInput"
          class="bg-[#ffcdd2] text-black p-3 rounded-md hover:bg-[#c49297] transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      isCardOpen: false,
      inputValue: "",
    };
  },
  methods: {
    checkInput() {
      if (this.inputValue === "arka jago valo") {
        this.isCardOpen = true;
      } else {
        alert("sok tau jir passwordnya");
      }
    },
  },
};
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(255, 205, 210, 0.37);
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 0;
}
</style>
