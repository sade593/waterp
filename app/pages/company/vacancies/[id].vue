<template>
  <div v-if="vacancy">
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">{{ vacancy.title }}</h1>
        <p class="text-xl opacity-90">{{ vacancy.department }} - {{ vacancy.location }}</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                 <h3 class="text-2xl font-bold text-gray-800">ვაკანსიის აღწერა</h3>
              </div>
              
              <div class="text-gray-700 leading-relaxed space-y-4 text-sm">
                <p v-for="(paragraph, index) in vacancy.details" :key="index">
                  {{ paragraph }}
                </p>
              </div>
            </div>

            
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8">
               <div class="border-l-4 border-blue-800 pl-6 mb-6">
                 <h3 class="text-2xl font-bold text-gray-800">ძირითადი ინფორმაცია</h3>
              </div>
              
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div class="flex items-center mb-1">
                      <i class="fas fa-clock text-blue-600 mr-2 text-sm"></i>
                      <span class="font-semibold text-gray-700 text-xs">ვადა</span>
                    </div>
                    <p class="text-gray-800 text-sm">{{ vacancy.deadline }}</p>
                  </div>
                  
                  <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div class="flex items-center mb-1">
                      <i class="fas fa-map-marker-alt text-blue-600 mr-2 text-sm"></i>
                      <span class="font-semibold text-gray-700 text-xs">ლოკაცია</span>
                    </div>
                    <p class="text-gray-800 text-sm">{{ vacancy.location }}</p>
                  </div>
                  
                  <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div class="flex items-center mb-1">
                      <i class="fas fa-users text-blue-600 mr-2 text-sm"></i>
                      <span class="font-semibold text-gray-700 text-xs">ტიპი</span>
                    </div>
                    <p class="text-gray-800 text-sm">{{ vacancy.type }}</p>
                  </div>
                </div>
                <p class="text-xs text-gray-500 mt-4">გამოქვეყნებულია: {{ vacancy.publishDate }}</p>
            </div>
          </main>

          
          <aside class="lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg border border-neutral-100 sticky top-28">
              <div class="bg-gradient-to-b from-slate-50 to-white p-6 rounded-t-xl">
                <h3 class="text-xl font-bold text-gray-800 border-l-4 border-blue-800 pl-4">
                  კომპანია
                </h3>
              </div>
              
              <nav class="p-6">
                <ul class="space-y-3">
                  
                  <li>
                    <NuxtLink
                      to="/company/director"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-user mr-3 text-gray-500"></i>
                      <span>დირექტორი</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/company/about"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-building mr-3 text-gray-500"></i>
                      <span>კომპანია</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/company/deputies"
                       class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-users mr-3 text-gray-500"></i>
                      <span>მოადგილეები</span>
                    </NuxtLink>
                  </li>
                  
                  <li>
                    <NuxtLink
                      to="/company/vacancies"
                       class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-briefcase mr-3 text-blue-800"></i>
                      <span>ვაკანსია</span>
                    </NuxtLink>
                  </li>

                   <li>
                    <NuxtLink
                      to="/company/audit"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-chart-line mr-3 text-gray-500"></i>
                      <span>აუდირებული ფინანსური ანგარიშება</span>
                    </NuxtLink>
                  </li>

                   <li>
                    <NuxtLink
                      to="/company/buisness-plan"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-file-alt mr-3 text-gray-500"></i>
                      <span>ბიზნეს-გეგმა</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/company/personal"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-shield-alt mr-3 text-gray-500"></i>
                       <span>პერსონალური ოფიცერი</span>
                    </NuxtLink>
                  </li>
                   <li>
                    <NuxtLink
                      to="/company/quality"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-check-circle mr-3 text-gray-500"></i>
                      <span>ხარისხის პოლიტიკა</span>
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

  <div v-else class="bg-white py-16">
    <div class="container mx-auto px-6 text-center">
      <h1 class="text-3xl font-bold text-gray-800">ვაკანსია ვერ მოიძებნა</h1>
      <p class="text-gray-600 mt-4">გთხოვთ შეამოწმოთ URL და დარწმუნდით, რომ ID არსებობს <strong>/data/vacancies.js</strong> ფაილში</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { vacanciesData } from '../../../data/vacancies.js'; 

const route = useRoute();

const vacancyId = Number(route.params.id); 

const vacancy = vacanciesData.find(v => v.id === vacancyId);
</script>