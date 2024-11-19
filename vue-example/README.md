# Vue Example

1. init new vite project `npm create vite@latest vue-example`
2. `cd vue-example`
3. `npm i sass`
4. `npm i @db-ui/v-components`
5. Delete unused files:
   1. `components`
   2. `src/vite-env.d.ts`
   3. `assets`
6. Rename `src/style.css` to `src/style.scss` & replace content with:

```scss
// Combined dependencies like variables, colors and tonality and all components
@forward "@db-ui/components/build/styles/db-ui-42-rollup";
```

7. Goto `src/main.ts` and rename `import './style.css'` to `import './style.scss'`.
8. Goto `src/App.vue` and replace content with:

```vue
<script setup lang="ts"></script>

<template>
  <main>
    <div>
      <h1>db-ui-functional</h1>
      <p>Use this as default for enterprise apps</p>
    </div>
    <div>
      <h1>db-ui-regular</h1>
      <p>Use this as default for consumer apps</p>
    </div>
    <div>
      <h1>db-ui-expressive</h1>
      <p>Use this as default for marketing apps</p>
    </div>
  </main>
</template>
```

9. Start the app with `npm run dev`
10. All texts should have the same size
11. Goto `src/App.vue` and add the `data-density="XXX"` attribute for each `<div>` and replace `XXX` with:
    1. `functional`
    2. `regular`
    3. `expressive`
12. Goto browser; All texts should have different sizes
13. Goto `src/App.vue` and add `class` with those classes for each `<div>`:
    1. `db-informational-bg-basic-level-1`
    2. `db-successful-bg-basic-level-1`
    3. `db-successful-bg-basic-level-2`
14. Goto browser; All containers should have different background and foreground colors
15. Goto `src/style.scss` and append a new class:

```scss
.container-with-padding {
  padding: variables.$db-spacing-fixed-md;
}
```

16. Goto `src/App.vue` and add `container-with-padding` class for each `<div>`
17. Goto browser; All containers should have different paddings
18. Goto `src/App.vue` and add `import { DBButton } from "@db-ui/v-components";` inside the `<script>` tags and add `<DBButton icon="person">Test</DBButton>` inside each div
19. Goto browser; Button should be visible with different paddings
