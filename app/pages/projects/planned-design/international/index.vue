<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">დაგეგმილი საპროექტო სამუშაოები</h1>
        <p class="text-xl opacity-90">საერთაშორისო პროექტები</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">საერთაშორისო პროექტები</h3>
              </div>
              
              <div class="space-y-4">
                <div
                  v-for="project in projects"
                  :key="project.id"
                  class="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
                >
                  <button
                    @click="toggleProject(project.id)"
                    class="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition duration-150"
                  >
                    <span class="font-medium text-blue-700 text-left">{{ project.title }}</span>
                    <i
                      class="fas text-gray-500 transition-transform duration-300"
                      :class="openProjectId === project.id ? 'fa-chevron-up' : 'fa-chevron-down'"
                    ></i>
                  </button>

                  <div
                    v-if="openProjectId === project.id"
                    class="p-6 border-t border-gray-200 text-sm text-gray-700"
                  >
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                      <div>
                        <strong class="block text-gray-500">სამუშაოების დაწყების თარიღი:</strong>
                        <span>{{ project.startDate || 'N/A' }}</span>
                      </div>
                      <div>
                        <strong class="block text-gray-500">სამუშაოების დასრულების თარიღი:</strong>
                        <span>{{ project.endDate || 'N/A' }}</span>
                      </div>
                      <div>
                        <strong class="block text-gray-500">პროექტის ღირებულება (ლარი):</strong>
                        <span>{{ project.projectValue || 'N/A' }}</span>
                      </div>
                      <div>
                        <strong class="block text-gray-500">დაფინანსების წყარო:</strong>
                        <span>{{ project.procurementType || 'N/A' }}</span>
                      </div>
                      <div>
                        <strong class="block text-gray-500">კონტრაქტორი:</strong>
                        <span>{{ project.organization || 'N/A' }}</span>
                      </div>
                      <div>
                        <strong class="block text-gray-500">წყარო:</strong>
                        <span>{{ project.source || 'N/A' }}</span>
                      </div>
                      <div>
                        <strong class="block text-gray-500">სტატუსი:</strong>
                        <span>{{ project.status || 'N/A' }}</span>
                      </div>
                      <div>
                        <strong class="block text-gray-500">{{ project.field1_label || ':' }}</strong>
                        <span>{{ project.field1_value || 'N/A' }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="!projects || projects.length === 0" class="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-lg bg-white">
                  ინფორმაცია დაგეგმილი საერთაშორისო საპროექტო სამუშაოების შესახებ განახლდება.
                </div>
              </div>
            </div>
          </main>

          
          <aside class="lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg border border-neutral-100 sticky top-28">
              <div class="bg-gradient-to-b from-slate-50 to-white p-6 rounded-t-xl">
                <h3 class="text-xl font-bold text-gray-800 border-l-4 border-blue-800 pl-4">
                  დაგეგმილი საპროექტო
                </h3>
              </div>
              <nav class="p-6">
                <ul class="space-y-3">
                  <li>
                    <NuxtLink
                      to="/projects/planned-design/international"
                      class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-arrow-right mr-3 text-blue-800"></i>
                      <span>საერთაშორისო პროექტები</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/projects/planned-design/local"
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-arrow-right mr-3 text-gray-500"></i>
                      <span>ადგილობრივი პროექტები</span>
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
import { ref } from 'vue';
import { plannedDesignInternationalProjectsData } from '../../../../../data/plannedDesignInternationalProjects.js';

const projects = plannedDesignInternationalProjectsData;
const openProjectId = ref(null);

const toggleProject = (id) => {
  if (openProjectId.value === id) {
    openProjectId.value = null;
  } else {
    openProjectId.value = id;
  }
};
</script>