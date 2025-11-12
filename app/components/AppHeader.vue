<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-50 overflow-visible">
      <!-- Topbar (desktop) -->
      <div class="bg-[#0d1321] text-white text-sm">
        <div class="container-fluid mx-auto h-11 justify-between items-center py-2 px-4 hidden md:flex">
          <div class="flex items-center space-x-6">
            <a href="tel:2930000" class="flex items-center hover:text-blue-400 transition">
              <i class="fas fa-phone text-green-500 mr-2"></i> ცხელი ხაზი: 2 93 00 00
            </a>
            <a href="mailto:info@water.gov.ge" class="flex items-center hover:text-blue-400 transition">
              <i class="fas fa-envelope text-green-500 mr-2"></i> info@water.gov.ge
            </a>
          </div>
          <div class="flex float-center space-x-4">
            <NuxtLink
              to="/decree-announcements"
              class="text-red-500 sm-hidden hover:text-red-400 text-sm transition font-medium"
            >
              დადგენილების საჯაროდ გამოცხადება
            </NuxtLink>
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
              <i class="fas fa-phone text-green-500 mr-2"></i> ცხელი ხაზი:<br />2 93 00 00
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
         <nav class="hidden lg:flex items-center space-x-8 overflow-visible relative" ref="desktopNavRef">
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-800 font-medium transition">
              მთავარი
            </NuxtLink>

            <!-- Dropdown Menus -->
            <div v-for="menu in menus" :key="menu.name" class="relative">
              <button
                @click.stop="toggleDropdown(menu.name)"
                class="flex items-center text-gray-700 hover:text-blue-800 font-medium transition"
              >
                {{ menu.label }}
                <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>

              <transition name="dropdown">
                <div
                  v-if="openDropdown === menu.name"
                  class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                >
                  <ul class="py-1">
                    <li v-for="item in menu.items" :key="item.text" class="relative">
                      <!-- ✅ PDFs vs internal links -->
                      <template v-if="item.href">
                        <a
                          :href="item.href"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition cursor-pointer"
                          @click="closeAll"
                        >
                          {{ item.text }}
                        </a>
                      </template>

                      <template v-else>
                        <NuxtLink
                          :to="item.to"
                          class="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition cursor-pointer"
                          @click="closeAll"
                        >
                          {{ item.text }}
                        </NuxtLink>
                      </template>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>

            <!-- decree link -->
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
          
          <button @click="toggleMobileMenu"
              ref="burgerRef"
              class="lg:hidden text-gray-600">
              <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen"
          ref="mobileMenuRef"
          class="lg:hidden bg-white border-b max-h-[80vh] overflow-y-auto">
          <ul>
            <li class="border-t">
              <NuxtLink
                to="/"
                @click="closeAll"
                class="block py-3 px-4 text-gray-700 hover:bg-gray-50"
              >
                მთავარი
              </NuxtLink>
            </li>

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

              <div :class="['accordion', { open: mobileOpen[menu.name] }]">
                <template v-for="item in menu.items" :key="item.text">
                  <template v-if="item.href">
                    <a
                      :href="item.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100"
                      @click="closeAll"
                    >
                      {{ item.text }}
                    </a>
                  </template>

                  <template v-else>
                    <NuxtLink
                      :to="item.to"
                      @click="closeAll"
                      class="block py-3 pl-8 pr-4 text-gray-700 hover:bg-gray-100"
                    >
                      {{ item.text }}
                    </NuxtLink>
                  </template>
                </template>
              </div>
            </li>

            <li class="border-t">
              <NuxtLink
                to="/decree-announcements"
                @click="closeAll"
                class="text-red-500 hover:text-red-400 text-sm transition font-medium block py-3 px-4 hover:bg-gray-100"
              >
                დადგენილების საჯაროდ გამოცხადება
              </NuxtLink>
            </li>

            <li class="border-t">
              <button
                v-if="user"
                @click="closeAll(); $router.push('/profile')"
                class="w-full text-left py-3 px-4 text-white bg-blue-600 hover:bg-blue-700"
              >
                პროფილი — {{ user.name }}
              </button>
              <button
                v-else
                @click="closeAll(); $router.push('/auth')"
                class="w-full text-left py-3 px-4 text-white bg-blue-600 hover:bg-blue-700"
              >
                ავტორიზაცია
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>

    <div class="h-32"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { projectsNav } from "../../data/projectsNavigation.js";
import { tendersNav } from "../../data/tendersNavigation.js";
import { legislationNav } from "../../data/legislationNavigation.js";

const user = ref(null);
const openDropdown = ref(null);
const isMobileMenuOpen = ref(false);
const mobileOpen = ref({});

// NEW: refs for precise outside-click checks
const desktopNavRef = ref(null);
const mobileMenuRef = ref(null);
const burgerRef = ref(null);

// NEW: guard to ignore the document click in the same tick we open a menu
const clickGuard = ref(false);
function armClickGuard() {
  clickGuard.value = true;
  setTimeout(() => (clickGuard.value = false), 0);
}

const menus = [
  {
    name: "company",
    label: "კომპანია",
    items: [
      { text: "კომპანია", to: "/company/about" },
      { text: "დირექტორი", to: "/company/director" },
      { text: "მოადგილეები", to: "/company/deputies" },
      { text: "ვაკანსია", to: "/company/vacancies" },
      { text: "აუდირებული ფინანსური ანგარიშება", to: "/company/audit" },
      { text: "ბიზნეს-გეგმა", to: "/company/buisness-plan" },
      { text: "პერსონალური ოფიცერი", to: "/company/personal" },
      { text: "ხარისხის პოლიტიკა", to: "/company/quality" },
    ],
  },
  {
    name: "media",
    label: "მედიაცენტრი",
    items: [
      { text: "ფოტო გალერია", to: "/media/photos" },
      { text: "ვიდეო გალერია", to: "/media/videos" },
      { text: "პუბლიკაციები", to: "/media/publications" },
    ],
  },
  { name: "projects", label: "პროექტები", items: projectsNav.children },
  { name: "tenders", label: "ტენდერები", items: tendersNav.children },
  { name: "legislation", label: "კანონმდებლობა", items: legislationNav.children },
];

// Desktop dropdown
function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name;
  armClickGuard();
}

// Mobile menu open/close
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  armClickGuard();
}

function toggleMobile(name) {
  for (const key in mobileOpen.value) {
    if (key !== name) mobileOpen.value[key] = false;
  }
  mobileOpen.value[name] = !mobileOpen.value[name];
  armClickGuard();
}

function closeAll() {
  openDropdown.value = null;
  isMobileMenuOpen.value = false;
  for (const key in mobileOpen.value) mobileOpen.value[key] = false;
}

function handleDocumentClick(e) {
  if (clickGuard.value) return;

  // Close desktop dropdown if click is outside desktop nav
  const navEl = desktopNavRef.value;
  if (openDropdown.value && navEl && !navEl.contains(e.target)) {
    openDropdown.value = null;
  }

  // Close mobile menu if click is outside mobile menu and not the burger
  if (isMobileMenuOpen.value) {
    const panel = mobileMenuRef.value;
    const burger = burgerRef.value;
    const clickedBurger = burger && burger.contains(e.target);
    const clickedInsidePanel = panel && panel.contains(e.target);

    if (!clickedBurger && !clickedInsidePanel) {
      closeAll();
    }
  }
}

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
  try {
    const raw = localStorage.getItem("user");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && (parsed.name || parsed.email)) user.value = parsed;
    }
  } catch {}
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>


<style scoped>
.accordion {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}
.accordion.open {
  max-height: 1000px;
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
