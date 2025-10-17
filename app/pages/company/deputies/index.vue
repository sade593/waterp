<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">მოადგილეები</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="deputy in deputies" 
              :key="deputy.name" 
              class="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            >
              <img :src="deputy.image" :alt="deputy.name" class="w-full h-52 object-cover">
              <div class="p-4">
                <h3 class="font-semibold text-gray-900 mb-3">{{ deputy.name }}</h3>
                <div class="text-right">
                  <NuxtLink :to="deputy.link" class="text-sm font-medium text-blue-700 hover:underline">
                    სრულად
                  </NuxtLink>
                </div>
              </div>
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
              
              </ul>
          </div>
        </aside>
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