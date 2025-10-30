<template>
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gray-800 rounded-full filter blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 py-10 lg:py-32 relative z-10">
  <div class="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
    <!-- ტექსტური ნაწილი -->
    <div class="slide-up flex flex-col items-center lg:items-start">
      <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
        სუფთა წყალი <br>
        <span class="text-gradient">ყველა ოჯახს</span>
      </h1>

      <p class="text-xl text-gray-600 mb-8 leading-relaxed max-w-md">
        უზრუნველვყოფთ 24-საათიან, უწყვეტ და ხარისხიან წყალმომარაგებას
        1.2 მილიონზე მეტი აბონენტისთვის მთელი საქართველოს მასშტაბით.
      </p>

      <div class="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
        <button class="gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 ripple">
          <i class="fas fa-tachometer-alt mr-2"></i>
          ჩვენების დაფიქსირება
        </button>
        <button class="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-800 hover:text-blue-800 transition-all duration-300">
          <i class="fas fa-credit-card mr-2"></i>
          ონლაინ გადახდა
        </button>
      </div>

      <!-- სტატისტიკა -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center lg:justify-start">
        <div>
          <div class="text-3xl font-bold text-blue-800 mb-1">1.2M+</div>
          <div class="text-sm text-gray-600">აბონენტი</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-blue-800 mb-1">165+</div>
          <div class="text-sm text-gray-600">ლოკაცია</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-blue-800 mb-1">110+</div>
          <div class="text-sm text-gray-600">პროექტი</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-blue-800 mb-1">24/7</div>
          <div class="text-sm text-gray-600">მომსახურება</div>
        </div>
      </div>
    </div>

    <!-- სურათი -->
    <div class="relative hidden lg:block">
      <div class="relative">
        <div class="absolute inset-0 gradient-primary opacity-10 rounded-3xl transform rotate-6"></div>
        <div class="relative bg-white rounded-3xl shadow-2xl p-8">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f8fafc' width='400' height='300'/%3E%3Cpath fill='%231e3a8a' d='M200 80c0 0-40 40-40 70c0 22 18 40 40 40s40-18 40-40C240 120 200 80 200 80z' opacity='0.1'/%3E%3Cpath fill='%231e3a8a' d='M200 100c0 0-30 30-30 50c0 16 14 30 30 30s30-14 30-30C230 130 200 100 200 100z' opacity='0.2'/%3E%3Cpath fill='%231e3a8a' d='M200 120c0 0-20 20-20 35c0 11 9 20 20 20s20-9 20-20C220 140 200 120 200 120z'/%3E%3Ccircle cx='150' cy='220' r='30' fill='%231e3a8a' opacity='0.1'/%3E%3Ccircle cx='250' cy='220' r='25' fill='%231e3a8a' opacity='0.15'/%3E%3Cpath stroke='%231e3a8a' stroke-width='2' fill='none' d='M100 250 Q150 230 200 240 T300 250' opacity='0.3'/%3E%3C/svg%3E" alt="Water illustration" class="w-full h-auto float-animation">
          <div class="absolute bottom-4 right-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <i class="fas fa-check-circle mr-2"></i>
            ISO სერტიფიცირებული
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </section>
  <!-- Quick Services -->
  <section class="py-16 mt-20 relative z-20">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Service Card 1 -->
        <div class="bg-white rounded-2xl shadow-modern p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div class="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-file-invoice text-white text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">დავალიანება</h3>
          <p class="text-gray-600 text-sm mb-3">შეამოწმეთ თქვენი ბალანსი ონლაინ</p>
          <a href="#" class="text-blue-800 font-medium text-sm flex items-center group-hover:text-blue-900">
            შემოწმება <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <!-- Service Card 2 -->
        <div class="bg-white rounded-2xl shadow-modern p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div class="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-tachometer-alt text-white text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">ჩვენების დაფიქსირება</h3>
          <p class="text-gray-600 text-sm mb-3">მრიცხველის მონაცემები ონლაინ</p>
          <a href="#" class="text-green-700 font-medium text-sm flex items-center group-hover:text-green-800">
            დაფიქსირება <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <!-- Service Card 3 -->
        <div class="bg-white rounded-2xl shadow-modern p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div class="w-14 h-14 bg-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-mobile-alt text-white text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">*303# სერვისი</h3>
          <p class="text-gray-600 text-sm mb-3">უფასო მობილური სერვისი</p>
          <a href="#" class="text-purple-700 font-medium text-sm flex items-center group-hover:text-purple-800">
            გაიგე მეტი <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <!-- Service Card 4 -->
        <div class="bg-white rounded-2xl shadow-modern p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div class="w-14 h-14 bg-red-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-exclamation-triangle text-white text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">ავარია 24/7</h3>
          <p class="text-gray-600 text-sm mb-3">ცხელი ხაზი: 2 93 00 00</p>
          <a href="tel:2930000" class="text-red-700 font-medium text-sm flex items-center group-hover:text-red-800">
            დარეკვა <i class="fas fa-phone ml-2 transform group-hover:scale-110 transition-transform"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="py-10 lg:py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-sky-600 font-semibold text-sm uppercase tracking-wider">ჩვენ შესახებ</span>
          <h2 class="text-3xl lg:text-4xl text-center lg:text-left font-bold text-gray-900 mt-2 mb-6">
            თანამედროვე ინფრასტრუქტურა <br>
            <span class="text-gradient">მთელი საქართველოსთვის</span>
          </h2>
          <p class="text-gray-600 text-lg mb-6 leading-relaxed">
            საქართველოს გაერთიანებული წყალმომარაგების კომპანია არის ქვეყნის მასშტაბით
            წყლის მიწოდებისა და წყალარინების სისტემების მართვაზე პასუხისმგებელი უმსხვილესი კომპანია.
          </p>
          <p class="text-gray-600 mb-8">
            ჩვენ ვმუშაობთ 165-ზე მეტ ლოკაციაზე და ვემსახურებით 1.2 მილიონზე მეტ აბონენტს,
            უზრუნველვყოფთ მაღალი ხარისხის სასმელი წყლის მიწოდებას 24/7 რეჟიმში.
          </p>

          <div class="grid sm:grid-cols-2 gap-6">
            <div class="flex items-start">
              <div class="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <i class="fas fa-shield-alt text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">უსაფრთხოება</h4>
                <p class="text-gray-600 text-sm">ISO სტანდარტების შესაბამისი წყლის ხარისხი</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                <i class="fas fa-clock text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">24/7 სერვისი</h4>
                <p class="text-gray-600 text-sm">უწყვეტი მომსახურება და ტექნიკური მხარდაჭერა</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="relative bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8">
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white rounded-xl p-6 text-center shadow-sm">
                <div class="text-3xl font-bold text-sky-600 mb-2">98%</div>
                <p class="text-gray-600 text-sm">კმაყოფილების დონე</p>
              </div>
              <div class="bg-white rounded-xl p-6 text-center shadow-sm">
                <div class="text-3xl font-bold text-sky-600 mb-2">15+</div>
                <p class="text-gray-600 text-sm">წლიანი გამოცდილება</p>
              </div>
              <div class="bg-white rounded-xl p-6 text-center shadow-sm">
                <div class="text-3xl font-bold text-sky-600 mb-2">2000+</div>
                <p class="text-gray-600 text-sm">თანამშრომელი</p>
              </div>
              <div class="bg-white rounded-xl p-6 text-center shadow-sm">
                <div class="text-3xl font-bold text-sky-600 mb-2">110+</div>
                <p class="text-gray-600 text-sm">აქტიური პროექტი</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <span class="text-sky-600 font-semibold text-sm uppercase tracking-wider">ჩვენი პროექტები</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">მიმდინარე სამუშაოები</h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          110-ზე მეტი ინფრასტრუქტურული პროექტი მიმდინარეობს ქვეყნის მასშტაბით
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div class="bg-white rounded-2xl shadow-modern overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-48 bg-gradient-to-br from-sky-100 to-blue-100 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="fas fa-city text-sky-200 text-6xl"></i>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">მიმდინარე</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">თეთრიწყაროს მუნიციპალიტეტი</h3>
            <p class="text-gray-600 mb-4">15 სოფელში მიმდინარეობს წყალმომარაგების სისტემის რეაბილიტაცია</p>

            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-users mr-2 text-sky-500"></i>
                <span>21,500+ ბენეფიციარი</span>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-600">პროგრესი</span>
                  <span class="font-semibold text-gray-900">70%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div class="gradient-primary h-2 rounded-full progress-animation" style="width: 70%"></div>
                </div>
              </div>
              <a href="#" class="inline-flex items-center text-sky-600 font-medium text-sm hover:text-sky-700 group">
                დეტალურად
                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="bg-white rounded-2xl shadow-modern overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-100 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="fas fa-mountain text-emerald-200 text-6xl"></i>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">3 პროექტი</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">დაბა აბასთუმანი</h3>
            <p class="text-gray-600 mb-4">სამი მასშტაბური პროექტი დასრულდება 2025 წლის ბოლოსთვის</p>

            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-water mr-2 text-emerald-500"></i>
                <span>24-საათიანი წყალმომარაგება</span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-calendar-alt mr-2 text-emerald-500"></i>
                <span>დასრულება: 2025</span>
              </div>
              <a href="#" class="inline-flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 group">
                დეტალურად
                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="bg-white rounded-2xl shadow-modern overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-48 bg-gradient-to-br from-violet-100 to-purple-100 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="fas fa-network-wired text-violet-200 text-6xl"></i>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">რეაბილიტაცია</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">ქალაქი ყვარელი</h3>
            <p class="text-gray-600 mb-4">წყალმომარაგება-წყალარინების სისტემის სრული რეაბილიტაცია</p>

            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-users mr-2 text-violet-500"></i>
                <span>10,000 ბენეფიციარი</span>
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <i class="fas fa-cog mr-2 text-violet-500 animate-spin"></i>
                <span>მიმდინარე სამუშაოები</span>
              </div>
              <a href="#" class="inline-flex items-center text-violet-600 font-medium text-sm hover:text-violet-700 group">
                დეტალურად
                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          ყველა პროექტის ნახვა
          <i class="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">ჩვენი სერვისები</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          თანამედროვე ტექნოლოგიები და საუკეთესო სერვისი თქვენი კომფორტისთვის
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="text-center group">
          <div class="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-mobile-alt text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">მობილური აპლიკაცია</h3>
          <p class="text-gray-600">მართეთ თქვენი ანგარიში სმარტფონიდან ნებისმიერ დროს</p>
        </div>

        <!-- Feature 2 -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-chart-line text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">ონლაინ მონიტორინგი</h3>
          <p class="text-gray-600">წყლის მოხმარების დეტალური სტატისტიკა რეალურ დროში</p>
        </div>

        <!-- Feature 3 -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-bell text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">შეტყობინებები</h3>
          <p class="text-gray-600">მიიღეთ მნიშვნელოვანი ინფორმაცია SMS და Email-ით</p>
        </div>

        <!-- Feature 4 -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-tools text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">ტექნიკური მხარდაჭერა</h3>
          <p class="text-gray-600">კვალიფიციური სპეციალისტები 24/7 თქვენს სამსახურში</p>
        </div>

        <!-- Feature 5 -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-file-contract text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">ელექტრონული დოკუმენტები</h3>
          <p class="text-gray-600">ყველა საჭირო დოკუმენტი ხელმისაწვდომია ონლაინ</p>
        </div>

        <!-- Feature 6 -->
        <div class="text-center group">
          <div class="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-headset text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">ონლაინ კონსულტაცია</h3>
          <p class="text-gray-600">დაუკავშირდით ოპერატორს ვებსაიტიდან პირდაპირ</p>
        </div>
      </div>
    </div>
  </section>

  <!-- News Section -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center mb-12">
        <div>
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">სიახლეები</h2>
          <p class="text-gray-600 mt-2">ბოლო განახლებები და მნიშვნელოვანი ინფორმაცია</p>
        </div>
        <a href="#" class="hidden md:flex items-center text-sky-600 font-medium hover:text-sky-700">
          ყველა სიახლე
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- News Card 1 -->
        <article class="bg-white rounded-2xl shadow-modern overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-48 bg-gradient-to-br from-sky-100 to-blue-100 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="fas fa-newspaper text-sky-200 text-6xl"></i>
            </div>
            <div class="absolute top-4 left-4">
                            <span class="bg-white/90 backdrop-blur text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                2023 დეკემბერი
                            </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
              200,000+ ბენეფიციარი ისარგებლებს უწყვეტი წყალმომარაგებით
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
              2023 წელს დასრულებული პროექტების შედეგად 200 ათასზე მეტი მოქალაქე ისარგებლებს
              გაუმჯობესებული წყალმომარაგების სერვისით.
            </p>
            <a href="#" class="inline-flex items-center text-sky-600 font-medium text-sm hover:text-sky-700">
              წაიკითხე მეტი
              <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </article>

        <!-- News Card 2 -->
        <article class="bg-white rounded-2xl shadow-modern overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-100 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="fas fa-bullhorn text-emerald-200 text-6xl"></i>
            </div>
            <div class="absolute top-4 left-4">
                            <span class="bg-white/90 backdrop-blur text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                განცხადება
                            </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
              ახალი ონლაინ სერვისების დანერგვა 2024 წლიდან
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
              კომპანია ნერგავს ახალ ციფრულ სერვისებს, რომლებიც გაამარტივებს
              აბონენტების მომსახურებას.
            </p>
            <a href="#" class="inline-flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700">
              გაიგე მეტი
              <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </article>

        <!-- News Card 3 -->
        <article class="bg-white rounded-2xl shadow-modern overflow-hidden hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-48 bg-gradient-to-br from-violet-100 to-purple-100 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="fas fa-trophy text-violet-200 text-6xl"></i>
            </div>
            <div class="absolute top-4 left-4">
                            <span class="bg-white/90 backdrop-blur text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                მიღწევა
                            </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">
              ISO სერტიფიკატის განახლება წარმატებით დასრულდა
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">
              კომპანიამ წარმატებით გაიარა საერთაშორისო სტანდარტების შესაბამისობის აუდიტი.
            </p>
            <a href="#" class="inline-flex items-center text-violet-600 font-medium text-sm hover:text-violet-700">
              დეტალურად
              <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gray-700 rounded-full filter blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
        გახდით ჩვენი აბონენტი
      </h2>
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        შემოუერთდით 1.2 მილიონზე მეტ მომხმარებელს და ისარგებლეთ
        საერთაშორისო სტანდარტების შესაბამისი წყალმომარაგების სერვისით
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <button class="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          <i class="fas fa-file-contract mr-2"></i>
          მიერთების პირობები
        </button>
        <button class="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
          <i class="fas fa-phone mr-2"></i>
          დაგვირეკეთ: 2 93 00 00
        </button>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">დაგვიკავშირდით</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          ჩვენ მზად ვართ უპასუხოთ თქვენს ნებისმიერ კითხვას
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 mb-12">
        <!-- Contact Card 1 -->
        <div class="text-center">
          <div class="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-phone text-white text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">ტელეფონი</h3>
          <p class="text-sky-600 font-semibold text-xl mb-1">2 93 00 00</p>
          <p class="text-gray-600 text-sm">ორშ-პარ: 09:00 - 18:00</p>
        </div>

        <!-- Contact Card 2 -->
        <div class="text-center">
          <div class="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-envelope text-white text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">ელ-ფოსტა</h3>
          <p class="text-emerald-600 font-semibold text-xl mb-1">info@water.gov.ge</p>
          <p class="text-gray-600 text-sm">24 საათში გიპასუხებთ</p>
        </div>

        <!-- Contact Card 3 -->
        <div class="text-center">
          <div class="w-16 h-16 bg-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-map-marker-alt text-white text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">მისამართი</h3>
          <p class="text-violet-600 font-semibold text-xl mb-1">თბილისი</p>
          <p class="text-gray-600 text-sm">ანა პოლიტკოვსკაია 5</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="max-w-3xl mx-auto">
        <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">გამოგვიგზავნეთ შეტყობინება</h3>
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-medium mb-2">სახელი *</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sky-500 focus:outline-none transition form-modern">
              </div>
              <div>
                <label class="block text-gray-700 font-medium mb-2">გვარი *</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sky-500 focus:outline-none transition form-modern">
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-medium mb-2">ელ-ფოსტა *</label>
                <input type="email" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sky-500 focus:outline-none transition form-modern">
              </div>
              <div>
                <label class="block text-gray-700 font-medium mb-2">ტელეფონი</label>
                <input type="tel" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sky-500 focus:outline-none transition form-modern">
              </div>
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">შეტყობინება *</label>
              <textarea rows="5" class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sky-500 focus:outline-none transition form-modern resize-none"></textarea>
            </div>

            <div class="text-center">
              <button type="submit" class="gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                გაგზავნა
                <i class="fas fa-paper-plane ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <button id="backToTop" class="fixed bottom-8 right-8 w-12 h-12 gradient-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 opacity-0 invisible z-50">
    <i class="fas fa-chevron-up text-white"></i>
  </button>

</template>

<script>
import '~/assets/css/main.css'
</script>

<style>
@import url("~/assets/css/main.css");
</style>