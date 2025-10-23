<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">დაგეგმილი: ადგილობრივი ტენდერები</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">
          <div class="space-y-4">

            <div
              v-for="tender in tenders"
              :key="tender.id"
              class="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
            >
              <button class="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition duration-150">
                <span class="font-medium text-blue-700 text-left">{{ tender.title }}</span>
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>

             <div v-if="!tenders || tenders.length === 0" class="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-lg bg-white">
              ინფორმაცია დაგეგმილი ადგილობრივი ტენდერების შესახებ განახლდება.
            </div>

          </div>
        </main>

        <aside class="w-full md:w-1/3 md:ml-24 mt-12 md:mt-0">
          <div class="sticky top-28">
            <ul>
              <li class="mb-5">
                <NuxtLink to="/tenders/planned/international" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>საერთაშორისო ტენდერები</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/tenders/planned/local" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ადგილობრივი ტენდერები</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const tenders = ref([]);
const openTenderId = ref(null); 


const toggleTender = (id) => {
  if (openTenderId.value === id) {
    openTenderId.value = null;
  } else {
    openTenderId.value = id;
  }
};
</script>