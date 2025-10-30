<template>
  <div>
    
    <div class="bg-blue-800 text-white py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold mb-4">კომპანია</h1>
        <p class="text-xl opacity-90">საქართველოს გაერთიანებული წყალმომარაგების კომპანია</p>
      </div>
    </div>

    <div class="bg-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-8 -mt-16">

          <main class="lg:w-2/3">
            
            <!-- ✅ ისტორია -->
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8 mb-10">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">ისტორია</h3>
              </div>

              <div class="text-gray-700 leading-relaxed space-y-4">
                <p>
                  შ.პ.ს. „საქართველოს გაერთიანებული წყალმომარაგების კომპანია" (UWSCG), სახელმწიფო საკუთრებაში არსებული შეზღუდული პასუხისმგებლობის საზოგადოებაა, რომლის 100% წილის მფლობელი სახელმწიფოა, ხოლო პარტნიორი - საქართველოს ინფრასტრუქტურის სამინისტრო.
                </p>
                <p>
                  კომპანია დაარსდა 2010 წლის 14 იანვარს, საქართველოს ეკონომიკის მინისტრის 2010 წლის 11 იანვრის N1-1/13 ბრძანების საფუძველზე...
                </p>
                <p>
                  კომპანიის სტრუქტურა შედგება თბილისის სათავო ოფისისგან, 11 რეგიონული ფილიალისა და 55 სერვის ცენტრისგან...
                </p>
              </div>
            </div>

            <!-- ✅ მიზანი -->
            <div class="bg-gradient-to-r from-neutral-50 to-white rounded-xl shadow-lg border border-neutral-100 p-8">
              <div class="border-l-4 border-blue-800 pl-6 mb-6">
                <h3 class="text-2xl font-bold text-gray-800">მიზანი</h3>
              </div>

              <div class="text-gray-700 leading-relaxed space-y-4">
                <p>
                  კომპანიის მიზანი გამომდინარე იქიდან, რომ სრული მოსახლეობისთვის წყალმომარაგების სერვისზე ხელმისაწვდომობა ქვეყნის უმთავრეს პრიორიტეტს წარმოადგენს, კომპანია მომავალშიც აქტიურად გეგმავს მასშტაბური ინფრასტრუქტურული პროექტების განხორციელებას, რომელთა უმთავრესი მიზანიც etapobrivad კომპანიის დაფარვის არეალში მყოფი ყველა ურბანული და არაურბანული დასახლების სტანდარტის შესაბამისი უწყვეტი წყალმომარაგებით უზრუნველყოფაა.
                </p>
                
                <p>კომპანიის მიზნებია:</p>

                <ul class="list-disc pl-6 space-y-2">
                  <li>დაფარვის არეალში მოსახლეობის უზრუნველყოფა სტანდარტის შესაბამისი წყალმომარაგებით;</li>
                  <li>გარემოზე მავნე ზემოქმედების შესამცირებლად, თანამედროვე გამწმენდი ნაგებობების მშენებლობა;</li>
                </ul>
              </div>
            </div>

          </main>

          <!-- ✅ მარჯვენა მენიუ იგივე დარჩა -->
          <aside class="lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg border border-neutral-100 sticky top-28">
              <div class="bg-gradient-to-b from-slate-50 to-white p-6 rounded-t-xl">
                <h3 class="text-xl font-bold text-gray-800 border-l-4 border-blue-800 pl-4">
                  კომპანია
                </h3>
              </div>

              <nav class="p-6">
                <ul class="space-y-3">
                  <li>
                    <NuxtLink to="/company/director" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-user mr-3 text-gray-500"></i>
                      <span>დირექტორი</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/company/about" class="flex items-center p-3 bg-blue-50 text-blue-800 rounded-lg font-semibold border border-blue-200">
                      <i class="fas fa-building mr-3 text-blue-800"></i>
                      <span>კომპანია</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/company/deputies" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-users mr-3 text-gray-500"></i>
                      <span>მოადგილეები</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/company/vacancies" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-briefcase mr-3 text-gray-500"></i>
                      <span>ვაკანსია</span>
                    </NuxtLink>
                  </li>
                  
                  <li>
                    <NuxtLink to="/company/audit" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-chart-line mr-3 text-gray-500"></i>
                      <span>აუდირებული ფინანსური ანგარიშება</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/company/buisness-plan" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-file-alt mr-3 text-gray-500"></i>
                      <span>ბიზნეს-გეგმა</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/company/personal" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-shield-alt mr-3 text-gray-500"></i>
                       <span>პერსონალური ოფიცერი</span>
                    </NuxtLink>
                  </li>

                  <li>
                    <NuxtLink to="/company/quality" class="flex items-center p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      <i class="fas fa-check-circle mr-3 text-gray-500"></i>
                      <span>ხარისხის პოლიტიკა</span>
                    </NuxtLink>
                  </li>

                </ul>
              </nav>
            </div>
          </aside>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
