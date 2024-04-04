# Found issues

## Docs

- main-navigation vue:
  - template-tag for default slot is **wrong** (doesn't render)
  - Slot name is wrong (mitosis bug): use `#subnavigation` instead of `#sub-navigation` 
  - Within sub-navigation: `RouterLink` must be wrapped by `DBNavigationItem` individually 
- DBDrawer vue:
  - value `open` must be set on `openDrawer.value`
  - `--db-drawer-max-height` for prop **direction** `'up' | 'down'` should be mentioned
  - prop `withCloseButton` seems misleading: would also expect a close-button if the prop is not set
- The workaround for custom events does not seem necessary: https://www.npmjs.com/package/@db-ui/v-components?activeTab=readme (Custom Events)
- DBTextarea "How to use" Vue: `description="Description"` seems obsolete

## UX / Design / Animation

- main-navigation:
  - Toggling active state changes font from regular to bold: width of item changes (SPA)
  - (Sub)navigation closes immediately when mouseover leaves element. Very precise operation is required
- DBDrawer
  - Horizontal fade-in animation appears too fast and rough at large widths
  - Backdrop has no fade-in or fade-out animation

## Bugs

- All props of the Vue components have the type any: no auto-suggestions / complete for props
- DBBrand does not load default-image: https://github.com/db-ui/mono/issues/2413
- DBButton
  - with icon is not correctly aligned next to a button without icon in an inline container: button has an offset upwards. May cause a flicker / repaint at pageload.
  - prop  `state="loading"` has no visible effect
  - empty prop `variant=""` creates unexpected combination of variants `filled` and `outlined`
  - even if prop `:disabled="true"` is set, the linked **tooltip** appears
- DBHeader: the value from the prop `burgerMenuLabel` is rendered in the markup, but is **not** visible on the page
- DBDrawer: if the contents are higher than the drawer, they are displayed above the rest of the page / outside the screen. would **overflow scrolling** make sense here?
- DBTextarea: does `resize: horizontal` make sense here?
- SSR in nuxt 3 leads to many hydration errors: some components are not usable

- DBNavigationItem:
  - Sub-sub-navigation on the left: the mouseover state between the second and third level can be lost > the sub-navigation is closed
  - Sub-sub-navigation on the left: navigation on the fourth level can be outside the screen
  - the prop `backButtonText` must be set individually for each menu level

## Improvements

- DBCheckbox: `v-model` does not work
- DBRadio: would a componente DBRadioGroup make sense to wrap and handle DBRadios?
