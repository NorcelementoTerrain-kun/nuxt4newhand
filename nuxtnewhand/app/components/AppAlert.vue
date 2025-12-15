<template>
  <span>
    <slot />
    <div id="jjjjjjjj">
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
  </span>
</template>


<script setup lang="ts">
const version = 2 + 1

const locales = useLocales()
const locale = useLocale()


</script>