<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
