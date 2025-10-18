<template>
  <div>
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
          </div>
        </div>
      </div>
    </div>

    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 flex justify-between items-center py-4">
        
        <NuxtLink to="/">
          <img 
            src="/wlogo.png" 
            alt="Company Logo"
            class="h-14 w-auto"
          >
        </NuxtLink>

        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-blue-800 font-medium transition">მთავარი</NuxtLink>

          <div class="relative group">
            <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center">
              კომპანია
              <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
              <NuxtLink to="/company/director" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">დირექტორი</NuxtLink>
              <NuxtLink to="/company/about" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">კომპანია</NuxtLink>
              <NuxtLink to="/company/deputies" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">მოადგილეები</NuxtLink>
              <NuxtLink to="/company/vacancies" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ვაკანსია</NuxtLink>
              <NuxtLink to="/company/audit" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">აუდირებული ფინანსური ანგარიშება</NuxtLink>
              <NuxtLink to="/company/buisness-plan" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">წყალმომარაგების კომპანიის ბიზნეს-გეგმა</NuxtLink>
              <NuxtLink to="/company/personal" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">პერსონალური მონაცემების დაცვის ოფიცერი</NuxtLink>
              <NuxtLink to="/company/quality" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ხარისხის მართვის პოლიტიკა</NuxtLink>
            </div>
          </div>
          
          <div class="relative group">
              <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center">
              მედიაცენტრი
              <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
              <NuxtLink to="/media/photos" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ფოტო გალერია</NuxtLink>
              <NuxtLink to="/media/video" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ვიდეო გალერია</NuxtLink>
              <NuxtLink to="/media/publications" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">პუბლიკაციები გალერია</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/services" class="text-gray-700 hover:text-blue-800 font-medium transition">სერვისები</NuxtLink>
          <NuxtLink to="/projects" class="text-gray-700 hover:text-blue-800 font-medium transition">პროექტები</NuxtLink>
        </nav>

        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden text-gray-600">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      <div v-if="isMobileMenuOpen" class="lg:hidden bg-white border-b">
        <ul>
          <li class="border-t"><NuxtLink to="/" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">მთავარი</NuxtLink></li>
          <li class="border-t"><NuxtLink to="/company/about" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">კომპანია</NuxtLink></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
</script>