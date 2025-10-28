<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">ვიდეო გალერია</h1>
        <p class="text-xl opacity-90">საქართველოს გაერთიანებული წყალმომარაგების კომპანია</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">ვიდეო გალერია</h3>
              </div>

              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div
                  v-for="video in videoItems"
                  :key="video.title"
                  class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                >
                  <img :src="video.thumbnail" :alt="video.title" class="w-full h-52 object-cover">
                  <div class="p-4">
                    <p class="text-sm text-gray-700 mb-3 leading-relaxed h-20 overflow-hidden">
                      {{ video.title }}
                    </p>
                    <div class="text-right mt-auto">
                      <button
                        @click="openVideoPopup(video.youtubeEmbedUrl)"
                        class="text-sm font-medium text-white hover:bg-blue-700 px-3 py-1 rounded-lg bg-blue-800 transition-colors"
                      >
                        სრულად
                      </button>
                    </div>
                  </div>
                </div>
              </div>
               <div v-if="!videoItems || videoItems.length === 0" class="text-center text-gray-500 py-10 mt-6">
                 ინფორმაცია ვიდეო გალერეის შესახებ განახლდება.
               </div>
            </div>
          </main>

          
          <aside class="lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg border border-neutral-100 sticky top-28">
              <div class="bg-gradient-to-b from-slate-50 to-white p-6 rounded-t-xl">
                <h3 class="text-xl font-bold text-gray-800 border-l-4 border-blue-800 pl-4">
                  მედიაცენტრი
                </h3>
              </div>

              <nav class="p-6">
                <ul class="space-y-3">
                  <li>
                    <NuxtLink
                      to="/media/photos"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-camera mr-3 text-gray-500"></i>
                      <span>ფოტო გალერია</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/media/videos"
                      class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-video mr-3 text-blue-800"></i>
                      <span>ვიდეო გალერია</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/media/publications"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-newspaper mr-3 text-gray-500"></i>
                      <span>პუბლიკაციები</span>
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

        </div>
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