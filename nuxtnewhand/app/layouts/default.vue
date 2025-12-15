<template>
  <div class="layout-default">
    <!-- 公共头部 -->
    <header class="header">
      <nav>
        <NuxtLink to="/" target="_blank">Home</NuxtLink>
        <NuxtLink to="/about" target="_blank">About</NuxtLink>
        <NuxtLink to="/login" target="_blank">Login</NuxtLink>
      </nav>
    </header>

    <!-- 页面内容容器 -->
    <main class="main-content">
      <NuxtPage />

    </main>

    <!-- 公共底部 -->
    <footer class="footer">
      <p>© 2024 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// // 默认布局逻辑（可添加全局逻辑）
// definePageMeta({
//   layout: false // 明确声明不使用默认布局
// })
</script>

