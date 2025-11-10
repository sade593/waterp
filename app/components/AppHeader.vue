<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-50 overflow-visible">
      <!-- Topbar (desktop) -->
      <div class="bg-[#0d1321] text-white text-sm">
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

        <!-- Topbar (mobile) -->
        <div class="container mx-auto flex justify-between items-center py-2 px-4 md:hidden">
          <div class="flex items-center space-x-6">
            <a href="tel:2930000" class="flex items-center">
              <i class="fas fa-phone text-green-500 mr-2"></i> ცხელი ხაზი: 2 93 00 00
            </a>
            <a href="mailto:info@water.gov.ge" class="flex items-center">
              <i class="fas fa-envelope text-green-500 mr-2"></i> info@water.gov.ge
            </a>
          </div>
          <div class="flex items-center">
            <a href="#" class="hover:text-blue-400 transition">ქარ</a>
            <span class="px-2">|</span>
            <a href="#" class="hover:text-blue-400 transition">ENG</a>
          </div>
        </div>
      </div>

      <!-- Main header -->
      <header class="bg-white shadow-sm overflow-visible">
        <div class="w-full px-8 flex justify-between items-center py-4 overflow-visible">
          <NuxtLink to="/">
            <img src="/wlogo.png" alt="Company Logo" class="h-14 w-auto" />
          </NuxtLink>

          <!-- Desktop nav -->
          <nav class="hidden lg:flex items-center space-x-8 overflow-visible relative">
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-800 font-medium transition">მთავარი</NuxtLink>

            <!-- Each top-level menu -->
            <div class="relative" v-for="menu in menus" :key="menu.name">
              <button
                @click.stop="toggleDropdown(menu.name)"
                class="flex items-center text-gray-700 hover:text-blue-800 font-medium transition"
              >
                {{ menu.label }}
                <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>

              <!-- Dropdown panel -->
              <transition name="dropdown">
                <div
                  v-if="openDropdown === menu.name"
                  class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                >
                  <ul class="py-1">
                    <li v-for="item in menu.items" :key="item.text" class="relative">
                      <!-- If has children: click to expand submenu -->
                      <button
                        v-if="item.children"
                        @click.stop="toggleSub(menu.name, item.text)"
                        class="w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 flex justify-between items-center transition"
                      >
                        <span>{{ item.text }}</span>
                        <i
                          class="fas fa-chevron-down text-xs transition-transform duration-300"
                          :class="{ 'rotate-180': openSub[menu.name] === item.text }"
                        ></i>
                      </button>

                      <!-- If simple link -->
                      <NuxtLink
                        v-else
                        :to="item.to"
                        class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                      >
                        {{ item.text }}
                      </NuxtLink>

                      <!-- Nested submenu (click-to-open) -->
                      <transition name="fade">
                        <ul
                          v-if="item.children && openSub[menu.name] === item.text"
                          class="ml-4 border-l border-gray-100"
                        >
                          <li v-for="sub in item.children" :key="sub.text" class="pl-4">
                            <NuxtLink
                              :to="sub.to"
                              class="block py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition"
                            >
                              {{ sub.text }}
                            </NuxtLink>
                          </li>
                        </ul>
                      </transition>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>

            <!-- Static link -->
            <NuxtLink
              to="/decree-announcements"
              class="text-gray-700 hover:text-blue-800 font-medium transition"
            >
              დადგენილების საჯაროდ გამოცხადება
            </NuxtLink>

            <!-- Auth/Profile -->
            <div class="ml-4">
              <button
                v-if="user"
                @click="$router.push('/profile')"
                class="bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-500 transition"
              >
                პროფილი — {{ user.name }}
              </button>
              <button
                v-else
                @click="$router.push('/auth')"
                class="bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-500 transition"
              >
                ავტორიზაცია
              </button>
            </div>
          </nav>

          <!-- Mobile burger -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden text-gray-600">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>

        <!-- Mobile menu (accordion with nested submenus) -->
        <div v-if="isMobileMenuOpen" class="lg:hidden bg-white border-b max-h-[80vh] overflow-y-auto">
          <ul>
            <!-- მთავარი -->
            <li class="border-t">
              <NuxtLink
                to="/"
                @click="closeMobileMenu"
                class="block py-3 px-4 text-gray-700 hover:bg-gray-50"
              >
                მთავარი
              </NuxtLink>
            </li>

            <!-- Dynamic menus -->
            <li class="border-t" v-for="menu in menus" :key="menu.name">
              <button
                type="button"
                @click.stop.prevent="toggleMobile(menu.name)"
                class="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 flex justify-between items-center"
              >
                <span>{{ menu.label }}</span>
                <i
                  class="fas fa-chevron-down text-xs transition-transform duration-300"
                  :class="{ 'rotate-180': mobileOpen[menu.name] }"
                ></i>
              </button>

              <!-- First-level accordion -->
              <div :class="['accordion', { open: mobileOpen[menu.name] }]">
                <template v-for="item in menu.items" :key="item.text">
                  <!-- If simple link -->
                  <NuxtLink
                    v-if="!item.children"
                    :to="item.to"
                    @click="closeMobileMenu"
                    class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100"
                  >
                    {{ item.text }}
                  </NuxtLink>

                  <!-- If nested submenu -->
                  <div v-else class="border-t">
                    <button
                      type="button"
                      @click.stop.prevent="toggleMobileSub(menu.name, item.text)"
                      class="w-full text-left py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                    >
                      <span>{{ item.text }}</span>
                      <i
                        class="fas fa-chevron-down text-xs transition-transform duration-300"
                        :class="{ 'rotate-180': mobileSub[menu.name] === item.text }"
                      ></i>
                    </button>

                    <div :class="['accordion', { open: mobileSub[menu.name] === item.text }]">
                      <NuxtLink
                        v-for="sub in item.children"
                        :key="sub.text"
                        :to="sub.to"
                        @click="closeMobileMenu"
                        class="block py-3 pl-12 pr-4 text-gray-600 hover:bg-gray-50 hover:text-blue-700"
                      >
                        {{ sub.text }}
                      </NuxtLink>
                    </div>
                  </div>
                </template>
              </div>
            </li>

            <!-- Auth/Profile -->
            <li class="border-t">
              <button
                v-if="user"
                @click="closeMobileMenu(); $router.push('/profile')"
                class="w-full text-left py-3 px-4 text-white bg-blue-600 hover:bg-blue-700"
              >
                პროფილი — {{ user.name }}
              </button>
              <button
                v-else
                @click="closeMobileMenu(); $router.push('/auth')"
                class="w-full text-left py-3 px-4 text-white bg-blue-600 hover:bg-blue-700"
              >
                ავტორიზაცია
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>

    <!-- Spacer below fixed header -->
    <div class="h-32"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { projectsNav } from '../../data/projectsNavigation.js'
