<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">დაგეგმილი საპროექტო სამუშაოები</h1>
        <p class="text-xl opacity-90">ადგილობრივი პროექტები</p>
      </div>
    </div>

    
    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          
          <main class="lg:w-2/3">
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">ადგილობრივი პროექტები</h3>
              </div>
              
              <div class="space-y-4">
                <div
                  v-if="!projects || projects.length === 0"
                  class="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-lg bg-white"
                >
                  ინფორმაცია დაგეგმილი ადგილობრივი პროექტების შესახებ განახლდება.
                </div>
                
                <div
                  v-for="project in projects"
                  :key="project.id"
                  class="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
                >
                  <button
                    @click="toggleProject(project.id)"
                    class="w-full text-left px-6 py-4 hover:bg-gray-100 flex justify-between items-center"
                  >
                    <span class="text-blue-800 font-semibold">{{ project.title }}</span>
                    <i :class="openProjectId === project.id ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                  </button>

                  <div
                    v-if="openProjectId === project.id"
                    class="border-t px-6 py-4 text-sm text-gray-700 bg-gray-50"
                  >
                    <p><strong>სატენდერო გამოცხადების თარიღი:</strong> {{ project.announcementDate || 'N/A' }}</p>
                    <p><strong>სამუშაოების დაწყების სავარაუდო თარიღი:</strong> {{ project.startDate || 'N/A' }}</p>
                    <p><strong>დასრულების სავარაუდო თარიღი:</strong> {{ project.endDate || 'N/A' }}</p>
                    <p><strong>პროექტის მდგომარეობა:</strong> {{ project.status || 'N/A' }}</p>
                  </div>
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
                      class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <i class="fas fa-arrow-right mr-3 text-gray-500"></i>
                      <span>საერთაშორისო პროექტები</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/projects/planned-design/local"
                      class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200"
                    >
                      <i class="fas fa-arrow-right mr-3 text-blue-800"></i>
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
import { plannedDesignLocalProjectsData } from '../../../../../data/plannedDesignLocalProjects.js';

const projects = plannedDesignLocalProjectsData;
const openProjectId = ref(null);

const toggleProject = (id) => {
  openProjectId.value = openProjectId.value === id ? null : id;
};
</script>