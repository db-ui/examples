<script setup lang="ts">
import { DBButton } from "@db-ux/v-core-components";
</script>

<template>
  <main>
    <div
      data-density="functional"
      class="db-color-informational container-with-padding"
    >
      <h1>db-ux-functional</h1>
      <p>Use this as default for enterprise apps</p>
      <DBButton icon="plus">Test</DBButton>
    </div>
    <div
      data-density="regular"
      class="db-color-successful container-with-padding"
    >
      <h1>db-ux-regular</h1>
      <p>Use this as default for consumer apps</p>
      <DBButton icon="plus">Test</DBButton>
    </div>
    <div
      data-density="expressive"
      class="db-color-successful db-bg-color-basic-level-2 container-with-padding"
    >
      <h1>db-ux-expressive</h1>
      <p>Use this as default for marketing apps</p>
      <DBButton icon="plus">Test</DBButton>
    </div>
  </main>
</template>
