<template>
  <div>

    <!-- Hero Banner -->
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">პუბლიკაციები</h1>
        <p class="text-xl opacity-90">საქართველოს გაერთიანებული წყალმომარაგების კომპანია</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          <!-- Main Content -->
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">

              <!-- Title -->
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">
                  {{ publication.title }}
                </h3>
              </div>

              <!-- Image -->
              <img 
                :src="publication.image" 
                :alt="publication.title" 
                class="rounded-xl w-full mb-8 shadow-md"
              />

              <!-- Text -->
              <div class="text-gray-700 leading-relaxed space-y-6">
                <p
                  v-for="(paragraph, index) in publication.content"
                  :key="index"
                  class="text-[17px]"
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </main>

          <!-- Sidebar -->
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
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                    >
                      <i class="fas fa-camera mr-3 text-gray-500"></i>
                      <span>ფოტო გალერია</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/media/videos"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition"
                    >
                      <i class="fas fa-video mr-3 text-gray-500"></i>
                      <span>ვიდეო გალერია</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/media/publications"
                      class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-newspaper mr-3 text-blue-800"></i>
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

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { publicationsData } from '../../../../data/publications.js'

const route = useRoute()
const publicationId = route.params.id
const publication = publicationsData[publicationId]
</script>