import { tendersNav } from '../../data/tendersNavigation.js'
import { legislationNav } from '../../data/legislationNavigation.js'

const user = ref(null)

/* Desktop state */
const openDropdown = ref(null)      // which top dropdown is open
const openSub = ref({})             // which submenu under each dropdown is open

/* Mobile state */
const isMobileMenuOpen = ref(false)
const mobileOpen = ref({})          // which mobile top section is open
const mobileSub = ref({})           // which nested section under a mobile top is open

/* Menus */
const menus = [
  {
    name: 'company',
    label: 'კომპანია',
    items: [
      { text: 'კომპანია', to: '/company/about' },
      { text: 'დირექტორი', to: '/company/director' },
      { text: 'მოადგილეები', to: '/company/deputies' },
      { text: 'ვაკანსია', to: '/company/vacancies' },
      { text: 'აუდირებული ფინანსური ანგარიშება', to: '/company/audit' },
      { text: 'ბიზნეს-გეგმა', to: '/company/buisness-plan' },
      { text: 'პერსონალური ოფიცერი', to: '/company/personal' },
      { text: 'ხარისხის პოლიტიკა', to: '/company/quality' }
    ]
  },
  {
    name: 'media',
    label: 'მედიაცენტრი',
    items: [
      { text: 'ფოტო გალერია', to: '/media/photos' },
      { text: 'ვიდეო გალერია', to: '/media/videos' },
      { text: 'პუბლიკაციები', to: '/media/publications' }
    ]
  },
  { name: 'projects', label: 'პროექტები', items: projectsNav.children },
  { name: 'tenders', label: 'ტენდერები', items: tendersNav.children },
  { name: 'legislation', label: 'კანონმდებლობა', items: legislationNav.children }
]

/* Desktop handlers */
function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name
  openSub.value = {} // close nested when switching top menu
}
function toggleSub(parent, key) {
  openSub.value[parent] = openSub.value[parent] === key ? null : key
}
function handleClickOutside(e) {
  if (!e.target.closest('nav')) {
    openDropdown.value = null
    openSub.value = {}
  }
}

/* Mobile handlers */
function toggleMobile(name) {
  mobileOpen.value[name] = !mobileOpen.value[name]
  mobileSub.value[name] = null
}
function toggleMobileSub(parent, key) {
  mobileSub.value[parent] = mobileSub.value[parent] === key ? null : key
}
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  try {
    const raw = localStorage.getItem('user')
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed && (parsed.name || parsed.email)) user.value = parsed
    }
  } catch {}
})
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped>
/* Mobile accordion smoothness */
.accordion { max-height: 0; overflow: hidden; transition: max-height .25s ease; }
.accordion.open { max-height: 1000px; }

/* Desktop dropdown animation */
.dropdown-enter-active, .dropdown-leave-active { transition: all .25s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-10px); }

/* Nested submenu animation */
.fade-enter-active, .fade-leave-active { transition: all .25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
