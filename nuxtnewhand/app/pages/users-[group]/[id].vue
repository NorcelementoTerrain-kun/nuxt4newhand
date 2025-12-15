

<script setup lang="ts">

</script>

<template>
  <div>
    User group: {{ $route.params.group }}<br />
    User ID: {{ $route.params.id }}
  </div>
   <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>

