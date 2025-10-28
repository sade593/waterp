<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">ფოტო გალერია</h1>
        <p class="text-xl opacity-90">საქართველოს გაერთიანებული წყალმომარაგების კომპანია</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">ფოტო გალერია</h3>
              </div>

              
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"> 
                <div
                  v-for="item in galleryItems"
                  :key="item.title"
                  class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                >
                  <img :src="item.image" :alt="item.title" class="w-full h-52 object-cover">
                  <div class="p-4">
                    <p class="text-sm text-gray-700 mb-3 leading-relaxed h-20 overflow-hidden">
                      {{ item.title }}
                    </p>
                    <div class="text-right mt-auto">
                      <NuxtLink :to="item.link" class="text-sm font-medium text-white hover:bg-blue-700 px-3 py-1 rounded-lg bg-blue-800 transition-colors">
                        სრულად
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
               <div v-if="!galleryItems || galleryItems.length === 0" class="text-center text-gray-500 py-10 mt-6">
                 ინფორმაცია გალერეის შესახებ განახლდება.
               </div>
            </div>
          </main>

          
          <aside class="lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg border border-neutral-100 sticky top-28">
              <div class="bg-gradient-to-b from-slate-50 to-white p-6 rounded-t-xl">
                <h3 class="text-xl font-bold text-gray-800 border-l-4 border-blue-800 pl-4">
                  მედიაცენტრი
                </h3>
              </div>

              <nav class="p-6">
                <ul class="space-y-3">
                  <li>
                    <NuxtLink
                      to="/media/photos"
                      class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-camera mr-3 text-blue-800"></i>
                      <span>ფოტო გალერია</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/media/videos"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-video mr-3 text-gray-500"></i>
                      <span>ვიდეო გალერია</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink
                      to="/media/publications"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-newspaper mr-3 text-gray-500"></i>
                      <span>პუბლიკაციები</span>
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
const galleryItems = [
  {
    image: '/gallery/gallery-1.jpg',
    title: 'ქალაქ ზესტაფონში წყალმომარაგების სისტემის რეაბილიტაცია მიმდინარეობს.',
    link: '/media/photos/vani' 
  },
];
</script>