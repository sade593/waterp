<template>
  <div class="min-h-screen bg-[#f6f9ff] pb-16">

    <!-- Blue Header like other pages -->
    <section class="bg-blue-800 text-white py-14 text-center">
      <h1 class="text-3xl font-bold tracking-wide">
        წყალმომარაგების სისტემასთან ინდივიდუალურად მიერთებულ მრავალბინიან საცხოვრებელ
        სახლში უძრავი ქონების გაყოფის (აბონენტის გაყოფის) შესახებ განაცხადი
      </h1>
    </section>

    <!-- Intro text from PDF -->
    <section class="max-w-5xl mx-auto mt-8 mb-6 px-4 text-gray-700 leading-relaxed space-y-3">
      <p>
        წყალმომარაგების ლიცენზიატი ვალდებულია, დაუყოვნებლივ დაარეგისტრიროს განმცხადებლის მიერ
        წარდგენილი ნებისმიერი სახის წერილობითი განცხადება (განაცხადი) და დაუყოვნებლივ გასცეს
        განაცხადის რეგისტრაციის ნომერი და რეგისტრაციის თარიღი, ასევე რეგისტრაციისთანავე
        განმცხადებელს გაუგზავნოს წესებით განსაზღვრული ინფორმაცია ტექსტური შეტყობინებით.
      </p>
      <p>
        განაცხადთან დაკავშირებული ინფორმაციის შეტყობინება ხდება ელექტრონული ფორმით,
        მომხმარებლის მიერ განაცხადში მითითებულ ძირითად და ალტერნატიულ ნომრებზე ან/და
        ელექტრონულ მისამართზე.
      </p>
    </section>

    <!-- Main Form Card -->
    <section class="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 px-6 md:px-10">

      <!-- Header meta (Reg. №, Date, Addressee) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label class="label">რეგ. № (ივსება ლიცენზიატის მიერ)</label>
          <input
            type="text"
            class="input-field bg-gray-100"
            disabled
            placeholder="ივსება ლიცენზიატის მიერ"
          />
        </div>
        <div>
          <label class="label">თარიღი</label>
          <input
            v-model="form.applicationDate"
            type="date"
            class="input-field"
          />
        </div>
        <div>
          <label class="label">განაცხადის ადრესატი (ლიცენზიატი)</label>
          <input
            v-model="form.addressee"
            type="text"
            class="input-field"
            placeholder="მაგ: საქართველოს გაერთიანებული წყალმომარაგების კომპანია"
          />
        </div>
      </div>

      <!-- I. ძირითადი ინფორმაცია -->
      <h2 class="section-title">I. ძირითადი ინფორმაცია</h2>
      <div class="space-y-4 mb-8">

        <!-- 1 -->
        <div>
          <label class="label">
            1. მიერთების მსურველი (განმცხადებელი) – სახელი, გვარი ან იურიდიული პირის სახელწოდება *
          </label>
          <input
            v-model="form.applicantName"
            type="text"
            required
            class="input-field"
          />
        </div>

        <!-- 2 -->
        <div>
          <label class="label">
            2. პირადი ნომერი / საიდენტიფიკაციო კოდი *
          </label>
          <input
            v-model="form.personalId"
            type="text"
            class="input-field"
            required
          />
        </div>

        <!-- 3. საკონტაქტო ინფორმაცია -->
        <div>
          <label class="label">
            3. განმცხადებლის საკონტაქტო ინფორმაცია
          </label>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 3.1 მისამართი -->
          <div>
            <label class="label">3.1. მისამართი *</label>
            <input
              v-model="form.contactAddress"
              type="text"
              class="input-field"
              required
            />
          </div>

          <!-- 3.3 ელფოსტა -->
          <div>
            <label class="label">
              3.3. ელექტრონული ფოსტის მისამართი (სურვილის შემთხვევაში)
            </label>
            <input
              v-model="form.email"
              type="email"
              class="input-field"
              placeholder="example@mail.com"
            />
          </div>
        </div>

        <!-- 3.2 ტელეფონები -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="label">
              3.2. ძირითადი მობილური ნომერი *
            </label>
            <input
              v-model="form.phonePrimary"
              type="text"
              class="input-field"
              required
              placeholder="მაგ: 555 123 456"
            />
          </div>
          <div>
            <label class="label">
              3.2. ალტერნატიული მობილური ნომერი
            </label>
            <input
              v-model="form.phoneAlt"
              type="text"
              class="input-field"
              placeholder="არ არის სავალდებულო"
            />
          </div>
        </div>

        <!-- 4 -->
        <div>
          <label class="label">
            4. არსებული (ძირითადი) აბონენტის № *
          </label>
          <input
            v-model="form.existingAbonentNo"
            type="text"
            class="input-field"
            required
          />
        </div>

        <!-- 5 -->
        <div>
          <label class="label">
            5. მიერთების მსურველის (განმცხადებლის) საბანკო რეკვიზიტები
          </label>
          <textarea
            v-model="form.bankDetails"
            class="input-field"
            rows="2"
            placeholder="სს ლიბერთი ბანკი, ანგარიშის №, ბანკის კოდი და სხვა"
          ></textarea>
        </div>

        <!-- 6 -->
        <div class="space-y-3">
          <p class="label">
            6. გამოყოფილი ობიექტის მონაცემები
          </p>

          <!-- 6.1 Address -->
          <div>
            <label class="label">
              6.1. ადგილი (მისამართი), სადაც მოთხოვნილია აბონენტის გაყოფა *
            </label>
            <input
              v-model="form.objectAddress"
              type="text"
              class="input-field"
              required
            />
          </div>

          <!-- 6.2 cadastral -->
          <div>
            <label class="label">
              6.2. გამოყოფილი უძრავი ქონების საკადასტრო კოდი, სადაც მოთხოვნილია წყალმომარაგება
            </label>
            <input
              v-model="form.cadastralCode"
              type="text"
              class="input-field"
            />
          </div>

          <!-- 6.3 location -->
          <div>
            <label class="label">
              6.3. გამოყოფილი უძრავი ქონების მდებარეობა (ტერიტორიულ საზღვრებში)
            </label>
            <div class="flex flex-col sm:flex-row gap-4 mt-1">
              <label class="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="city"
                  v-model="form.objectLocationType"
                />
                თვითმმართველ ქალაქში
              </label>
              <label class="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="municipality"
                  v-model="form.objectLocationType"
                />
                სხვა მუნიციპალიტეტში
              </label>
            </div>
          </div>
        </div>

        <!-- 7 -->
        <div>
          <label class="label">
            7. მომხმარებლის (საფასურის გადახდაზე პასუხისმგებელი პირის) სახელი, გვარი ან იურიდიული პირის სახელწოდება
          </label>
          <input
            v-model="form.payerName"
            type="text"
            class="input-field"
          />
        </div>

        <!-- 8 -->
        <div>
          <label class="label">
            8. სასმელი წყლის მოხმარების მიზანი
          </label>
          <div class="flex flex-col sm:flex-row gap-4 mt-1">
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="household"
                v-model="form.consumptionPurpose"
              />
              საყოფაცხოვრებო
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="non_household"
                v-model="form.consumptionPurpose"
              />
              არასაყოფაცხოვრებო
            </label>
          </div>
        </div>

        <!-- 9 -->
        <div>
          <label class="label">
            9. მიერთების ტიპი
          </label>
          <div class="flex flex-col sm:flex-row flex-wrap gap-4 mt-1">
            <label class="inline-flex items-center gap-2">
              <input type="radio" value="full" v-model="form.connectionType" />
              სრული (სასმელი წყალი და წყალარინება)
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="water_only"
                v-model="form.connectionType"
              />
              მხოლოდ სასმელი წყალი
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="sewer_only"
                v-model="form.connectionType"
              />
              მხოლოდ წყალარინება
            </label>
          </div>
        </div>

        <!-- 9.1 -->
        <div class="space-y-3">
          <p class="label">
            9.1. მოთხოვნილი მიერთების ტიპის შესაბამისად, ასევე შეავსეთ:
          </p>
          <div>
            <label class="label">
              ა) სასმელი წყლის წყალმომარაგების სისტემაზე მიერთებისას – მოთხოვნილი მილის დიამეტრი (მმ)
            </label>
            <input
              v-model="form.pipeDiameter"
              type="text"
              class="input-field"
              placeholder="მაგ: 20"
            />
          </div>
          <div>
            <label class="label">
              ბ) წყალარინების სისტემაზე მიერთებისას: მრავალბინიანი სახლის წყალარინების არსებულ დგარზე (მილზე) მიერთება
            </label>
            <div class="flex flex-col sm:flex-row gap-4 mt-1">
              <label class="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="yes"
                  v-model="form.sewerConnectExisting"
                />
                დიახ
              </label>
              <label class="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="no"
                  v-model="form.sewerConnectExisting"
                />
                არა
              </label>
            </div>
            <p class="text-xs text-gray-500 mt-1">
              უარყოფითი პასუხის შემთხვევაში, განაცხადის ფორმა არ ივსება და ხარვეზდება.
            </p>
          </div>
        </div>

        <!-- 10 -->
        <div class="space-y-3">
          <p class="label">
            10. მრავალბინიანი საცხოვრებელი სახლი, სადაც მოთხოვნილია მიერთება, ინდივიდუალურად გამრიცხველიანებულია:
          </p>
          <div class="space-y-2">
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="yes"
                v-model="form.buildingMetered"
              />
              10.1. დიახ – ინდივიდუალურად გამრიცხველიანებულია
            </label>
            <div
              v-if="form.buildingMetered === 'yes'"
              class="ml-6 space-y-2"
            >
              <label class="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="smart"
                  v-model="form.meterType"
                />
                ა) ჭკვიანი მრიცხველებით გამრიცხველიანებულია
              </label>
              <label class="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="normal"
                  v-model="form.meterType"
                />
                ბ) გამრიცხველიანებულია (ჭკვიანი მრიცხველების გარეშე)
              </label>
            </div>

            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="no"
                v-model="form.buildingMetered"
              />
              10.2. არა – გაუმრიცხველიანებელ მრავალბინიან სახლში ...
            </label>
          </div>
        </div>

        <!-- 11 -->
        <div>
          <p class="label">
            11. გამოყოფილი უძრავი ქონების მომარაგებისთვის არ არის საჭირო ინდივიდუალური მრიცხველის მოწყობა და
            წყალმომარაგების სისტემის ან/და სხვა მოწყობილობების მოწყობა, რადგანაც ქონების გამოყოფამდეც სარგებლობდა
            ამავე წერტილიდან და არსებობს მესაკუთრის თანხმობა:
          </p>
          <div class="flex flex-col sm:flex-row gap-4 mt-1">
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="yes"
                v-model="form.noNewInfraNeeded"
              />
              დიახ
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="no"
                v-model="form.noNewInfraNeeded"
              />
              არ არის ამ პუნქტით გათვალისწინებული შემთხვევა
            </label>
          </div>
        </div>

        <!-- 12 -->
        <div class="space-y-2">
          <p class="label">
            12. (ივსება 10.1-ის შემთხვევაში) – მრავალბინიან სახლში, გამოყოფილი უძრავი ქონების მიერთების საფასურის ოდენობა
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="label">12. თანხა (ლარი)</label>
              <input
                v-model="form.feeAmount"
                type="number"
                min="0"
                step="0.01"
                class="input-field"
              />
            </div>
            <div>
              <label class="label">12.1. გადახდილია სრულად?</label>
              <div class="flex gap-4 mt-1">
                <label class="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    value="yes"
                    v-model="form.feePaidFull"
                  />
                  დიახ
                </label>
                <label class="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    value="no"
                    v-model="form.feePaidFull"
                  />
                  არა
                </label>
              </div>
            </div>
            <div>
              <label class="label">
                12.2. 24 თვეზე განწილვადებით გადახდის მოთხოვნა
              </label>
              <div class="flex gap-4 mt-1">
                <label class="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    value="yes"
                    v-model="form.installmentRequested"
                  />
                  დიახ
                </label>
                <label class="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    value="no"
                    v-model="form.installmentRequested"
                  />
                  არა
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- II. ძირითადი მოთხოვნა -->
        <h2 class="section-title">II. ძირითადი მოთხოვნა</h2>

        <!-- 13 -->
        <div>
          <p class="label">
            13. გთხოვთ, წინამდებარე განაცხადში მოცემული ინფორმაციის გათვალისწინებით,
            დადგენილ ვადაში დამარეგისტრიროთ აბონენტად და დაიწყოთ წყალმომარაგება ზემოაღნიშნულ მისამართზე.
          </p>
          <label class="inline-flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              v-model="form.confirmMainRequest"
            />
            ვეთანხმები წინამდებარე მოთხოვნას
          </label>
        </div>

        <!-- 14 -->
        <div>
          <p class="label">
            14. ამ განაცხადის ხელმოწერით ვადასტურებ განაცხადში მოცემული ინფორმაციის სისწორეს
            და ვიღებ ვალდებულებას, შევასრულო წესებითა და „მომსახურების ხარისხის წესებით“ განსაზღვრული
            ვალდებულებები, მათ შორის დროულად გადავიხადო დადგენილი საფასური.
          </p>
          <label class="inline-flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              v-model="form.confirmTerms"
              required
            />
            ვადასტურებ და ვეთანხმები პირობებს *
          </label>
        </div>

        <!-- III. დამატებითი ინფორმაცია -->
        <h2 class="section-title">III. დამატებითი ინფორმაცია</h2>

        <!-- 15 -->
        <div>
          <label class="label">
            15. მესაჭიროება საგადასახადო ანგარიშ-ფაქტურა:
          </label>
          <div class="flex flex-col sm:flex-row gap-4 mt-1">
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="yes"
                v-model="form.needTaxInvoice"
              />
              დიახ
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="no"
                v-model="form.needTaxInvoice"
              />
              არა
            </label>
          </div>
        </div>

        <!-- 16 -->
        <div>
          <label class="label">
            16. წყალმომარაგების ლიცენზიატის მიერ შეტყობინების გაგზავნის ფორმა:
          </label>
          <div class="flex flex-col sm:flex-row gap-4 mt-1">
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="written"
                v-model="form.notificationForm"
              />
              წერილობითი
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="electronic"
                v-model="form.notificationForm"
              />
              ელექტრონული
            </label>
          </div>
        </div>

        <!-- 17 -->
        <div>
          <label class="label">
            17. გამოყოფილი უძრავი ქონება ინდივიდუალურად მარაგდება ელექტროენერგიით:
          </label>
          <div class="flex flex-col sm:flex-row gap-4 mt-1">
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="no"
                v-model="form.electricitySupplied"
              />
              არა
            </label>
            <label class="inline-flex items-center gap-2">
              <input
                type="radio"
                value="yes"
                v-model="form.electricitySupplied"
              />
              დიახ
            </label>
          </div>
          <div class="mt-2">
            <label class="label">
              ელ. მომარაგების აბონენტის ნომერი (სურვილის შემთხვევაში)
            </label>
            <input
              v-model="form.electricAbonentNumber"
              type="text"
              class="input-field"
            />
          </div>
        </div>

        <!-- 18 -->
        <div class="space-y-2">
          <label class="label">
            18. განაცხადში მოცემული ჩემი პირადი ნომერი, ტელეფონის ნომერი და ელ. ფოსტის მისამართი:
          </label>
          <label class="inline-flex items-center gap-2">
            <input
              type="checkbox"
              v-model="form.useContactsForInfo"
            />
            ა) გამოყენებულ იქნეს სასმელი წყლის მიწოდებასთან დაკავშირებული ინფორმაციის შეტყობინების მიზნით
          </label>
        </div>

        <!-- IV. თანდართული დოკუმენტაცია -->
        <h2 class="section-title">IV. თანდართული დოკუმენტაცია</h2>

        <!-- 19 -->
        <div class="space-y-2">
          <p class="label">
            19. (ივსება 10.1-ის შემთხვევაში, გარდა 10.2 ან 11 პუნქტის შემთხვევისა) – მიერთების საფასურის გადახდის დამადასტურებელი საბუთი
          </p>
          <label class="inline-flex items-center gap-2">
            <input
              type="checkbox"
              v-model="form.attachPaymentDoc"
            />
            თანდართულია გადახდის დამადასტურებელი საბუთი
          </label>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div>
              <label class="label">19.1. საფასურის 50% გადახდა</label>
              <label class="inline-flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  v-model="form.fee50Percent"
                />
                მონიშნული
              </label>
            </div>
            <div>
              <label class="label">
                19.2. სხვა მოცულობა (არანაკლებ 50%-ის) – ციფრებში
              </label>
              <input
                v-model="form.otherFeeAmount"
                type="text"
                class="input-field"
              />
            </div>
            <div>
              <label class="label">
                19.3. განწილვადებით გადახდის შემთხვევაში – პირველი გადასახადის ოდენობა
              </label>
              <input
                v-model="form.firstInstallmentAmount"
                type="text"
                class="input-field"
              />
            </div>
          </div>
        </div>

        <!-- 20 -->
        <div>
          <label class="label">
            20. (ივსება 11 პუნქტში „დიახ“-ის შემთხვევაში) – თანდართულია ძირითადი ქონების მესაკუთრის თანხმობა
          </label>
          <label class="inline-flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              v-model="form.attachOwnerConsent"
            />
            მესაკუთრის თანხმობა თანდართულია
          </label>
        </div>

        <!-- 21 -->
        <div>
          <label class="label">
            21. სხვა თანდართული დოკუმენტაცია (სურვილის შემთხვევაში)
          </label>
          <label class="inline-flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              v-model="form.attachOtherDocs"
            />
            სხვა დოკუმენტაციის თანდართვა
          </label>
          <textarea
            v-model="form.otherDocsDescription"
            class="input-field mt-2"
            rows="2"
            placeholder="აღწერეთ სხვა თანდართული დოკუმენტები (თუ არსებობს)"
          ></textarea>
        </div>

        <!-- Signature -->
        <div class="border-t pt-6 mt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <label class="label">
              განმცხადებლის სახელი, გვარი (ხელმოწერის ველი)
            </label>
            <input
              v-model="form.signatureName"
              type="text"
              class="input-field"
              placeholder="სახელი, გვარი"
            />
          </div>
          <div>
            <label class="label">თარიღი</label>
            <input
              v-model="form.signatureDate"
              type="date"
              class="input-field"
            />
          </div>
        </div>

        <!-- Submit button -->
        <div class="pt-6 text-center">
          <button
            type="button"
            @click="onSubmit"
            class="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-3 rounded-xl shadow-md transition"
          >
            განაცხადის გაგზავნა
          </button>
        </div>

        <!-- Success message -->
        <p
          v-if="submitted"
          class="text-green-600 font-semibold text-center mt-4"
        >
          განაცხადი წარმატებით გაიგზავნა
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const submitted = ref(false);

