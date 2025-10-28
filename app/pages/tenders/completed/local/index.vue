<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">დასრულებული ტენდერები</h1>
        <p class="text-xl opacity-90">ადგილობრივი ტენდერები</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">ადგილობრივი ტენდერები</h3>
              </div>
              
              <div class="space-y-4">
                
                <div
                  v-for="tender in tenders"
                  :key="tender.id"
                  class="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
                >
                  
                  <div class="p-4 bg-gray-50 border-b border-gray-200">
                    <p class="font-medium text-blue-700">{{ tender.title }}</p>
                  </div>

                  
                  <div class="p-4 text-sm text-gray-700 flex justify-between items-center">
                    <div>
                      <strong class="text-gray-500">გამოცხადების თარიღი:</strong>
                      <span class="ml-2">{{ tender.announcementDate || 'N/A' }}</span>
                    </div>
                    
                    <div class="text-right space-x-4">
                      <a
                        v-for="(link, index) in tender.detailsLinks"
                        :key="index"
                        :href="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-600 hover:underline font-medium"
                      >
                        {{ link.text }}
                      </a>
                    </div>
                  </div>
                </div>

                <div v-if="!tenders || tenders.length === 0" class="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-lg bg-white">
                  ინფორმაცია დასრულებული ადგილობრივი ტენდერების შესახებ განახლდება.
                </div>

              </div>
            </div>
          </main>

          
          <aside class="lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg border border-neutral-100 sticky top-28">
              <div class="bg-gradient-to-b from-slate-50 to-white p-6 rounded-t-xl">
                <h3 class="text-xl font-bold text-gray-800 border-l-4 border-blue-800 pl-4">
                  დასრულებული ტენდერები
                </h3>
              </div>
              <nav class="p-6">
                <ul class="space-y-3">
                  <li>
                    <NuxtLink
                      to="/tenders/completed/international"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-arrow-right mr-3 text-gray-500"></i>
                      <span>საერთაშორისო ტენდერები</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/tenders/completed/local"
                      class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-arrow-right mr-3 text-blue-800"></i>
                      <span>ადგილობრივი ტენდერები</span>
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
import { completedLocalTendersData } from '../../../../../data/completedLocalTenders.js';

const tenders = completedLocalTendersData;
</script>