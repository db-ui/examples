<script setup lang="ts">
import { DBButton } from "@db-ui/v-components";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <main>
    <HeaderComponent/>
    <RouterView/>
  </main>
</template>
