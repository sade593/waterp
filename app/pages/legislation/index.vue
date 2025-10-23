<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">უსაფრთხოების პროტოკოლები, ხარჯთაღრიცხვები და ანგარიშგებები</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">
          <div class="space-y-6 pt-4">
            
            <NuxtLink
            to="/legislation/resettlement"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3 text-center mr-4 mb-2 inline-block"
          >
            განსახლება
          </NuxtLink>
          <NuxtLink
            to="/legislation/environmental"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3 text-center mr-4 mb-2 inline-block"
          >
            გარემოს დაცვითი დოკუმენტები
          </NuxtLink>
            

            
          </div>
        </main>

        <aside class="w-full md:w-1/3 md:ml-24 mt-12 md:mt-0">
          <div class="sticky top-28">
            <ul>
              <li class="mb-5">
                <a href="/legislation/pdfs/company-bylaws.pdf" target="_blank" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-external-link-alt mr-3 text-sm"></i>
                  <span>კომპანიის დებულება</span>
                </a>
              </li>
              <li class="mb-5">
                 <a href="/legislation/pdfs/xarisxi.pdf" target="_blank" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-external-link-alt mr-3 text-sm"></i>
                  <span>"მომსახურების ხარისხის წესების შესახებ"...</span>
                </a>
              </li>
              <li class="mb-5">
                 <a href="/legislation/pdfs/sasmeli-wyali.pdf" target="_blank" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-external-link-alt mr-3 text-sm"></i>
                  <span>"სასმელი წყლის მიწოდებისა და მოხმარების წესების შესახებ"...</span>
                </a>
              </li>
               <li class="mb-5">
                 <a href="/legislation/pdfs/wesdeba.pdf" target="_blank" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-external-link-alt mr-3 text-sm"></i>
                  <span>კომპანიის წესდება</span>
                </a>
              </li>
               <li class="mb-5">
                 <a href="/legislation/pdfs/water-standards.pdf" target="_blank" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-external-link-alt mr-3 text-sm"></i>
                  <span>წყლის სტანდარტები</span>
                </a>
              </li>
               <li class="mb-5">
                 <NuxtLink to="/legislation/safety-protocols" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>უსაფრთხოების პროტოკოლები...</span>
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