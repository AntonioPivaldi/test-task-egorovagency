<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component"> </component>
      </transition>
    </RouterView>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.down-enter-from,
.up-leave-to {
  transform: translateY(100%);
}

.down-enter-active,
.down-leave-active,
.up-enter-active,
.up-leave-active {
  transition: 0.5s;
}

.down-leave-to,
.up-enter-from {
  transform: translateY(-100%);
}
</style>
