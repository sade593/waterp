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
            <NuxtLink to="/decree-announcements" class="text-red-500 sm-hidden hover:text-red-400 text-sm transition font-medium">
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

        <!-- Topbar mobile -->
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

          <!-- Desktop navigation -->
          <nav class="hidden lg:flex items-center space-x-8 overflow-visible relative">
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-800 font-medium transition">
              მთავარი
            </NuxtLink>

            <div v-for="menu in menus" :key="menu.name" class="relative">
              <button
                @click.stop="toggleDropdown(menu.name)"
                class="flex items-center text-gray-700 hover:text-blue-800 font-medium transition"
                type="button"
              >
                {{ menu.label }}
                <i class="fas fa-chevron-down ml-1 text-xs"></i>
              </button>

              <transition name="dropdown">
                <div v-if="openDropdown === menu.name" class="dropdown-menu">
                  <ul class="py-1">
                    <li v-for="item in menu.items" :key="item.text" class="relative">
                      <button
                        v-if="item.children"
                        type="button"
                        @click.stop="toggleSub(menu.name, item.text)"
                        class="dropdown-item-button"
                      >
                        <span>{{ item.text }}</span>
                        <i class="dropdown-chevron fas fa-chevron-down" :class="{ 'chevron-rotate': openSub[menu.name] === item.text }"></i>
                      </button>

                      <a v-else-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer" @click="closeDropdown" class="dropdown-item-link">
                        {{ item.text }}
                      </a>

                      <a v-else-if="item.to && item.to.endsWith('.pdf')" :href="item.to" target="_blank" rel="noopener noreferrer" @click="closeDropdown" class="dropdown-item-link">
                        {{ item.text }}
                      </a>

                      <NuxtLink v-else-if="item.to" :to="item.to" @click="closeDropdown" class="dropdown-item-link">
                        {{ item.text }}
                      </NuxtLink>

                      <transition name="fade">
                        <ul v-if="item.children && openSub[menu.name] === item.text" class="dropdown-submenu">
                          <li v-for="sub in item.children" :key="sub.text" class="pl-4">
                            <a v-if="sub.href" :href="sub.href" target="_blank" rel="noopener noreferrer" @click="closeDropdown" class="dropdown-subitem-link">
                              {{ sub.text }}
                            </a>
                            <a v-else-if="sub.to && sub.to.endsWith('.pdf')" :href="sub.to" target="_blank" rel="noopener noreferrer" @click="closeDropdown" class="dropdown-subitem-link">
                              {{ sub.text }}
                            </a>
                            <NuxtLink v-else :to="sub.to" @click="closeDropdown" class="dropdown-subitem-link">{{ sub.text }}</NuxtLink>
                          </li>
                        </ul>
                      </transition>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>

            <NuxtLink
              to="/applications"
              class="text-gray-700 hover:text-blue-800 font-medium transition"
            >
              განცხადება
            </NuxtLink>


            <div class="ml-4">
              <button v-if="user" @click="$router.push('/profile')" class="bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-500 transition">
                პროფილი — {{ user.name }}
              </button>
              <button v-else @click="$router.push('/auth')" class="bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-500 transition">
                ავტორიზაცია
              </button>
            </div>
          </nav>

          <!-- mobile burger button -->
          <button ref="burgerBtn" @click.stop="toggleMobileMenu" class="mobile-burger-btn lg:hidden text-gray-600">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>

        <!-- MOBILE MENU -->
        <div v-if="isMobileMenuOpen" ref="mobileMenu" class="mobile-menu">
          <ul>
            <li class="border-t">
              <NuxtLink to="/" @click="closeMobileMenu" class="block py-3 px-4 text-gray-700 hover:bg-gray-50">
                მთავარი
              </NuxtLink>
            </li>

            <li class="border-t" v-for="menu in menus" :key="menu.name">
              <button
                type="button"
                @click.stop="toggleMobile(menu.name)"
                class="mobile-menu-button"
              >
                <span>{{ menu.label }}</span>
                <i class="mobile-chevron fas fa-chevron-down" :class="{ 'mobile-chevron-rotate': mobileOpen[menu.name] }"></i>
              </button>

              <div :class="['accordion', { 'accordion-open': mobileOpen[menu.name] }]">
                <template v-for="item in menu.items" :key="item.text">
                  <a
                    v-if="!item.children && item.href"
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mobile-item-link"
                    @click="closeMobileMenu"
                  >
                    {{ item.text }}
                  </a>

                  <a
                    v-else-if="!item.children && item.to && item.to.endsWith('.pdf')"
                    :href="item.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mobile-item-link"
                    @click="closeMobileMenu"
                  >
                    {{ item.text }}
                  </a>

                  <NuxtLink
                    v-else-if="!item.children && item.to"
                    :to="item.to"
                    @click="closeMobileMenu"
                    class="mobile-item-link"
                  >
                    {{ item.text }}
                  </NuxtLink>

                  <div v-else-if="item.children" class="border-t">
                    <button
                      type="button"
                      @click.stop.prevent="toggleMobileSub(menu.name, item.text)"
                      class="mobile-submenu-button"
                    >
                      <span>{{ item.text }}</span>
                      <i class="mobile-chevron fas fa-chevron-down" :class="{ 'mobile-chevron-rotate': mobileSub[menu.name] === item.text }"></i>
                    </button>

                    <div :class="['accordion', { 'accordion-open': mobileSub[menu.name] === item.text }]">
                      <template v-for="sub in item.children" :key="sub.text">
                        <a
                          v-if="sub.href"
                          :href="sub.href"
                          target="_blank"
                          rel="noopener noreferrer"
                          @click="closeMobileMenu"
                          class="mobile-subitem-link"
                        >
                          {{ sub.text }}
                        </a>

                        <a
                          v-else-if="sub.to && sub.to.endsWith('.pdf')"
                          :href="sub.to"
                          target="_blank"
                          rel="noopener noreferrer"
                          @click="closeMobileMenu"
                          class="mobile-subitem-link"
                        >
                          {{ sub.text }}
                        </a>

                        <NuxtLink
                          v-else
                          :to="sub.to"
                          @click="closeMobileMenu"
                          class="mobile-subitem-link"
                        >
                          {{ sub.text }}
                        </NuxtLink>
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </li>

            <li class="border-t">
              <NuxtLink
                to="/decree-announcements"
                @click="closeMobileMenu"
                class="text-red-500 hover:text-red-400 text-sm transition font-medium block py-3 px-4 hover:bg-gray-100"
              >
                დადგენილების საჯაროდ გამოცხადება
              </NuxtLink>
            </li>

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

    <div class="h-32"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useRoute } from "vue-router";