const form = ref({
  // header
  applicationDate: "",
  addressee: "",

  // I. ძირითადი ინფორმაცია
  applicantName: "",
  personalId: "",
  contactAddress: "",
  phonePrimary: "",
  phoneAlt: "",
  email: "",
  existingAbonentNo: "",
  bankDetails: "",
  objectAddress: "",
  cadastralCode: "",
  objectLocationType: "",
  payerName: "",
  consumptionPurpose: "",
  connectionType: "",
  pipeDiameter: "",
  sewerConnectExisting: "",
  buildingMetered: "",
  meterType: "",
  noNewInfraNeeded: "",
  feeAmount: "",
  feePaidFull: "",
  installmentRequested: "",

  // II. მოთხოვნა
  confirmMainRequest: false,
  confirmTerms: false,

  // III. დამატებითი
  needTaxInvoice: "",
  notificationForm: "",
  electricitySupplied: "",
  electricAbonentNumber: "",
  useContactsForInfo: false,

  // IV. დოკუმენტაცია
  attachPaymentDoc: false,
  fee50Percent: false,
  otherFeeAmount: "",
  firstInstallmentAmount: "",
  attachOwnerConsent: false,
  attachOtherDocs: false,
  otherDocsDescription: "",

  // signature
  signatureName: "",
  signatureDate: "",
});

function onSubmit() {
  // front-end only – later backend dev will replace this
  // minimal required check: main required parts
  if (
    !form.value.applicantName ||
    !form.value.personalId ||
    !form.value.contactAddress ||
    !form.value.phonePrimary ||
    !form.value.existingAbonentNo ||
    !form.value.confirmTerms
  ) {
    alert("გთხოვთ შეავსოთ ყველა სავალდებულო ველი, მონიშნეთ დადასტურების ველი.");
    return;
  }

  submitted.value = true;
  // console.log("FORM DATA:", form.value) // backend dev can use this later
}
</script>

<style scoped>
.label {
  @apply block text-gray-800 font-medium mb-1;
}
.input-field {
  @apply w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}
.section-title {
  @apply text-lg font-bold text-gray-900 mt-6 mb-3;
}
</style>
