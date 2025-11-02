<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">ხარისხის მართვის პოლიტიკა</h1>
        <p class="text-xl opacity-90">საქართველოს გაერთიანებული წყალმომარაგების კომპანია</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8 flex flex-col items-center text-center">
              <div class="border-l-4 border-blue-800 pl-6 mb-6 self-start">
                <h3 class="text-2xl font-bold text-gray-800">ხარისხის მართვის პოლიტიკა</h3>
              </div>
              
              <div class="w-full max-w-xs mt-4">
                <img src="/water-logo.jpg" alt="Quality Policy Logo" class="w-32 h-auto mx-auto mb-4 object-contain">
                <p class="text-sm text-gray-600 mb-3 leading-relaxed">
                  ხარისხის მართვის პოლიტიკის დოკუმენტი
                </p>
                <a
                  href="/quality-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-white hover:bg-blue-700 px-4 py-2 rounded-lg bg-blue-800 transition-colors inline-block mt-auto"
                >
                  სრულად
                </a>
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
                      to="/company/director"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-user mr-3 text-gray-500"></i>
                      <span>დირექტორი</span>
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
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-briefcase mr-3 text-gray-500"></i>
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
                      class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-check-circle mr-3 text-blue-800"></i>
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
</template>

<script setup>
</script>