import { projectsNav } from "../../data/projectsNavigation.js";
import { tendersNav } from "../../data/tendersNavigation.js";
import { legislationNav } from "../../data/legislationNavigation.js";

const route = useRoute();

const user = ref(null);
const openDropdown = ref(null);
const openSub = ref({});
const isMobileMenuOpen = ref(false);
const mobileOpen = ref({});
const mobileSub = ref({});
const mobileMenu = ref(null);
const burgerBtn = ref(null);

const menus = [
  { name: "company", label: "კომპანია", items: [
    { text: "კომპანია", to: "/company/about" },
    { text: "დირექტორი", to: "/company/director" },
    { text: "მოადგილეები", to: "/company/deputies" },
    { text: "ვაკანსია", to: "/company/vacancies" },
    { text: "აუდირებული ფინანსური ანგარიშება", to: "/company/audit" },
    { text: "ბიზნეს-გეგმა", to: "/company/buisness-plan" },
    { text: "პერსონალური ოფიცერი", to: "/company/personal" },
    { text: "ხარისხის პოლიტიკა", to: "/company/quality" },
  ]},
  { name: "media", label: "მედიაცენტრი", items: [
    { text: "ფოტო გალერია", to: "/media/photos" },
    { text: "ვიდეო გალერია", to: "/media/videos" },
    { text: "პუბლიკაციები", to: "/media/publications" },
  ]},
  { name: "projects", label: "პროექტები", items: projectsNav.children },
  { name: "tenders", label: "ტენდერები", items: tendersNav.children },
  { name: "legislation", label: "კანონმდებლობა", items: legislationNav.children },
];

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name;
  openSub.value = {};
}
function toggleSub(parent, key) {
  openSub.value[parent] = openSub.value[parent] === key ? null : key;
}
function closeDropdown() {
  openDropdown.value = null;
  openSub.value = {};
}

watch(() => route.fullPath, () => {
  closeDropdown();
  closeMobileMenu();
});
function handleClickOutside(e) {
  const insideNav = !!e.target.closest("nav");
  const insideMobile = mobileMenu.value && mobileMenu.value.contains(e.target);
  const insideBurger = burgerBtn.value && burgerBtn.value.contains(e.target);

  if (!insideNav && !insideMobile && !insideBurger) {
    openDropdown.value = null;
    openSub.value = {};
    isMobileMenuOpen.value = false;
    for (const k in mobileOpen.value) mobileOpen.value[k] = false;
    for (const k in mobileSub.value) mobileSub.value[k] = null;
  }
}

function toggleMobile(name) {
  for (const k in mobileOpen.value) {
    if (k !== name) {
      mobileOpen.value[k] = false;
      mobileSub.value[k] = null;
    }
  }
  mobileOpen.value[name] = !mobileOpen.value[name];
}

function toggleMobileSub(parent, key) {
  mobileSub.value[parent] = mobileSub.value[parent] === key ? null : key;
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
  for (const k in mobileOpen.value) mobileOpen.value[k] = false;
  for (const k in mobileSub.value) mobileSub.value[k] = null;
}

onMounted(() => {
  nextTick(() => {
    mobileMenu.value = document.querySelector(".mobile-menu");
    burgerBtn.value = document.querySelector(".mobile-burger-btn");
  });

  document.addEventListener("click", handleClickOutside);

  try {
    const raw = localStorage.getItem("user");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && (parsed.name || parsed.email)) user.value = parsed
    }
  } catch {}
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
