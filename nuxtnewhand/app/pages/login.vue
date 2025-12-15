<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" required>
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script setup lang="ts">

// definePageMeta({
//   layout: 'auth' // 使用 auth 专用布局
// })

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // 登录逻辑
  console.log('Logging in with:', email.value, password.value)
}
</script>

<style scoped>
.login-page {
  text-align: center;
}
.form-group {
  margin-bottom: 1rem;
}
</style>