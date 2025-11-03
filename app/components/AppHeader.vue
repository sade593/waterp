<template>
  <div>
    
    <div class="fixed top-0 left-0 w-full z-50 overflow-visible">
      <!-- Topbar -->
      <div class="bg-[#0d1321] text-white text-sm">
        <!-- დესკტოპისთვის -->
        <div class="container-fluid mx-auto flex justify-between py-2 px-4 hidden md:flex">
          <div class="flex items-center space-x-6">
            <a href="tel:2930000" class="flex items-center hover:text-green-400 transition">
              <i class="fas fa-phone text-green-500 mr-2"></i> ცხელი ხაზი: 2 93 00 00
            </a>
            <a href="mailto:info@water.gov.ge" class="flex items-center hover:text-green-400 transition">
              <i class="fas fa-envelope text-green-500 mr-2"></i> info@water.gov.ge
            </a>
          </div>
          <div class="flex float-center space-x-4">
            <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-youtube"></i></a>
            <span class="text-gray-300">|</span>
            <a href="#" class="hover:text-blue-400 transition">ქარ</a>
            <span>|</span>
            <a href="#" class="hover:text-blue-400 transition">ENG</a>
          </div>
        </div>

        
        
        <div class="container mx-auto flex justify-between items-center py-2 px-4 md:hidden">
          <div class="flex items-center space-x-6">
            <a href="tel:+995599123456" class="flex items-center">
              <i class="fas fa-phone text-green-500 mr-2"></i> ცხელი ხაზი: <br />2 93 00 00
            </a>
            <a href="mailto:info@water.gov.ge" class="flex items-center">
              <i class="fas fa-envelope text-green-500 mr-2"></i> info@water.gov.ge
            </a>
          </div>
          <div class="flex items-center">
            <a href="#" class="hover:text-blue-400 transition">ქარ</a>
            <span>|</span>
            <a href="#" class="hover:text-blue-400 transition">ENG</a>
          </div>
        </div>
      </div>

      
      <header class="bg-white shadow-sm overflow-visible">
        <div class="w-full px-8 flex justify-between items-center py-4 overflow-visible">
          <NuxtLink to="/">
            <img src="/wlogo.png" alt="Company Logo" class="h-14 w-auto" />
          </NuxtLink>

          
          
          <nav class="hidden lg:flex items-center space-x-8 overflow-visible">
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-800 font-medium transition">მთავარი</NuxtLink>

            
            
            <div class="relative group h-full flex items-center overflow-visible">
              <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
                კომპანია <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div
                class="absolute top-full mt-2 w-72 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 border border-gray-200"
              >
                <NuxtLink to="/company/about" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">კომპანია</NuxtLink>
                <NuxtLink to="/company/director" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">დირექტორი</NuxtLink>
                <NuxtLink to="/company/deputies" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">მოადგილეები</NuxtLink>
                <NuxtLink to="/company/vacancies" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ვაკანსია</NuxtLink>
                <NuxtLink to="/company/audit" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">აუდირებული ფინანსური ანგარიშება</NuxtLink>
                <NuxtLink to="/company/buisness-plan" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ბიზნეს-გეგმა</NuxtLink>
                <NuxtLink to="/company/personal" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">პერსონალური ოფიცერი</NuxtLink>
                <NuxtLink to="/company/quality" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ხარისხის პოლიტიკა</NuxtLink>
              </div>
            </div>

            
            <div class="relative group h-full flex items-center overflow-visible">
              <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
                მედიაცენტრი <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div class="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 border border-gray-200">
                <NuxtLink to="/media/photos" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ფოტო გალერია</NuxtLink>
                <NuxtLink to="/media/videos" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">ვიდეო გალერია</NuxtLink>
                <NuxtLink to="/media/publications" class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition">პუბლიკაციები</NuxtLink>
              </div>
            </div>

            <
            <div class="relative h-full flex items-center overflow-visible" @mouseenter="openProjects" @mouseleave="closeProjects">
              <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
                პროექტები <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div
                v-if="projectsOpen"
                class="absolute top-full mt-2 w-72 bg-white rounded-lg shadow-lg z-30 border border-gray-200"
                @mouseenter="openProjects"
                @mouseleave="closeProjects"
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
                      <i v-if="child.children" class="fas fa-chevron-left ml-2 text-xs text-gray-400"></i>
                    </NuxtLink>

                    
                    <div
                      v-if="child.children && openSubmenu === child.text"
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

           
            <div class="relative h-full flex items-center overflow-visible" @mouseenter="openTenders" @mouseleave="closeTenders">
              <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
                {{ tendersNav.text }} <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div
                v-if="tendersOpen"
                class="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-30 border border-gray-200"
                @mouseenter="openTenders"
                @mouseleave="closeTenders"
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
                      class="absolute right-full top-0 w-64 bg-white rounded-l-lg shadow-lg z-40 border border-gray-200"
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

            
            <div class="relative h-full flex items-center overflow-visible" @mouseenter="openLegislation" @mouseleave="closeLegislation">
              <button class="text-gray-700 hover:text-blue-800 font-medium transition flex items-center py-4">
                {{ legislationNav.text }} <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div
                v-if="legislationOpen"
                class="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-lg z-30 border border-gray-200"
                @mouseenter="openLegislation"
                @mouseleave="closeLegislation"
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


            <NuxtLink
              to="/decree-announcements"
              class="text-gray-700 hover:text-blue-800 font-medium transition"
            >
              დადგენილების საჯაროდ გამოცხადება
            </NuxtLink>
          </nav>

          
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden text-gray-600">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>


        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden bg-white border-b max-h-[80vh] overflow-y-auto"
        >
          <ul>
            
            <li class="border-t">
              <NuxtLink to="/" @click="closeMobileMenu" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">
                მთავარი
              </NuxtLink>
            </li>

            
            <li class="border-t">
              <button @click="toggle('company')" class="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50">
                კომპანია
              </button>
              <div :class="['accordion', { open: mobile.company }]">
                <NuxtLink to="/company/about" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">კომპანია</NuxtLink>
                <NuxtLink to="/company/director" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">დირექტორი</NuxtLink>
                <NuxtLink to="/company/deputies" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">მოადგილეები</NuxtLink>
                <NuxtLink to="/company/vacancies" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">ვაკანსია</NuxtLink>
                <NuxtLink to="/company/audit" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">აუდირებული ფინანსური ანგარიშება</NuxtLink>
                <NuxtLink to="/company/buisness-plan" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">ბიზნეს-გეგმა</NuxtLink>
                <NuxtLink to="/company/personal" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">პერსონალური ოფიცერი</NuxtLink>
                <NuxtLink to="/company/quality" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">ხარისხის პოლიტიკა</NuxtLink>
              </div>
            </li>

            
            <li class="border-t">
              <button @click="toggle('media')" class="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50">
                მედიაცენტრი
              </button>
              <div :class="['accordion', { open: mobile.media }]">
                <NuxtLink to="/media/photos" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">ფოტო გალერია</NuxtLink>
                <NuxtLink to="/media/videos" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">ვიდეო გალერია</NuxtLink>
                <NuxtLink to="/media/publications" @click="closeMobileMenu" class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100">პუბლიკაციები</NuxtLink>
              </div>
            </li>

            
            <li class="border-t">
              <button @click="toggle('projects')" class="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50">
                პროექტები
              </button>
              <div :class="['accordion', { open: mobile.projects }]">
                <template v-for="section in projectsNav.children" :key="section.text">
                  <div class="py-2 pl-8 pr-4 text-gray-500 text-sm">{{ section.text }}</div>
                  <NuxtLink
                    v-for="leaf in (section.children || [])"
                    :key="leaf.text"
                    :to="leaf.to"
                    @click="closeMobileMenu"
                    class="block py-3 pl-12 pr-4 text-gray-700 hover:bg-gray-100"
                  >
                    {{ leaf.text }}
                  </NuxtLink>
                </template>
              </div>
            </li>

            
            <li class="border-t">
              <button @click="toggle('tenders')" class="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50">
                ტენდერები
              </button>
              <div :class="['accordion', { open: mobile.tenders }]">
                <template v-for="section in tendersNav.children" :key="section.text">
                  <div class="py-2 pl-8 pr-4 text-gray-500 text-sm">{{ section.text }}</div>
                  <NuxtLink
                    v-for="leaf in (section.children || [])"
                    :key="leaf.text"
                    :to="leaf.to"
                    @click="closeMobileMenu"
                    class="block py-3 pl-12 pr-4 text-gray-700 hover:bg-gray-100"
                  >
                    {{ leaf.text }}
                  </NuxtLink>
                </template>
              </div>
            </li>

            <li class="border-t">
              <button @click="toggle('legislation')" class="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50">
                კანონმდებლობა
              </button>
              <div :class="['accordion', { open: mobile.legislation }]">
                <template v-for="item in legislationNav.children" :key="item.text">
                  <a
                    v-if="item.to.endsWith('.pdf')"
                    :href="item.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="closeMobileMenu"
                    class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100"
                  >
                    {{ item.text }}
                  </a>
                  <NuxtLink
                    v-else
                    :to="item.to"
                    @click="closeMobileMenu"
                    class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100"
                  >
                    {{ item.text }}
                  </NuxtLink>
                </template>

                <NuxtLink
                  to="/decree-announcements"
                  @click="closeMobileMenu"
                  class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100 border-t border-gray-200"
                >
                  დადგენილების საჯაროდ გამოცხადება
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>

    <div class="h-32"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { projectsNav } from '../../data/projectsNavigation.js'
import { tendersNav } from '../../data/tendersNavigation.js'
import { legislationNav } from '../../data/legislationNavigation.js'


const isMobileMenuOpen = ref(false)
const projectsOpen = ref(false)
const tendersOpen = ref(false)
const legislationOpen = ref(false)
const openSubmenu = ref(null)
const openTendersSubmenu = ref(null)

function openProjects() { projectsOpen.value = true }
function closeProjects() { projectsOpen.value = false }
function openTenders() { tendersOpen.value = true }
function closeTenders() { tendersOpen.value = false }
function openLegislation() { legislationOpen.value = true }
function closeLegislation() { legislationOpen.value = false }

const mobile = ref({
  company: false,
  media: false,
  projects: false,
  tenders: false,
  legislation: false
})

function toggle(key) {
  mobile.value[key] = !mobile.value[key]
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>
