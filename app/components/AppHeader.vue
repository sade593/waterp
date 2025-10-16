<template>
  <div>
    <!-- Top Bar -->
    <div class="bg-gray-900 text-gray-100">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-2 text-sm">
          <div class="flex items-center space-x-4">
                    <span class="text-gray-400 hidden md:inline">
                        <i class="fas fa-shield-alt mr-2 text-green-500"></i>
                        საქართველოს მთავრობის ოფიციალური ვებ-გვერდი
                    </span>
          </div>
          <div class="flex items-center space-x-6">
            <a href="tel:2930000" class="hover:text-white transition flex items-center">
              <i class="fas fa-phone mr-2 text-green-500"></i>
              <span>ცხელი ხაზი: 2 93 00 00</span>
            </a>
            <div class="flex items-center space-x-2">
              <button class="px-2 py-1 hover:text-white font-medium transition">ქარ</button>
              <span class="text-gray-600">|</span>
              <button class="px-2 py-1 hover:text-white transition">ENG</button>
              <span class="text-gray-600">|</span>
              <button class="px-2 py-1 hover:text-white transition">РУС</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="logo-container">
            <img src="https://water.gov.ge/public/img/logo.png"
                 alt="საქართველოს გაერთიანებული წყალმომარაგების კომპანია"
                 class="h-12 md:h-14 w-auto"
                 onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'mr-4\'><div class=\'w-12 h-12 gradient-primary rounded-full flex items-center justify-center\'><i class=\'fas fa-tint text-white text-xl\'></i></div></div><div><h1 class=\'text-xl font-bold text-gray-900\'>საქართველოს გაერთიანებული</h1><p class=\'text-sm text-gray-600\'>წყალმომარაგების კომპანია</p></div>';">
          </div>

          <!-- Navigation -->
          <nav class="hidden lg:flex items-center space-x-8">
            <a href="#" class="text-gray-700 hover:text-blue-800 font-medium transition">მთავარი</a>

            <div class="relative group">
              <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center">
                კომპანია
                <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div class="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">კომპანიის შესახებ</a>
                <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">სტრუქტურა</a>
                <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ისტორია</a>
                <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ვაკანსიები</a>
              </div>
            </div>

            <a href="#" class="text-gray-700 hover:text-blue-800 font-medium transition">სერვისები</a>
            <a href="#" class="text-gray-700 hover:text-blue-800 font-medium transition">პროექტები</a>
            <a href="#" class="text-gray-700 hover:text-blue-800 font-medium transition">სიახლეები</a>
            <a href="#" class="text-gray-700 hover:text-blue-800 font-medium transition">კონტაქტი</a>

            <button class="gradient-primary text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <i class="fas fa-user mr-2"></i>
              კაბინეტი
            </button>
          </nav>

          <!-- Mobile Menu Button -->
          <button class="lg:hidden text-gray-600" onclick="toggleMobileMenu()">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>