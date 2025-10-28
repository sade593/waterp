<template>
  <div v-if="officer">
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">{{ officer.fullTitle }}</h1>
        <p class="text-xl opacity-90">საქართველოს გაერთიანებული წყალმომარაგების კომპანია</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">
          
          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="flex flex-col md:flex-row gap-8 items-center"> 
                
                <div class="w-full md:w-1/3 flex-shrink-0">
                  <div class="bg-white p-4 border border-gray-200 rounded-lg shadow-md aspect-square flex items-center justify-center">
                    <img src="/water-logo.jpg" alt="Logo" class="max-w-full max-h-full object-contain">
                  </div>
                </div>
                
                
                <div class="flex-1">
                  <div class="border-l-4 border-blue-800 pl-4 mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">{{ officer.contact.name }}</h2>
                  </div>
                  
                  <div class="mb-6 h-8 bg-gray-200 rounded w-64 flex items-center justify-center text-sm text-gray-500">
                    (Facebook Like Button Placeholder)
                  </div>

                  <div class="text-gray-700 space-y-3">
                    <p>
                      ელექტრონული მისამართი: <a :href="`mailto:${officer.contact.email}`" class="text-blue-700 hover:underline">{{ officer.contact.email }}</a>
                    </p>
                    <p>
                      მობ: <a :href="`tel:${officer.contact.phone.replace(/\s/g, '')}`" class="text-blue-700 hover:underline">{{ officer.contact.phone }}</a>
                    </p>
                  </div>
                </div>
              </div>
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
                    <NuxtLink to="/company/director" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-user mr-3 text-gray-500"></i>
                      <span>დირექტორი</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/company/about" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-building mr-3 text-gray-500"></i>
                      <span>კომპანია</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/company/deputies" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-users mr-3 text-gray-500"></i>
                      <span>მოადგილეები</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/company/vacancies" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-briefcase mr-3 text-gray-500"></i>
                      <span>ვაკანსია</span>
                    </NuxtLink>
                  </li>
                   <li>
                    <NuxtLink to="/company/audit" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-chart-line mr-3 text-gray-500"></i>
                      <span>აუდირებული ფინანსური ანგარიშება</span>
                    </NuxtLink>
                  </li>
                   <li>
                    <NuxtLink to="/company/buisness-plan" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-file-alt mr-3 text-gray-500"></i>
                      <span>ბიზნეს-გეგმა</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/company/personal" class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200">
                      <i class="fas fa-shield-alt mr-3 text-blue-800"></i>
                       <span>პერსონალური ოფიცერი</span>
                    </NuxtLink>
                  </li>
                   <li>
                    <NuxtLink to="/company/quality" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
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
      <h1 class="text-3xl font-bold text-gray-800">Officer not found.</h1>
      <p class="text-gray-600 mt-4">Please check the URL and that the ID exists in <strong>/data/personalOfficers.js</strong></p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { personalOfficerData } from '../../../data/personalOfficers.js';

const route = useRoute();
const officerId = route.params.id;
const officer = personalOfficerData[officerId];
</script>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>