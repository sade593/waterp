<template>
  <div class="overflow-hidden font-[Firago]">

    <!-- BLUE HEADER -->
    <div class="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-blue-800 text-white py-16 text-center">
      <h1 class="text-4xl font-bold">განცხადებები</h1>
      <p class="mt-2 text-lg opacity-90">
        განაცხადების კატეგორიები და ფორმები
      </p>
    </div>

    <!-- PAGE LAYOUT -->
    <section class="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">

      <!-- LEFT SIDE CONTENT -->
      <div class="w-full lg:w-2/3 space-y-6">

        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition"
        >
          <h3 class="text-2xl font-semibold text-blue-900 leading-relaxed mb-4">
            {{ item.title }}
          </h3>

          <button
            class="bg-blue-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-900 transition"
          >
            სრულად
          </button>
        </div>
      </div>

      <!-- RIGHT SIDEBAR -->
      <div class="w-full lg:w-1/3 -mt-32">
        <div class="bg-white shadow-xl rounded-2xl border border-gray-200 p-6">
          <h2 class="text-xl font-bold text-blue-800 mb-4">მონიშნეთ მოქმედება</h2>

          <ul class="space-y-2">
            <li><button class="w-full p-4 rounded-xl border hover:bg-blue-50 transition flex items-center gap-3"><i class="fas fa-user"></i> ფიზიკური პირებისთვის</button></li>
            <li><button class="w-full p-4 rounded-xl border hover:bg-blue-50 transition flex items-center gap-3"><i class="fas fa-users"></i> იურიდიული პირებისთვის</button></li>
            <li><button class="w-full p-4 rounded-xl border hover:bg-blue-50 bg-blue-50 text-blue-800 font-bold transition flex items-center gap-3"><i class="fas fa-plus-circle"></i> ახალი მიერთება</button></li>
            <li><button class="w-full p-4 rounded-xl border hover:bg-blue-50 transition flex items-center gap-3"><i class="fas fa-file-alt"></i> ტექნიკური პირობები</button></li>
            <li><button class="w-full p-4 rounded-xl border hover:bg-blue-50 transition flex items-center gap-3"><i class="fas fa-edit"></i> განაცხადის შევსება</button></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const items = [
  { title: "მრავალბინიანი - ქონების გაყოფა" },
  { title: "ქონების გაყოფა (აბონენტის)" },
  { title: "მოცულობის გაზრდა" },
  { title: "ორი ან მეტი ახალი მომხმარებელი" },
  { title: "ერთი ახალი მომხმარებელი" },
];
</script>
