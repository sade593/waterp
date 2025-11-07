<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-50">
    <AppHeader />

    <div class="w-full max-w-lg bg-white shadow-md rounded-xl p-8 mt-24 text-center">
      <img src="/water-logo.jpg" alt="Logo" class="mx-auto w h-24 rounded-full mb-4" />

      <h2 class="text-2xl font-bold mb-2 text-gray-800">
        {{ user?.name || 'მომხმარებელი' }}-ის პროფილი
      </h2>
      <p class="text-gray-500 mb-6">მომხმარებლის ინფორმაცია </p>

      <div v-if="user" class="space-y-3 text-gray-700 text-left">
        <p><strong>სახელი:</strong> {{ user.name }}</p>
        <p><strong>ელ.ფოსტა:</strong> {{ user.email }}</p>
        <p><strong>ტელეფონი:</strong> {{ user.phone }}</p>
      </div>

      <div v-else class="text-center text-gray-500">არ ხართ ავტორიზებული.</div>
    </div>
  </div>
</template>


<script setup>
import AppHeader from '~/components/AppHeader.vue'
import { ref, onMounted } from 'vue'

const user = ref(null)

onMounted(() => {
  const stored = localStorage.getItem('user')
  if (stored) user.value = JSON.parse(stored)
})
</script>


<style scoped>
h2,
span,
p {
  font-family: 'FiraGO', sans-serif;
}
</style>
