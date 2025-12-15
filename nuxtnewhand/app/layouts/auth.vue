<template>
  <div class="layout-auth">
    <!-- 登录页专用布局（无头部/底部） -->
    <div class="auth-container">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false // 明确声明不使用默认布局
})
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>