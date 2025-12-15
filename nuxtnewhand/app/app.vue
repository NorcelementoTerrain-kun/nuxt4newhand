<script setup lang="ts">
const version = 2 + 1
const website = useWebsiteStore()

await callOnce(website.fetch)

const counter1 = useState('counter', () => Math.round(Math.random() * 1000))

</script>


<template>
  <div class="hello">
    Hello Nuxt {{ version }}!
  </div>
  <div>
  <NuxtLayout />

  </div>

  <AppAlert>
      This is an auto-imported component.
  </AppAlert>

  <main>
      <h1>我是：{{ website.name }}</h1>
      <p>我是 {{ website.description }}</p>
    </main>

  <div>
    Counter: {{ counter1 }}
    <button @click="counter1++">
      +
    </button>
    <button @click="counter1--">
      -
    </button>
  </div>

</template>


<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}




</style>
