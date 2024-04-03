<script setup lang="ts">
import {DBBrand, DBHeader, DBMainNavigation, DBNavigationItem} from "@db-ui/v-components";
import acidSvg from '~/assets/images/acid.svg'
</script>

<template>
  <div>
    <DBHeader>
      <template #brand>
        <DBBrand>DB Mono Nuxt 3 Example</DBBrand>
        <!-- <DBBrand :imgSrc="acidSvg">DB Mono Nuxt 3 Example</DBBrand> -->
      </template>
      <DBMainNavigation>
        <DBNavigationItem :active="true">
          <NuxtLink to="/" ariaCurrentValue="page">Home</NuxtLink>
        </DBNavigationItem>
        <DBNavigationItem>
          Page
          <template #sub-navigation>
            <DBNavigationItem>
              <NuxtLink to="/" ariaCurrentValue="page">Page 1</NuxtLink>
            </DBNavigationItem>
            <DBNavigationItem>
              <NuxtLink to="/" ariaCurrentValue="page">Page 2</NuxtLink>
            </DBNavigationItem>
            <DBNavigationItem>
              <NuxtLink to="/" ariaCurrentValue="page">Page 3</NuxtLink>
            </DBNavigationItem>
          </template>
        </DBNavigationItem>
      </DBMainNavigation>
    </DBHeader>
    <h1>TEST</h1>
    <slot/>
  </div>
</template>