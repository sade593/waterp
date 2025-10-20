<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <div v-if="gallery">
        <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">{{ gallery.title }}</h1>

        <div class="flex flex-col md:flex-row">

          <main class="w-full md:w-2/3">

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div
                v-for="(imageSrc, index) in gallery.images"
                :key="index"
                class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <img :src="imageSrc" alt="Gallery image ${index + 1}" class="w-full h-48 object-cover">
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

      <div v-else>
         <h1 class="text-3xl font-bold text-center">Gallery not found.</h1>
         <p class="text-center mt-4">Please check the URL and that the ID exists in <strong>/data/galleries.js</strong></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
// Using relative path as aliases might still be problematic
import { galleriesData } from '../../../../data/galleries.js';

const route = useRoute();
const albumId = route.params.albumId; // Gets 'vani' from the URL
const gallery = galleriesData[albumId]; // Finds the matching gallery in the data file
</script>