<template>
  <div>
    
    <div class="bg-[#0d1321] text-white text-sm">
      <div class="container mx-auto flex justify-between items-center py-2 px-4">
        
        <div class="flex items-center space-x-6">
          <a href="tel:2930000" class="flex items-center hover:text-green-400 transition">
            <i class="fas fa-phone text-green-500 mr-2"></i>
            ცხელი ხაზი: 2 93 00 00
          </a>
          <a href="mailto:info@water.gov.ge" class="flex items-center hover:text-green-400 transition">
            <i class="fas fa-envelope text-green-500 mr-2"></i>
            info@water.gov.ge
          </a>
        </div>

        
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-youtube"></i></a>
          <span class="text-gray-300">|</span>
          <a href="#" class="hover:text-blue-400 transition">ქარ</a>
          <span>|</span>
          <a href="#" class="hover:text-blue-400 transition">ENG</a>
        </div>
      </div>
    </div>

    
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="w-full px-8 flex justify-between items-center py-4">

        <NuxtLink to="/">
          <img
            src="/wlogo.png"
            alt="Company Logo"
            class="h-14 w-auto"
          >
        </NuxtLink>

        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-blue-800 font-medium transition">მთავარი</NuxtLink>

          <div class="relative group h-full flex items-center">
            <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
              კომპანია
              <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="absolute top-full mt-2 w-72 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 border border-gray-200">
              <NuxtLink to="/company/director" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">დირექტორი</NuxtLink>
              <NuxtLink to="/company/about" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">კომპანია</NuxtLink>
              <NuxtLink to="/company/deputies" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">მოადგილეები</NuxtLink>
              <NuxtLink to="/company/vacancies" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ვაკანსია</NuxtLink>
              <NuxtLink to="/company/audit" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">აუდირებული ფინანსური ანგარიშება</NuxtLink>
              <NuxtLink to="/company/buisness-plan" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ბიზნეს-გეგმა</NuxtLink>
              <NuxtLink to="/company/personal" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">პერსონალური ოფიცერი</NuxtLink>
              <NuxtLink to="/company/quality" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ხარისხის პოლიტიკა</NuxtLink>
            </div>
          </div>

          <div class="relative group h-full flex items-center">
            <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
              მედიაცენტრი
              <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div class="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 border border-gray-200">
              <NuxtLink to="/media/photos" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ფოტო გალერია</NuxtLink>
              <NuxtLink to="/media/videos" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ვიდეო გალერია</NuxtLink>
              <NuxtLink to="/media/publications" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">პუბლიკაციები</NuxtLink>
            </div>
          </div>

          <div
            class="relative h-full flex items-center"
            @mouseenter="projectsOpen = true"
            @mouseleave="projectsOpen = false"
          >
            <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
              პროექტები
              <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div
              v-if="projectsOpen"
              class="absolute top-full mt-2 w-72 bg-white rounded-lg shadow-lg z-30 border border-gray-200"
              @mouseenter="projectsOpen = true"
              @mouseleave="projectsOpen = false"
            >
              <ul>
                <li
                  v-for="child in projectsNav.children"
                  :key="child.text"
                  class="relative"
                  @mouseenter="openSubmenu = child.text"
                  @mouseleave="openSubmenu = null"
                >
                  <NuxtLink
                    :to="child.to"
                    class="flex px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition justify-between items-center"
                  >
                    <span>{{ child.text }}</span>
                    <i v-if="child.children" class="fas fa-chevron-right ml-2 text-xs text-gray-400"></i>
                  </NuxtLink>
                  <div
                    v-if="child.children && openSubmenu === child.text"
                    class="absolute left-full top-0 w-72 bg-white rounded-r-lg shadow-lg z-40 border border-gray-200"
                  >
                    <ul>
                      <li v-for="grandchild in child.children" :key="grandchild.text">
                        <NuxtLink
                          :to="grandchild.to"
                          class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                        >
                          {{ grandchild.text }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          

          <div
            class="relative h-full flex items-center"
            @mouseenter="tendersOpen = true"
            @mouseleave="tendersOpen = false"
          >
            <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
              {{ tendersNav.text }}
              <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div
              v-if="tendersOpen"
              class="absolute top-full mt-2 w-72 bg-white rounded-lg shadow-lg z-30 border border-gray-200"
              @mouseenter="tendersOpen = true"
              @mouseleave="tendersOpen = false"
            >
              <ul>
                <li
                  v-for="child in tendersNav.children"
                  :key="child.text"
                  class="relative"
                  @mouseenter="openTendersSubmenu = child.text"
                  @mouseleave="openTendersSubmenu = null"
                >
                  <NuxtLink
                    :to="child.to"
                    class="flex px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition justify-between items-center"
                  >
                    <span>{{ child.text }}</span>
                    <i v-if="child.children" class="fas fa-chevron-right ml-2 text-xs text-gray-400"></i>
                  </NuxtLink>
                  <div
                    v-if="child.children && openTendersSubmenu === child.text"
                    class="absolute right-full top-0 w-72 bg-white rounded-l-lg shadow-lg z-40 border border-gray-200"
                  >
                    <ul>
                      <li v-for="grandchild in child.children" :key="grandchild.text">
                        <NuxtLink
                          :to="grandchild.to"
                          class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                        >
                          {{ grandchild.text }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="relative group h-full flex items-center"
            @mouseenter="legislationOpen = true"
            @mouseleave="legislationOpen = false"
          >
            <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
              {{ legislationNav.text }}
              <i class="fas fa-chevron-down ml-1 text-xs"></i>
            </button>
            <div
              v-if="legislationOpen"
              class="absolute top-full mt-2 w-96 bg-white rounded-lg shadow-lg z-30 border border-gray-200"
              @mouseenter="legislationOpen = true"
              @mouseleave="legislationOpen = false"
            >
              <ul>
                <li v-for="item in legislationNav.children" :key="item.text">
                  <a
                    v-if="item.to.endsWith('.pdf')"
                    :href="item.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                  >
                    {{ item.text }}
                  </a>
                  <NuxtLink
                    v-else
                    :to="item.to"
                    class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                  >
                    {{ item.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <NuxtLink to="/decree-announcements" class="text-gray-700 hover:text-blue-800 font-medium transition">
            დადგენილების საჯაროდ გამოცხადება
          </NuxtLink>
        </nav>

        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden text-gray-600">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <div v-if="isMobileMenuOpen" class="lg:hidden bg-white border-b">
        <ul>
          <li class="border-t"><NuxtLink to="/" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">მთავარი</NuxtLink></li>
          <li class="border-t"><NuxtLink to="/company/about" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">კომპანია</NuxtLink></li>
          <li class="border-t"><NuxtLink to="/media" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">მედიაცენტრი</NuxtLink></li>
          <li class="border-t"><NuxtLink to="/projects" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">პროექტები</NuxtLink></li>
          <li class="border-t"><NuxtLink to="/tenders" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">ტენდერები</NuxtLink></li>
          <li class="border-t"><NuxtLink to="/legislation" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">კანონმდებლობა</NuxtLink></li>
          <li class="border-t"><NuxtLink to="/decree-announcements" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">დადგენილების საჯაროდ გამოცხადება</NuxtLink></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { projectsNav } from '../../data/projectsNavigation.js';
import { tendersNav } from '../../data/tendersNavigation.js';
import { legislationNav } from '../../data/legislationNavigation.js';

const isMobileMenuOpen = ref(false);
const projectsOpen = ref(false);
const openSubmenu = ref(null);
const tendersOpen = ref(false);
const openTendersSubmenu = ref(null);
const legislationOpen = ref(false);
</script>
