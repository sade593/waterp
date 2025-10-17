<template>
  <div class="bg-gray-50 py-16">
    <div class="container mx-auto px-8">

      <h1 class="text-3xl font-bold text-gray-800 border-b pb-4 mb-10">კომპანია</h1>

      <div class="flex flex-col md:flex-row gap-16">

        <main class="w-full md:w-2/3">
          <section>
            <h2 class="text-2xl font-semibold text-blue-700 border-b-2 border-blue-700 pb-2 mb-4">
              ისტორია
            </h2>
            <p class="text-gray-700 leading-relaxed mb-6">
              შ.პ.ს. „საქართველოს გაერთიანებული წყალმომარაგების კომპანია“ (UWSCG), სახელმწიფო საკუთრებაში არსებული შეზღუდული პასუხისმგებლობის საზოგადოებაა, რომლის 100% წილის მფლობელი სახელმწიფოა, ხოლო პარტნიორი - საქართველოს ინფრასტრუქტურის სამინისტრო. კომპანია დაარსდა 2010 წლის 14 იანვარს, საქართველოს ეკონომიკის მინისტრის 2010 წლის 11 იანვრის N1-1/13 ბრძანების საფუძველზე. საქართველოს გაერთიანებული წყალმომარაგების კომპანია წყალმომარაგებისა და წყალარინების ქსელით მომსახურებას ახორციელებს მთელი საქართველოს მასშტაბით, ურბანული ტიპის დასახლებებისთვის, ქ. თბილისის, ქ. მცხეთის, ქ. რუსთავის, გარდაბნის მუნიციპალიტეტისა და აჭარის ავტონომიური რესპუბლიკის გარდა.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
              კომპანიის სტრუქტურა შედგება თბილისის სათავო ოფისისგან, 11 რეგიონული ფილიალისა და 55 სერვის ცენტრისგან. კომპანიაში დასაქმებულთა საერთო რაოდენობა შეადგენს 3 500 - მდე ადამიანს. თანამშრომელთა 60% დასაქმებულია ტექნიკურ სფეროში, 24% -კომერციულ / ფინანსურ სფეროში, ხოლო 16% - ადმინისტრაციულ სფეროში.
            </p>
          </section>
        </main>

        <aside class="w-full md:w-1/3">
          <div class="sticky top-28">
            <ul>
              <li class="mb-5">
                <NuxtLink to="/company/director" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>დირექტორი</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/company/about" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>კომპანია</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/company/deputies" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>მოადგილეები</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/company/vacancies" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ვაკანსია</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/company/audit" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>აუდირებული ფინანსური ანგარიშება</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/company/personal" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>პერსონალურ მონაცემთა დაცვის ოფიცერი</span>
                </NuxtLink>
              </li>
              <li class="mb-5">
                <NuxtLink to="/company/quality" class="flex items-center text-blue-800 hover:underline">
                  <i class="fas fa-arrow-right mr-3 text-sm"></i>
                  <span>ხარისხის მართვის პოლიტიკა</span>
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
</script>

<style scoped>
</style>