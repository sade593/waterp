<template>
  <div v-if="show" class="popup-overlay flex items-center justify-center">
    <div class="popup-container relative">

      <button @click="close" class="popup-close">
        <i class="fas fa-times"></i>
      </button>

      <div class="popup-header flex items-center justify-between">
        <h2 class="popup-title">
          📢 ლიცენზირებული მომსახურება
        </h2>
        <img src="/wlogo.png" alt="UWSCG" class="popup-logo" />
      </div>

      <div class="popup-content grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <div class="popup-left space-y-4">
          <h3 class="popup-subtitle">აქვს კითხვები ან სურს დახმარება?</h3>

          <button class="popup-btn-primary w-full">
            განცხადების შევსება <i class="fas fa-chevron-down ml-1"></i>
          </button>

          <button class="popup-btn-secondary w-full">
            ბარათების ჩამოტვირთვა
          </button>

          <a href="mailto:info@water.gov.ge" class="popup-mail">info@water.gov.ge</a>
        </div>

        <div class="popup-right space-y-6">
          <h3 class="popup-subtitle text-center">მომხმარებელთა ინფორმაციის ცენტრი</h3>

          <div class="popup-row">
            <i class="fas fa-phone"></i><p>032 293 00 00</p>
          </div>

          <div class="popup-row">
            <i class="fab fa-whatsapp"></i><p>595 918 511</p>
          </div>
        </div>

      </div>

      <p class="popup-footer">
            მობილურ ტელეფონზე *303# კოდის აკრეფით აბონენტს შეუძლია ისარგებლოს შემდეგი სახის მომსახურებით:

            მიიღოს და გამოაგზავნოს ინფორმაცია წყვეტაზე; გაიგოს მიმდინარე ბალანსი; მიიღოს ელექტრონული ქვითარი; შეამოწმოს აბონენტზე არსებული სატელეფონო ნომრების ნუსხა აქვე წაშალოს არასასურველი ნომერი; განმეორებით მიიღოს ბოლო sms შეტყობინება; დაამატოს აბონენტზე ახალი სატელეფონო ნომერი; გაიგოს სერვის ცენტრის მისამართი და ცხელი ხაზის ნომერი.

            აღნიშნული სერვისით სარგებლობა აბონენტებისთვის უფასოა!
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(true);
function close() { show.value = false }
</script>
