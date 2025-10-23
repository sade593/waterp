<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">დაგეგმილი საპროექტო: ადგილობრივი პროექტები</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">
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
              ინფორმაცია დაგეგმილი ადგილობრივი საპროექტო სამუშაოების შესახებ განახლდება.
            </div>

          </div>
        </main>

        <aside class="w-full md:w-1/3 md:ml-24 mt-12 md:mt-0">
          <div class="sticky top-28">
            <ul>
              <li class="mb-5">
                <NuxtLink to="/projects/planned-design/international" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>საერთაშორისო პროექტები</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/projects/planned-design/local" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ადგილობრივი პროექტები</span>
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
import { ref } from 'vue';
import { plannedDesignLocalProjectsData } from '../../../../../data/plannedDesignLocalProjects.js';

const projects = plannedDesignLocalProjectsData;
const openProjectId = ref(null);

const toggleProject = (id) => {
  if (openProjectId.value === id) {
    openProjectId.value = null;
  } else {
    openProjectId.value = id;
  }
};
</script>