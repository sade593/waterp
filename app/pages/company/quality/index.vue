<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">ხარისხის მართვის პოლიტიკა</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3 flex justify-center pt-8"> 
          
          <div class="text-center max-w-xs"> 
            
            <img src="/water-logo.jpg" alt="Quality Policy Logo" class="w-32 h-auto mx-auto mb-4 object-contain"> 
            
            <p class="text-sm text-gray-600 mb-3 leading-relaxed">
              ხარისხის მართვის პოლიტიკა
            </p>
            
            <a 
              href="/quality-policy.pdf" 
              target="_blank" 
              class="text-sm font-medium text-blue-700 hover:underline"
            >
              სრულად
            </a>
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
</script>