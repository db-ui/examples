<script setup lang="ts">
import {
  DBAccordion,
  DBAccordionItem,
  DBButton,
} from "@db-ui/v-components";
</script>

<template>
  <div class="centered">
    Hello,World
    <br/>
    <DBButton>Test</DBButton>
    <DBAccordion>
      <DBAccordionItem>
        <template #title>FAQ</template>
        Some Faq Text
      </DBAccordionItem>
      <DBAccordionItem>
        <template #title>Contact</template>
        Some Contact Text
      </DBAccordionItem>
    </DBAccordion>
  </div>
</template>

<style scoped lang="scss">
.centered {
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
}
</style>