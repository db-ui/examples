# Found issues

## Docs

- style.css: rename @import "..." to @import "... .css"
- Watch mode: [ERROR] Two output files share the same path but have different contents: media/db-ux.woff2
  --> fix this with "development": {
  "outputHashing": "media"
  }, https://github.com/angular/angular-cli/issues/26347
- README.md: rename primary -> brand
- README.md: rename DBInput -> db-input
- README.md: DBButton -> db-button
- no auto-correction for component props

## Bugs

- floating label: animation is laggy
- db-main-navigation: items have no text
