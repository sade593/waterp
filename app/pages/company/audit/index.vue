<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">აუდირებული ფინანსური ანგარიშება</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            <div
              v-for="report in reports"
              :key="report.title"
              class="flex flex-col items-center text-center" 
            >
              
              <img src="/water-logo.jpg" alt="Report Logo" class="w-24 h-auto mb-4 object-contain">
              
              <p class="text-sm text-gray-600 mb-3 leading-relaxed flex-grow">
                {{ report.title }}
              </p>
              
              <a
                :href="report.pdfUrl"
                target="_blank"
                class="text-sm font-medium text-blue-700 hover:underline mt-auto" 
              >
                სრულად
              </a>
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
                <NuxtLink to="/company/buisness-plan" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>წყალმომარაგების კომპანიის ბიზნეს-გეგმა</span>
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
  </div>
</template>

<script setup>
// Data includes titles and direct PDF URLs
const reports = [
  { title: 'ფინანსური და მმართველობის ანგარიშგება... 2024 წლის...', pdfUrl: '/pdf1.pdf' },
  { title: 'ფინანსური და მმართველობის ანგარიშგება... 2023 წლის...', pdfUrl: '/pdf2.pdf' },
  { title: 'ფინანსური და მმართველობის ანგარიშგება... 2022 წლის...', pdfUrl: '/pdf3.pdf' },
  { title: 'ფინანსური და მმართველობის ანგარიშგება... 2021 წლის...', pdfUrl: '/pdf4.pdf' },
  { title: 'ფინანსური და მმართველობის ანგარიშგება... 2020 წლის...', pdfUrl: '/pdf5.pdf' },
  { title: 'ფინანსური და მმართველობის ანგარიშგება... 2019 წლის...', pdfUrl: '/pdf6.pdf' },
  { title: 'ფინანსური და მმართველობის ანგარიშგება... 2017-2018 წლის...', pdfUrl: '/pdf7.pdf' },
 
];
</script>