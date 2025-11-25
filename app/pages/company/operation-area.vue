<template>
  <section class="max-w-7xl mx-auto px-6 py-10">
    <div class="bg-white border border-blue-100 rounded-2xl shadow-md overflow-hidden">
      <div class="p-6 border-b border-blue-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 class="text-2xl font-bold text-[#005BBB]">
          ოპერირების არეალი — ცხრილი
        </h1>

        <label class="relative block w-full md:w-80">
          <input
            v-model="query"
            type="text"
            placeholder="ძიება ყველა ველში…"
            class="w-full rounded-xl border border-blue-200 focus:ring-2 focus:ring-[#0085FF] focus:border-[#0085FF]
                   pl-12 pr-3 py-3 outline-none bg-blue-50/30"
          />
          <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"></i>
        </label>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full text-sm">
          <thead class="bg-[#E9F4FF] sticky top-0 z-10">
            <tr>
              <th
                v-for="(h, i) in headers"
                :key="i"
                class="text-left font-semibold text-[#005BBB] px-5 py-4 whitespace-nowrap"
              >
                {{ h }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(row, idx) in filteredRows"
              :key="idx"
              class="border-t border-blue-100 hover:bg-blue-50/50 transition"
            >
              <td
                v-for="(h, i) in headers"
                :key="i"
                class="px-5 py-4 text-gray-700"
              >
                {{ row[h] }}
              </td>
            </tr>

            <tr v-if="!loading && filteredRows.length === 0">
              <td :colspan="headers.length" class="px-4 py-10 text-center text-gray-500">
                შედეგი არ მოიძებნა.
              </td>
            </tr>

            <tr v-if="loading">
              <td :colspan="headers.length" class="px-4 py-10 text-center text-gray-500">
                იტვირთება…
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="px-6 py-5 border-t border-blue-100 text-sm font-medium text-[#005BBB] bg-blue-50/50">
        ჯამი: <span class="font-bold">{{ filteredRows.length }}</span> ჩანაწერი
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const FILE_URL = '/data/operation-area.xlsx'

const headers = ref([])
const rows = ref([])
const loading = ref(true)
const query = ref('')

const filteredRows = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return rows.value
  return rows.value.filter((r) =>
    Object.values(r).some((v) =>
      String(v ?? '').toLowerCase().startsWith(q)
    )
  )
})

onMounted(async () => {
  try {
    const XLSX = await import('xlsx')
    const res = await fetch(FILE_URL, { cache: 'no-store' })
    if (!res.ok) throw new Error(`Failed to fetch file: ${res.status}`)
    const buf = await res.arrayBuffer()
    const wb = XLSX.read(buf, { type: 'array' })
    const ws = wb.Sheets[wb.SheetNames[0]]
    const grid = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' })

    if (!grid.length) {
      headers.value = []
      rows.value = []
      loading.value = false
      return
    }

    headers.value = grid[0].map(String)
    rows.value = grid.slice(1).map((arr) => {
      const obj = {}
      headers.value.forEach((h, i) => (obj[h] = arr[i] ?? ''))
      return obj
    })
  } catch (e) {
    console.error('Excel load error:', e)
    headers.value = []
    rows.value = []
  } finally {
    loading.value = false
  }
})
</script>
