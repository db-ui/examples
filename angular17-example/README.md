# Angular example

> **Note:** This was tested with Angular 17 this setup may change with other versions

1. init new angular project `ng new angular-example`
2. Select:
3. Which stylesheet format would you like to use? `SCSS`
4. Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
5. `$ cd angular-example`
6. `$ npm i @db-ux/ngx-core-components`
7. Add `"outputHashing": "media"` to the `angular.json` file under `projects/angular-example/architect/build/configurations/development`
8. Add this to `src/styles.scss`:

```scss
// Combined dependencies like variables, colors and tonality and all components
@forward "@db-ux/core-components/build/styles/rollup";
```

7. Goto `src/app/app.component.html` and replace content with:

```html
<main>
  <div>
    <h1>db-ux-functional</h1>
    <p>Use this as default for enterprise apps</p>
  </div>
  <div>
    <h1>db-ux-regular</h1>
    <p>Use this as default for consumer apps</p>
  </div>
  <div>
    <h1>db-ux-expressive</h1>
    <p>Use this as default for marketing apps</p>
  </div>
</main>
```

8. Start the app with `npm run start`
9. All texts should have the same size and should use default fonts for headlines and paragraphs
10. Goto `src/app/app.component.html` and add the `data-density="XXX"` attribute for each `<div>` and replace `XXX` with:
11. `functional`
12. `regular`
13. `expressive`
14. Goto browser; All texts should have different sizes
15. Goto `src/app/app.component.html` and add `class` with those classes for each `<div>`:
    1. `db-color-informational`
    2. `db-color-successful`
    3. `db-color-successful db-bg-color-basic-level-2`
19. Goto browser; All containers should have different background and foreground colors
20. Goto `src/styles.scss` and append a new class:

```scss
.container-with-padding {
  padding: variables.$db-spacing-fixed-md;
}
```

14. Goto `src/src/app/app.component.html` and add `container-with-padding` class for each `<div>`
15. Goto browser; All containers should have different paddings
16. Goto `src/app/app.component.ts` and replace content with:

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-example';
}
```

18. Goto `src/app/app.component.html` and add `<db-button icon="plus">Test</db-button>` inside each div
19. Goto browser; Button should be visible with different paddings
