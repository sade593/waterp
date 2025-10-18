<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <div v-if="auditReport">
        <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">{{ auditReport.year }} წლის ანგარიში</h1>
        <p class="text-gray-600 mb-8">{{ auditReport.title }}</p>

        <div class="border rounded-lg overflow-hidden shadow-md">
          <iframe
            :src="auditReport.pdfUrl"
            type="application/pdf"
            width="100%"
            height="800px"
            style="border: none;"
          >
            <p>Your browser does not support embedded PDFs. You can <a :href="auditReport.pdfUrl">download the PDF</a> instead.</p>
          </iframe>
        </div>
      </div>

      <div v-else>
        <h1 class="text-3xl font-bold text-center">Report not found.</h1>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { auditsData } from '../../../../data/audits.js'; // Using relative path

const route = useRoute();
const reportId = route.params.id; // Gets 'report-1', 'report-2', etc. from URL
const auditReport = auditsData[reportId]; // Finds the matching report in the data file
</script>