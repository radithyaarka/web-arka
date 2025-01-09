<template>
  <div
    class="mt-[300px] bg-none min-h-screen flex items-center justify-center"
  >
    <div
      class="w-1/2 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
    >
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">
        Feedback Form <br> (adkesma harus isi feedback form hehe)
      </h2>
      <form
        class="w-full"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGun5JfTkhtjKMsAjeIGn0Fou8UHmIWGxJpHLgzYcZVRFpKw/formResponse"
        method="POST"
        target="_blank"
      >
        <!-- Rating Web -->
        <div class="mb-6">
          <label for="ratingWeb" class="block text-gray-800 font-semibold mb-2"
            >Rate Webnyaa (1-5):</label
          >
          <div class="flex justify-between">
            <template v-for="rating in 5" :key="'ratingWeb' + rating">
              <label class="text-gray-700 flex items-center">
                <input
                  type="radio"
                  :name="'entry.717970540'"
                  :value="rating"
                  class="mr-2"
                  required
                />
                {{ rating }}
              </label>
            </template>
          </div>
        </div>

        <!-- Rating Relationship -->
        <div class="mb-6">
          <label
            for="ratingRelationship"
            class="block text-gray-800 font-semibold mb-2"
            >Rate our Relationship (1-5):</label
          >
          <div class="flex justify-between">
            <template v-for="rating in 5" :key="'ratingRelationship' + rating">
              <label class="text-gray-700 flex items-center">
                <input
                  type="radio"
                  :name="'entry.1005533168'"
                  :value="rating"
                  class="mr-2"
                  required
                />
                {{ rating }}
              </label>
            </template>
          </div>
        </div>

        <!-- Best Moment -->
        <div class="mb-6">
          <label class="block text-gray-800 font-semibold mb-2"
            >Choose our Best Moment (so far hehe):</label
          >
          <div>
            <template v-for="moment in bestMoments" :key="moment.value">
              <label class="text-gray-700 flex items-center mb-2">
                <input
                  type="checkbox"
                  :name="'entry.672860143'"
                  :value="moment.value"
                  class="mr-2"
                />
                {{ moment.label }}
              </label>
            </template>
          </div>
        </div>

        <div class="mb-6">
          <label for="wishlist" class="block text-gray-800 font-semibold mb-2"
            >Other moments: (selain yang di atas)</label
          >
          <input
            type="text"
            id="wishlist"
            name="entry.2109615249"
            class="w-full p-3 border border-gray-300 rounded-md"
            placeholder="minimal tulis 1 lah"
            required
          />
        </div>

        <!-- Wishlist -->
        <div class="mb-6">
          <label for="wishlist" class="block text-gray-800 font-semibold mb-2"
            >Your Wishlist:</label
          >
          <input
            type="text"
            id="wishlist"
            name="entry.1034925949"
            class="w-full p-3 border border-gray-300 rounded-md"
            placeholder="gaboleh jawab gatau"
            required
          />
        </div>

        <!-- Apa yang perlu diperbaiki -->
        <div class="mb-6">
          <label for="improve" class="block text-gray-800 font-semibold mb-2"
            >Apa yang perlu diperbaiki:</label
          >
          <textarea
            id="improve"
            name="entry.2114826776"
            class="w-full p-3 border border-gray-300 rounded-md resize-y"
            placeholder="gaboleh jawab gatau"
            rows="3"
            required
          ></textarea>
        </div>

        <!-- Apa yang perlu dipertahankan -->
        <div class="mb-6">
          <label for="maintain" class="block text-gray-800 font-semibold mb-2"
            >Apa yang perlu dipertahankan:</label
          >
          <textarea
            id="maintain"
            name="entry.2097366491"
            class="w-full p-3 border border-gray-300 rounded-md resize-y"
            placeholder="gaboleh jawab gatau"
            rows="3"
            required
          ></textarea>
        </div>

        <!-- Pesan buat Arka -->
        <div class="mb-6">
          <label
            for="messageArka"
            class="block text-gray-800 font-semibold mb-2"
            >Pesan buat Arka:</label
          >
          <textarea
            id="messageArka"
            name="entry.1868752526"
            class="w-full p-3 border border-gray-300 rounded-md resize-y"
            placeholder="gaboleh jawab gatau"
            rows="3"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="text-black w-full bg-[#ffcdd2] p-3 rounded-md hover:bg-[#d1a4a9] transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleOtherInput(event) {
      this.showOtherInput = event.target.checked;
      if (!this.showOtherInput) {
        this.otherMoment = "";
      }
    },
  },
  data() {
    return {
      bestMoments: [
        { label: "nugas bareng", value: "nugas bareng" },
        { label: "nonton bareng", value: "nonton bareng" },
        { label: "bus date", value: "bus date" },
        { label: "nonton konser", value: "nonton konser" },
        { label: "couch coop gaming", value: "couch coop gaming" },
        { label: "long distance gaming (mabar online)", value: "long distance gaming" },
        { label: "photobox", value: "photobox" },
        {
          label: "motoran gajelas gatau kemana",
          value: "motoran gajelas gatau kemana",
        },
        { label: "kuliah (lucu kalo km pilih ini bjir)", value: "kuliah" },
        { label: "midnight call", value: "midnight call" },
      ],
      showOtherInput: false, // Untuk mengontrol input manual
      otherMoment: "",
    };
  },
};
</script>

<style scoped>
/* Styling handled by Tailwind CSS */
</style>
