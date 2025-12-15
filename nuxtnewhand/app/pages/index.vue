<script setup lang="ts">
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26'))
</script>

<template>
  <div>
    <h1>Nuxt birthday</h1>
    <p>{{ date }}</p>
    <label for="locale-chooser">Preview a different locale</label>
    <select
      id="locale-chooser"
      v-model="locale"
    >
      <option
        v-for="loc of locales"
        :key="loc"
        :value="loc"
      >
        {{ loc }}
      </option>
    </select>
  </div>
</template>