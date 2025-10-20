<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">ვიდეო გალერია</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div
              v-for="video in videoItems"
              :key="video.title"
              class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-shadow duration-300 hover:shadow-lg flex flex-col"
            >
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-48 object-cover">

              <div class="p-4 flex flex-col flex-grow">
                <p class="text-sm text-gray-700 mb-3 leading-relaxed flex-grow">
                  {{ video.title }}
                </p>

                <div class="text-right mt-auto">
                   <button
                    @click="openVideoPopup(video.youtubeEmbedUrl)"
                    class="text-sm font-medium text-blue-700 hover:underline"
                  >
                    სრულად
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>

        <aside class="w-full md:w-1/3 md:ml-24 mt-12 md:mt-0">
          <div class="sticky top-28">
             <ul>
              <li class="mb-5">
                <NuxtLink to="/media/photos" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ფოტო გალერია</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/media/videos" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ვიდეო გალერია</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/media/publications" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>პუბლიკაციები</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </aside>

      </div>
    </div>

    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div class="bg-black p-2 rounded-lg shadow-xl relative w-full max-w-3xl">
        <button @click="closeVideoPopup" class="absolute -top-10 right-0 text-white text-3xl hover:opacity-75">&times;</button>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="currentVideoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="w-full h-full"
            ></iframe>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const showPopup = ref(false);
const currentVideoUrl = ref('');

const openVideoPopup = (embedUrl) => {
  currentVideoUrl.value = embedUrl;
  showPopup.value = true;
};

const closeVideoPopup = () => {
  showPopup.value = false;
  currentVideoUrl.value = '';
};

const videoItems = [
  {
    
    thumbnail: '/gallery/video-thumbnails/video-1.jpg',
    title: 'შიდა ქართლის რეგიონში წყალმომარაგების ინფრასტრუქტურის მშენებლობა აქტიურად მიმდინარეობს',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/FaKvAiqB0e0?si=dSt7aeybJcTq3QTP'
  },
];
</script>

<style scoped>
.aspect-w-16 { position: relative; padding-bottom: 56.25%; }
.aspect-h-9 { height: 0; }
.aspect-w-16 > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>