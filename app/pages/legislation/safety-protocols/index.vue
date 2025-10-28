<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">კანონმდებლობა</h1>
        <p class="text-xl opacity-90">უსაფრთხოების პროტოკოლები, ხარჯთაღრიცხვები და ანგარიშგებები</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">უსაფრთხოების პროტოკოლები, ხარჯთაღრიცხვები და ანგარიშგებები</h3>
              </div>
              
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
                    <NuxtLink to="/legislation/safety-protocols" class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200">
                      <i class="fas fa-arrow-right mr-3 text-blue-800"></i>
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
</script>