<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <div v-if="deputy">
        <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">{{ deputy.name }}</h1>

        <div class="flex flex-col md:flex-row">
          <main class="w-full md:w-2/3">
            <div class="mb-8">
              <img :src="deputy.image" :alt="deputy.name" class="rounded-lg shadow-md w-full max-w-sm">
            </div>
            <div>
              <h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ deputy.name }}</h2>
              <p class="text-blue-700 font-medium mb-6">{{ deputy.title }}</p>
              <div class="text-gray-700 leading-relaxed space-y-4">
                <p v-for="(paragraph, index) in deputy.bio" :key="index">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </main>

          <aside class="w-full md:w-1/3 md:ml-24 mt-12 md:mt-0">
            <div class="sticky top-28">
              <ul>
                <li class="mb-5">
                  <NuxtLink to="/company/director" class="flex items-center text-blue-800 hover:underline">
                    <i class="fas fa-arrow-right mr-3 text-sm"></i>
                    <span>დირექტორი</span>
                  </NuxtLink>
                </li>
                <li class="mb-5">
                  <NuxtLink to="/company/about" class="flex items-center text-blue-800 hover:underline">
                    <i class="fas fa-arrow-right mr-3 text-sm"></i>
                    <span>კომპანია</span>
                  </NuxtLink>
                </li>
                <li class="mb-5">
                  <NuxtLink to="/company/deputies" class="flex items-center text-blue-800 hover:underline">
                    <i class="fas fa-arrow-right mr-3 text-sm"></i>
                    <span>მოადგილეები</span>
                  </NuxtLink>
                </li>
                <li class="mb-5">
                  <NuxtLink to="/company/vacancies" class="flex items-center text-blue-800 hover:underline">
                    <i class="fas fa-arrow-right mr-3 text-sm"></i>
                    <span>ვაკანსია</span>
                  </NuxtLink>
                </li>
                <li class="mb-5">
                  <NuxtLink to="/company/audit" class="flex items-center text-blue-800 hover:underline">
                    <i class="fas fa-arrow-right mr-3 text-sm"></i>
                    <span>აუდირებული ფინანსური ანგარიშება</span>
                  </NuxtLink>
                </li>
                <li class="mb-5">
                  <NuxtLink to="/company/personal" class="flex items-center text-blue-800 hover:underline">
                    <i class="fas fa-arrow-right mr-3 text-sm"></i>
                    <span>პერსონალურ მონაცემთა დაცვის ოფიცერი</span>
                  </NuxtLink>
                </li>
                <li class="mb-5">
                  <NuxtLink to="/company/quality" class="flex items-center text-blue-800 hover:underline">
                    <i class="fas fa-arrow-right mr-3 text-sm"></i>
                    <span>ხარისხის მართვის პოლიტიკა</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <div v-else>
        <h1 class="text-3xl font-bold text-center">Deputy not found.</h1>
        <p class="text-center mt-4">Please check the URL and that the ID exists in <strong>/data/deputies.js</strong></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
// ✅ Using the direct relative path to fix the import error
import { deputiesData } from '../../../../data/deputies.js';

const route = useRoute();
const deputyId = route.params.id;
const deputy = deputiesData[deputyId];
</script>