<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <div v-if="officer">
        <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">{{ officer.fullTitle }}</h1>

        <div class="flex flex-col md:flex-row items-start gap-12 pt-8">

          <div class="w-full md:w-1/3 lg:w-1/4">
            <div class="bg-white p-4 border border-gray-200 rounded-lg shadow-md aspect-square flex items-center justify-center">
              <img src="/water-logo.jpg" alt="Logo" class="max-w-full max-h-full object-contain">
            </div>
          </div>

          <div class="w-full md:w-2/3 lg:w-3/4">
            <div class="mb-6 h-8 bg-gray-200 rounded w-64 flex items-center justify-center text-sm text-gray-500">
              (Facebook Like Button Placeholder)
            </div>

            <div class="text-gray-700 space-y-3">
              <p><strong>{{ officer.contact.name }}</strong></p>
              <p>
                ელექტრონული მისამართი: <a :href="`mailto:${officer.contact.email}`" class="text-blue-700 hover:underline">{{ officer.contact.email }}</a>
              </p>
              <p>
                მობ: <a :href="`tel:${officer.contact.phone.replace(/\s/g, '')}`" class="text-blue-700 hover:underline">{{ officer.contact.phone }}</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div v-else>
        <h1 class="text-3xl font-bold text-center">Officer not found.</h1>
        <p class="text-center mt-4">Please check the URL and that the ID exists in <strong>/data/personalOfficers.js</strong></p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { personalOfficerData } from '../../../data/personalOfficers.js';

const route = useRoute();
const officerId = route.params.id;
const officer = personalOfficerData[officerId];
</script>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>