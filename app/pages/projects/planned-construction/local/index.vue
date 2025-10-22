<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">
        დაგეგმილი: ადგილობრივი პროექტები
      </h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">
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
                <span class="text-blue-800 font-semibold">{{ project.name }}</span>
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
        </main>

        <aside class="w-full md:w-1/3 md:ml-24 mt-12 md:mt-0">
          <div class="sticky top-28">
            <ul>
              <li class="mb-5">
                <NuxtLink to="/projects/planned-construction/international" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>საერთაშორისო პროექტები</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink
                  to="/projects/planned-construction/local"
                  class="flex items-center text-blue-800 hover:underline"
                >
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
import { ref } from 'vue'
import { plannedLocalProjectsData } from '../../../../data/plannedLocalProjects.js'



const projects = plannedLocalProjectsData
const openProjectId = ref(null)

const toggleProject = (id) => {
  openProjectId.value = openProjectId.value === id ? null : id
}
</script>
