<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// registration form data
const form = ref({
  name: '',
  email: '',
  password: '',
  phone: ''
})

function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.password) {
    alert('გთხოვთ შეავსოთ ყველა ველი!')
    return
  }

  // ✅ Save the user to localStorage
  localStorage.setItem('user', JSON.stringify({
    name: form.value.name,
    email: form.value.email,
    password: form.value.password,
    phone: form.value.phone
  }))

  // ✅ Redirect to profile page
  router.push('/profile')
}
</script>

