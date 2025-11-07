<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <div class="text-center mb-6">
        <img src="/wlogo.png" alt="Water Logo" class="mx-auto h-16 mb-2" />
        <h2 class="text-2xl font-bold text-blue-900">ავტორიზაცია</h2>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-gray-600 mb-2" for="email">ელფოსტა</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full border-b border-gray-300 focus:border-blue-500 outline-none p-2"
            placeholder="შეიყვანეთ ელფოსტა"
          />
        </div>

        <div>
          <label class="block text-gray-600 mb-2" for="password">პაროლი</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full border-b border-gray-300 focus:border-blue-500 outline-none p-2"
            placeholder="შეიყვანეთ პაროლი"
          />
        </div>

        <!-- Show confirm password & phone only in registration mode -->
        <div v-if="isRegister">
          <label class="block text-gray-600 mb-2" for="confirmPassword">დაადასტურეთ პაროლი</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            required
            class="w-full border-b border-gray-300 focus:border-blue-500 outline-none p-2"
            placeholder="გაიმეორეთ პაროლი"
          />

          <label class="block text-gray-600 mt-4 mb-2" for="phone">ტელეფონი</label>
          <input
            id="phone"
            v-model="phone"
            type="tel"
            required
            class="w-full border-b border-gray-300 focus:border-blue-500 outline-none p-2"
            placeholder="მაგ. 555123456"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded-lg transition"
        >
          {{ isRegister ? "რეგისტრაცია" : "ავტორიზაცია" }}
        </button>

        <p class="text-center text-sm text-gray-600">
          {{ isRegister ? "უკვე გაქვს ანგარიში?" : "არ გაქვს ანგარიში?" }}
          <button @click="toggleMode" type="button" class="text-blue-600 hover:underline">
            {{ isRegister ? "შესვლა" : "რეგისტრაცია" }}
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

function login() {
  const stored = localStorage.getItem('user')
  if (stored) {
    const savedUser = JSON.parse(stored)
    if (savedUser.email === form.email && savedUser.password === form.password) {
      // ✅ Update localStorage with name if needed
      localStorage.setItem('user', JSON.stringify({
        ...savedUser,
        name: savedUser.name || 'მომხმარებელი'
      }))
      router.push('/profile')
    } else {
      alert('არასწორი ელ.ფოსტა ან პაროლი')
    }
  }
}


const router = useRouter();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const phone = ref("");
const isRegister = ref(false);

onMounted(() => {
  // if user exists in localStorage, default to login
  const existingUser = localStorage.getItem("user");
  if (!existingUser) isRegister.value = true;
});

const toggleMode = () => {
  isRegister.value = !isRegister.value;
};

const handleSubmit = () => {
  if (isRegister.value) {
    // Registration logic
    if (password.value !== confirmPassword.value) {
      alert("პაროლები არ ემთხვევა!");
      return;
    }

    const userData = {
      email: email.value,
      password: password.value,
      phone: phone.value,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("რეგისტრაცია წარმატებით დასრულდა!");
    isRegister.value = false;
  } else {
    // Login logic
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email.value && storedUser.password === password.value) {
      alert("წარმატებით გაიარეთ ავტორიზაცია!");
      router.push("/profile");
    } else {
      alert("მონაცემები არასწორია ან არ ხართ რეგისტრირებული!");
      isRegister.value = true;
    }
  }
};
</script>
