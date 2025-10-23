<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">მიმდინარე: ადგილობრივი ტენდერები</h1>

      <div class="flex flex-col md:flex-row">

        <main class="w-full md:w-2/3">
          <div class="space-y-4">

            <div
              v-for="tender in tenders"
              :key="tender.id"
              class="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
            >
              <div class="p-4 bg-gray-50 border-b border-gray-200">
                <p class="font-medium text-blue-700">{{ tender.title }}</p>
              </div>

              <div class="p-4 text-sm text-gray-700">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                  <div>
                    <strong class="text-gray-500">გამოცხადების თარიღი:</strong>
                    <span class="ml-2">{{ tender.announcementDate || 'N/A' }}</span>
                  </div>
                  <div>
                    <strong class="text-gray-500">დასრულების თარიღი:</strong>
                    <span class="ml-2">{{ tender.endDate || 'N/A' }}</span>
                  </div>
                  <div>
                    <strong class="text-gray-500">სავარაუდო ღირებულება (ლარი):</strong>
                    <span class="ml-2">{{ tender.projectValue || 'N/A' }}</span>
                  </div>
                   <div>
                    <strong class="text-gray-500">დაფინანსების წყარო:</strong>
                    <span class="ml-2">{{ tender.procurementType || 'N/A' }}</span>
                  </div>
                </div>

                <div class="text-right">
                  <a
                    v-if="tender.detailsLink"
                    :href="tender.detailsLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:underline font-medium"
                  >
                    იხილეთ ლინკი
                  </a>
                </div>
              </div>

            </div>

             <div v-if="!tenders || tenders.length === 0" class="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-lg bg-white">
              ინფორმაცია მიმდინარე ადგილობრივი ტენდერების შესახებ განახლდება.
            </div>

          </div>
        </main>

        <aside class="w-full md:w-1/3 md:ml-24 mt-12 md:mt-0">
          <div class="sticky top-28">
            <ul>
              <li class="mb-5">
                <NuxtLink to="/tenders/ongoing/international" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>საერთაშორისო ტენდერები</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/tenders/ongoing/local" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ადგილობრივი ტენდერები</span>
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
import { ongoingLocalTendersData } from '../../../../../data/ongoingLocalTenders.js';

const tenders = ongoingLocalTendersData;
</script>