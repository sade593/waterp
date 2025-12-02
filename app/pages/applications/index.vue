<template>
  <div class="min-h-screen bg-[#f6f9ff] pb-20">

    <!-- PAGE TITLE -->
    <div class="bg-[#123ca6] w-full py-14 text-center text-white">
      <h1 class="text-3xl font-bold tracking-wide">ახალი განცხადება</h1>
    </div>

    <!-- Description Text -->
    <div class="max-w-4xl mx-auto text-center mt-10 text-gray-700 leading-7 px-6 text-base space-y-3">

      <p>
        მომხმარებელთა უფლებების დაცვის მიზნით, „საქართველოს გაერთიანებული წყალმომარაგების კომპანია“,
        წყალმომარაგების სისტემაზე ახალ მომხმარებლად მიერთების მსურველებს აძლევს შესაძლებლობას კომპანიას
        მიმართონ ელექტრონული ან წერილობითი ფორმით.
      </p>

      <p>
        ახალი მომხმარებლის მიერთება განხორციელდება მსურველის მიერ შესაბამისი განაცხადით,
        წინასწარ წაყენებული პირობების შესაბამისად. ამასთან, თუკი „საქართველოს გაერთიანებული წყალმომარაგების კომპანის“
        მიერ შეთავაზებული პაკეტი არ აკმაყოფილებს მომხარებელს, კომპანია კისრულობს ვალდებულებას,
        განაცხადის შევსებიდან მინიმალურ ვადებში გასცეს ტექნიკური პირობის ნებართვა, რის შემდგომაც მომხმარებელი
        უკვეთავს კომპანიას ან თავად ასრულებს მიერთებასთან დაკავშირებულ სამუშაოებს.
      </p>

      <p class="font-semibold text-red-600">
        შენიშვნა: წყალმომარაგების სისტემაზე ახალი მომხმარებლის მიერთების საბანკო რეკვიზიტები.
      </p>

      <p class="text-sm font-medium">
        სს "ლიბერთი ბანკი" — ანგარიშის ნომერი:
        <span class="font-bold">GE20LB0113123325230068</span>;
        ბანკის კოდი:
        <span class="font-bold">LBRTGE22</span>;
        ს/კ:
        <span class="font-bold">412670097</span>
      </p>

    </div>

    <!-- Cards Grid -->
    <div class="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      <div
        v-for="item in applicationCards"
        :key="item.slug"
        class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border hover:shadow-xl transition"
      >
        <img
          src="/water-logo.jpg"
          class="mx-auto object-contain"
          style="width: 80px; height: auto;"
        />


        <h3 class="text-gray-900 font-semibold text-base leading-6">
          {{ item.title }}
        </h3>

        <NuxtLink
          :to="`/applications/${item.slug}`"
          class="mt-4 bg-[#0a4bff] text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          შევსება
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup>
const applicationCards = [
  {
    title:
      "წყალმომარაგების სისტემასთან ინდივიდუალურად მიერთებულ მრავალბინიან საცხოვრებელ სახლში უძრავი ქონების გაყოფის (აბონენტის გაყოფის) შესახებ",
    slug: "division",
  },
  { title: "იურიდიული პირის განაცხადის შევსება", slug: "legal-project" },
  { title: "ახალი მომხმარებლის მიერთება", slug: "new-connection" },
  { title: "ტექნიკური პირობების მიღება", slug: "technical-conditions" },
  { title: "დამატებითი სამუშაოების განაცხადი", slug: "extra-work" },
];

</script>
