<script setup lang="ts">
import { DBButton } from "@db-ui/v-components";
</script>

<template>
  <main>
    <div
      data-tonality="functional"
      class="db-bg-informational container-with-padding"
    >
      <h1>db-ui-functional</h1>
      <p>Use this as default for enterprise apps</p>
      <DBButton icon="account">Test</DBButton>
    </div>
    <div
      data-tonality="regular"
      class="db-bg-successful container-with-padding"
    >
      <h1>db-ui-regular</h1>
      <p>Use this as default for consumer apps</p>
      <DBButton icon="account">Test</DBButton>
    </div>
    <div
      data-tonality="expressive"
      class="db-bg-successful-transparent-semi container-with-padding"
    >
      <h1>db-ui-expressive</h1>
      <p>Use this as default for marketing apps</p>
      <DBButton icon="account">Test</DBButton>
    </div>
  </main>
</template>
