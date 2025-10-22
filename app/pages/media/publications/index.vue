<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">პუბლიკაციები</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div
              v-for="item in publicationItems"
              :key="item.title"
              class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-shadow duration-300 hover:shadow-lg flex flex-col"
            >
              <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover">

              <div class="p-4 flex flex-col flex-grow">
                <p class="text-sm text-gray-700 mb-3 leading-relaxed flex-grow">
                  {{ item.title }}
                </p>

                <div class="text-right mt-auto">
                   <NuxtLink
                    :to="item.link"
                    class="text-sm font-medium text-blue-700 hover:underline"
                  >
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
                <NuxtLink to="/media/photos" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ფოტო გალერია</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/media/videos" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ვიდეო გალერია</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/media/publications" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>პუბლიკაციები</span>
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

const publicationItems = [
  {
    image: '/the-publications.jpg', 
    title: 'კახეთში მშვიდობაძე - 2023 წლის პრიორიტეტული დასრულებული და დაწყებული ახალი პროექტები - საახალწლო ჩართვა „მოამბეში“', 
    link: '/media/publications/item-1' 
  },
  
];
</script>