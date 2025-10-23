<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">სოციალური საკითხები</h1>

      <main class="w-full">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pt-8">
          
          <div
            v-for="doc in documents"
            :key="doc.id"
            class="flex flex-col items-center text-center"
          >
            
            <img src="/water-logo.jpg" alt="Document Logo" class="w-24 h-auto mb-4 object-contain">
            
            <p class="text-sm text-gray-600 mb-3 leading-relaxed flex-grow">
              {{ doc.title }}
            </p>
            
            <a
              :href="doc.pdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-blue-700 hover:underline mt-auto"
            >
              სრულად
            </a>
          </div>

        </div>

        <div v-if="!documents || documents.length === 0" class="text-center text-gray-500 py-10 mt-8">
          დოკუმენტები ვერ მოიძებნა.
        </div>

      </main>

    </div>
  </div>
</template>

<script setup>
import { resettlementDocsData } from '../../../../data/resettlementDocs.js';

const documents = resettlementDocsData;
</script>