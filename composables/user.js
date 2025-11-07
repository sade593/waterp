import { ref, onMounted } from 'vue'

const user = ref(null)

export function useUser() {
  // Load once from localStorage
  onMounted(() => {
    if (!user.value) {
      const stored = localStorage.getItem('user')
      if (stored) {
        try {
          user.value = JSON.parse(stored)
        } catch {
          user.value = null
        }
      }
    }
  })

  function setUser(data) {
    user.value = data
    localStorage.setItem('user', JSON.stringify(data))
  }

  function logout() {
    localStorage.removeItem('user')
    user.value = null
  }

  return { user, setUser, logout }
}
