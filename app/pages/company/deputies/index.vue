<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">მოადგილეები</h1>
        <p class="text-xl opacity-90">საქართველოს გაერთიანებული წყალმომარაგების კომპანიის მოადგილეები</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">მოადგილეები</h3>
              </div>

              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"> 
                <div
                  v-for="deputy in deputies"
                  :key="deputy.name"
                  class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                >
                  <img :src="deputy.image" :alt="deputy.name" class="w-full h-52 object-cover">
                  <div class="p-4">
                    <h3 class="font-bold text-black mb-1">{{ deputy.name }}</h3>
                    <p class="text-sm text-gray-600 mb-3">დირექტორის მოადგილე</p>
                    <div class="text-right">
                      <NuxtLink :to="deputy.link" class="text-sm font-medium text-white hover:bg-blue-700 px-3 py-1 rounded-lg bg-blue-800 transition-colors">
                        სრულად
                      </NuxtLink>
                    </div>
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
                      class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-users mr-3 text-blue-800"></i>
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
</template>

<script setup>

const deputies = [
  { name: 'აკაკი მშვიდობაძე', image: '/moadgile-1.jpg', link: '/company/deputies/person-1' },
  { name: 'ბექა ბარბაქაძე', image: '/moadgile-2.jpg', link: '/company/deputies/person-2' },
  { name: 'მიხეილ ქუთათელაძე', image: '/moadgile-3.jpg', link: '/company/deputies/person-3' },
  { name: 'გიორგი თარხნიშვილი', image: '/moadgile-4.jpg', link: '/company/deputies/person-4' },
  { name: 'სალომე ვაშაკიძე', image: '/moadgile-5.jpg', link: '/company/deputies/person-5' }
];
</script>