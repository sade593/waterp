<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">სოციალური საკითხები</h1>
        <p class="text-xl opacity-90">განსახლება</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">განსახლება</h3>
              </div>

              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div
                  v-for="doc in documents"
                  :key="doc.id"
                  class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
                >
                  
                  <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 flex-shrink-0 overflow-hidden">
                    <img src="/water-logo.jpg" alt="Water Company Logo" class="w-full h-full object-cover">
                  </div>
                  
                  <p class="text-sm text-gray-700 mb-4 leading-relaxed flex-grow font-medium">
                    {{ doc.title }}
                  </p>
                  
                  <a
                    :href="doc.pdfUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm font-medium text-white hover:bg-blue-700 px-4 py-2 rounded-lg bg-blue-800 transition-colors mt-auto inline-block"
                  >
                    სრულად
                  </a>
                </div>
              </div>
              
              <div v-if="!documents || documents.length === 0" class="text-center text-gray-500 py-10 mt-6 border border-dashed border-gray-300 rounded-lg bg-white">
                დოკუმენტები ვერ მოიძებნა.
              </div>
            </div>
          </main>

          
          <aside class="lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg border border-neutral-100 sticky top-28">
              <div class="bg-gradient-to-b from-slate-50 to-white p-6 rounded-t-xl">
                <h3 class="text-xl font-bold text-gray-800 border-l-4 border-blue-800 pl-4">
                  კანონმდებლობა
                </h3>
              </div>
              <nav class="p-6">
                <ul class="space-y-3">
                  <li class="mb-5">
                    <a href="/legislation/pdfs/company-bylaws.pdf" target="_blank" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-external-link-alt mr-3 text-gray-500"></i>
                      <span>კომპანიის დებულება</span>
                    </a>
                  </li>
                  <li class="mb-5">
                    <a href="/legislation/pdfs/xarisxi.pdf" target="_blank" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-external-link-alt mr-3 text-gray-500"></i>
                      <span>"მომსახურების ხარისხის წესების შესახებ"...</span>
                    </a>
                  </li>
                  <li class="mb-5">
                    <a href="/legislation/pdfs/sasmeli-wyali.pdf" target="_blank" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-external-link-alt mr-3 text-gray-500"></i>
                      <span>"სასმელი წყლის მიწოდებისა და მოხმარების წესების შესახებ"...</span>
                    </a>
                  </li>
                  <li class="mb-5">
                    <a href="/legislation/pdfs/wesdeba.pdf" target="_blank" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-external-link-alt mr-3 text-gray-500"></i>
                      <span>კომპანიის წესდება</span>
                    </a>
                  </li>
                  <li class="mb-5">
                    <a href="/legislation/pdfs/water-standards.pdf" target="_blank" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-external-link-alt mr-3 text-gray-500"></i>
                      <span>წყლის სტანდარტები</span>
                    </a>
                  </li>
                  <li class="mb-5">
                    <NuxtLink to="/legislation/safety-protocols" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-arrow-right mr-3 text-gray-500"></i>
                      <span>უსაფრთხოების პროტოკოლები...</span>
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
import { resettlementDocsData } from '../../../../data/resettlementDocs.js';

const documents = resettlementDocsData;
</script>