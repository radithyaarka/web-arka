<template>
  <div class="mt-[30vh] mb-[10vh]">
    <h1 class="text-center text-4xl font-bold mb-8 text-white">
      songs that remind me of us hehe
    </h1>

    <!-- Lingkaran Indikator -->
    <div class="flex justify-center gap-3 mb-8">
      <svg
        v-for="(song, index) in songs"
        :key="index"
        class="circle-indicator"
        @click="setActiveSong(index)"
      >
        <circle
          cx="10"
          cy="10"
          r="8"
          :class="{
            'fill-white': currentIndex === index,
            'stroke-white': currentIndex !== index,
          }"
          stroke-width="2"
        />
      </svg>
    </div>

    <!-- Container untuk Spotify Cards -->
    <div
      class="spotify-card-container flex gap-6 overflow-x-auto snap-x snap-mandatory"
      ref="cardContainer"
    >
      <!-- Iterasi untuk setiap lagu -->
      <div
        v-for="(song, index) in songs"
        :key="index"
        class="spotify-card flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-none justify-center snap-start w-screen"
        :ref="`card${index}`"
        :data-index="index"
      >
        <!-- Bagian Spotify Track -->
        <div class="spotify-track flex-shrink-0 bg-none">
          <iframe
            :src="song.spotifyEmbedUrl"
            class="w-[352px] h-[500px] rounded-md"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <!-- Bagian Deskripsi dan Judul -->
        <div
          class="spotify-description flex-1 text-white text-sm bg-none max-w-2xl text-justify p-4"
        >
          <h2 class="font-bold text-xl mb-2">{{ song.title }}</h2>
          <p class="text-xs mb-4">{{ song.artist }}</p>
          <!-- Teks Artis -->
          <p class="leading-relaxed whitespace-pre-line">
            {{ song.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        {
          title: "Photograph",
          artist: "Ed Sheeran",
          spotifyEmbedUrl:
            "https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL?si=e499ffb9660e4176",
          description:
            "lagu ini menurutku cocok sihh hehe, soalnya dia tuh ngejelasin tentang the bittersweet feeling of holding on to memories through photographs. " +
            "trus photograph sendiri taulah, my daily life WKWKW (budak medfo). " +
            "kayak, nggak peduli seberapa jauh kita dari orang-orang yang kita sayang (in this context, u obviously👊), foto-foto itu tetap bisa ngebawa kita kembali ke momen-momen indah. " +
            "dan setiap kali denger lagu ini, aku ngerasa kayak punya koleksi kenangan yang nggak bisa hilang, meskipun waktu terus berlalu. " +
            "lagu ini juga personally one of my fav song sih. aku dulu pas sma pernah tampil di depan nyanyi lagu ini, sendirian, iya SENDIRIAN.😃",
        },
        {
          title: "DNA",
          artist: "LANY",
          spotifyEmbedUrl:
            "https://open.spotify.com/embed/track/2McTSCNNzxgDtAqiuibhPI?si=98bb720bd4c94078",
          description:
            "lagu ini tuh bener-bener ngegambarin tentang hubungan yang udah jadi bagian dari diri kita, kayak bener-bener nyatu di dalam dna (anjay🧬). " +
            "perasaan itu udah jadi sesuatu yang nggak bisa lepas, apapun yang terjadi, kita tetep ada satu sama lain, seolah-olah kita tuh ketemu buat saling melengkapi (anjay). " +
            "dan setiap kali denger lagu ini, aku ngerasa kayak lagu ini ngomongin tentang perjalanan kita yang penuh emosi, dengan segala suka dan dukanya. segala berantemnya, dan segala lovenya. " +
            "satu hal yang pasti, ikatan kita tuh kuat banget, bahkan ketika dunia berputar, itu nggak akan berubah (anjay slebew skibidi sigmaaa). rasanya kayak aku sama kamu tuh udah saling ada di dalam dna kita masing-masing. (anjay arka w rizz)",
        },
        {
          title: "Kids Are Born Stars",
          artist: "Lauv",
          spotifyEmbedUrl:
            "https://open.spotify.com/embed/track/2pD74s7WAlBWUXjrTsKgdS?si",
          description:
            "lagu ini agak beda yak sama sebelumnya, bukan lagu bucin wkwkw. tapi tetep, lagu ini ngingetin aku sama kita berdua, tentang gimana kita saling jadi bintang dalam hidup masing-masing. meskipun dunia kadang bisa bikin " +
            "kita ragu atau merasa kecil, hubungan kita ngebuktiin bahwa kita semua punya cahaya yang bisa saling menyinari (anjayy). kayak judul lagunya, kita udah lahir " +
            "dengan potensi untuk jadi luar biasa, born to be a star✨. dan saat kita bareng, aku ngerasa kayak kita bisa capai hal-hal besar bareng, seakan nggak ada " +
            "yang bisa ngalahin kita. contohnya ya kayak kalo nugas bareng, kita saling ngebantu satu sama lain. aku lagi buntu kamu bantu, dan sebaliknya juga, kamu lagi buntu aku pun juga bantu. " +
            "lagu ini buat aku personally nggak cuma tentang percaya diri, tapi juga tentang gimana kita saling dukung dan " +
            "bantu satu sama lain jadi versi terbaik dari diri kita sendiri. i'm glad ur here for me for the last 3 semester, love u.",
        },
        {
          title: "Time of Our Life",
          artist: "Day6",
          spotifyEmbedUrl:
            "https://open.spotify.com/embed/track/0btLaqWlXsOWLcpjE1jmIk?si=522bce5b768f4cee",
          description:
            "there will be no arka without day6 kan. tenang ga semua lagu day6 galau kokk, yang ini ga galau rill. " +
            "lagu ini ngomongin tentang momen-momen spesial yang nggak akan pernah terlupakan. " +
            "like, kita sama-sama berjuang dan ngelaluin hal-hal besar, dan akhirnya kita merasa 'this is the time of our life.' " +
            "setiap kenangan yang kita buat bareng itu pasti jadi bagian dari cerita hidup yang nggak akan hilang, even though gatau kedepannya kita masi bareng or engga wkwk. " +
            "'this is our page, and we're the ones to write it.' ini perjalanan kita alma, make it beautiful while it last yakk wkwk. " +
            "setiap kali denger lagu ini, aku ngerasa kayak ini tuh simbol dari perjalanan kita yang penuh warna, tawa, dan emosi. " +
            "and because of that, lagu ini remind me of us, our story, the 'time of our life.'💫",
        },
        {
          title: "Blue",
          artist: "Keshi",
          spotifyEmbedUrl:
            "https://open.spotify.com/embed/track/4xykztf81jMOsVpC7grR4H?si=ea3fe8c3fe524315",
          description:
            "personally, one of my fav songs. my go-to song kalo lagi galau wkwkw. lagu ini bener-bener ngebahas tentang perasaan kehilangan yang mendalam. 'blue' itu simbol dari suasana hati yang sedih, " +
            "kayak ada yang kosong setelah hubungan berakhir. kita nyimpen semua kenangan indah bareng, tapi di sisi lain, ada perasaan sakit " +
            "yang datang setelahnya. kenapa lagu ini masuk ke 'songs that remind me of us'? padahal kan lagunya galau? " +
            "karena menurutku, lagu ini perfectly captures the bittersweetness of a relationship, betapa berharganya hubungan itu, " +
            "tapi juga betapa sakitnya saat itu berakhir, meninggalkan hanya kenangan. jadi lagu ini ngingetin aku kalau lagi marah atau kesal, bahwa love can be both beautiful and heartbreaking " +
            "at the same time, dan betapa sulitnya melepaskan sesuatu yang sudah pergi. jadi karena lagu ini bener-bener nangkep perasaan sedih setelah breakup, " +
            "makanya tetep jaga perasaan satu sama lain, jangan ngelakuin hal-hal that each other don't like. karena hubungan yang kita bangun itu terlalu berharga untuk dilepas begitu saja.",
        },
      ],
      currentIndex: 0, // Indeks kartu aktif
    };
  },
  mounted() {
    this.createIntersectionObserver();
  },
  methods: {
    createIntersectionObserver() {
      const container = this.$refs.cardContainer;
      if (!container) return;

      // Fungsi untuk menghitung currentIndex berdasarkan scroll position
      const updateCurrentIndex = () => {
        const containerWidth = container.offsetWidth;
        const scrollPosition = container.scrollLeft;

        // Mencari kartu yang paling dekat dengan posisi scroll
        let closestIndex = Math.round(scrollPosition / containerWidth);
        // Jika scroll lebih dari setengah panjang kartu, aktifkan kartu berikutnya
        this.currentIndex = closestIndex;
      };

      // Memperbarui index saat container di-scroll
      container.addEventListener("scroll", updateCurrentIndex);
    },

    setActiveSong(index) {
      // Mengubah currentIndex saat lingkaran diklik
      this.$nextTick(() => {
        const container = this.$refs.cardContainer; // Ambil referensi container
        const card = this.$refs[`card${index}`][0]; // Ambil kartu berdasarkan index

        if (container && card) {
          // Menghitung posisi horizontal kartu dalam container
          const cardOffset = card.offsetLeft;

          // Lakukan scroll horizontal pada container
          container.scrollTo({
            left: cardOffset,
            behavior: "smooth",
          });

          // Menunggu beberapa waktu setelah scroll untuk memastikan kartu terlihat
          setTimeout(() => {
            // Setelah scroll selesai, perbarui currentIndex
            this.currentIndex = index;
          }, 600); // Menunggu 600ms agar scroll selesai
        }
      });
    },
  },
};
</script>

<style scoped>
.spotify-card-container {
  scroll-snap-type: x mandatory;
  overflow-x: auto; /* Menambahkan scroll secara horizontal */
  display: flex;
  gap: 6px;
}

.spotify-card {
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 100vw; /* Setiap kartu mengisi lebar layar penuh */
  height: 50%; /* Setiap kartu mengisi tinggi layar penuh */
}

/* Menyembunyikan scrollbar */
.spotify-card-container::-webkit-scrollbar {
  display: none;
}

/* Styling untuk lingkaran indikator */
.circle-indicator {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.circle-indicator circle {
  transition: all 0.3s ease; /* Smooth transition saat mengganti status */
}

/* Styling untuk stroke dan fill */
.circle-indicator .stroke-white {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
}

.circle-indicator .fill-white {
  fill: #ffffff;
  stroke: none;
}
</style>
