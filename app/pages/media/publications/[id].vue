<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <div v-if="publication">
        <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">{{ publication.title }}</h1>

        <div class="flex flex-col md:flex-row">

          <main class="w-full md:w-2/3">

            <div class="mb-8">
              <img :src="publication.image" :alt="publication.title" class="rounded-lg shadow-md w-full">
            </div>

            <div class="text-gray-700 leading-relaxed space-y-6">
              <p v-for="(paragraph, index) in publication.content" :key="index">
                {{ paragraph }}
              </p>
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
         <h1 class="text-3xl font-bold text-center">Publication not found.</h1>
         <p class="text-center mt-4">Please check the URL and that the ID exists in <strong>/data/publications.js</strong></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

import { publicationsData } from '../../../../data/publications.js';

const route = useRoute();
const publicationId = route.params.id; 
const publication = publicationsData[publicationId]; 
</script>