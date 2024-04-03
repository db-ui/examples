<script setup lang="ts">
import {DBBrand, DBHeader, DBMainNavigation, DBNavigationItem, DBButton} from "@db-ui/v-components";
import {ref} from "vue";

const isDrawerOpen = ref(false)
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}
</script>

<template>
  <DBHeader :drawerOpen="isDrawerOpen" :onToggle="toggleDrawer" burgerMenuLabel="mobile label test">
    <template #brand>
      <DBBrand >DB ada Vue 3 Example</DBBrand>
    </template>
    <DBMainNavigation>
      <DBNavigationItem :active="true">
        <RouterLink to="/" ariaCurrentValue="page">Home</RouterLink>
      </DBNavigationItem>
      <DBNavigationItem backButtonText="Zurück">
        Generic Page
        <template #subnavigation>
          <DBNavigationItem>
            <RouterLink to="/" ariaCurrentValue="page">Page 1</RouterLink>
          </DBNavigationItem>
          <DBNavigationItem>
            <RouterLink to="/" ariaCurrentValue="page">Page 2</RouterLink>
          </DBNavigationItem>
          <DBNavigationItem>
            Info
            <template #subnavigation>
              <DBNavigationItem>
                <RouterLink to="/" ariaCurrentValue="page">Info Subpage 1</RouterLink>
              </DBNavigationItem>
              <DBNavigationItem>
                <RouterLink to="/" ariaCurrentValue="page">Info Subpage 2</RouterLink>
              </DBNavigationItem>
              <DBNavigationItem>
                <RouterLink to="/" ariaCurrentValue="page">Info Subpage 3</RouterLink>
              </DBNavigationItem>
              <DBNavigationItem>
                <RouterLink to="/" ariaCurrentValue="page">Info Subpage 4</RouterLink>
              </DBNavigationItem>
            </template>
          </DBNavigationItem>
        </template>
      </DBNavigationItem>
      <DBNavigationItem>
        <RouterLink to="/colors" ariaCurrentValue="page">Colors</RouterLink>
      </DBNavigationItem>
      <DBNavigationItem>
        <RouterLink to="/accordion" ariaCurrentValue="page">Accordion</RouterLink>
      </DBNavigationItem>
      <DBNavigationItem>
        <RouterLink to="/form" ariaCurrentValue="page">Form Components</RouterLink>
      </DBNavigationItem>
    </DBMainNavigation>

    <template #metanavigation>
      <RouterLink class="db-link" data-content="internal" to="/">Imprint</RouterLink>
      <RouterLink class="db-link" data-content="internal" to="/">Help</RouterLink>
    </template>

    <template #calltoaction>
      <DBButton icon="search" :no-text="true"/>
    </template>

  </DBHeader>
</template>
