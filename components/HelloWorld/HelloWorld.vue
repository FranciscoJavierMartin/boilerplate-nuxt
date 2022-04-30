<template>
  <div>
    <h1 class="color-blue">{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
const msg = 'Hello world';
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.color-blue {
  color: $my-color;
}
</style>
