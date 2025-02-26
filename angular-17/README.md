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
- missing docs for navigation directives

## Bugs

- floating label: animation is laggy
- db-main-navigation: directive import leads to error:
  `An unhandled exception occurred: Missing "./components/header/ActionBar.directive" specifier in "@db-ui/ngx-components" package
See "/private/var/folders/t6/wg_h_yhn4bb6_7g9yn30qqmw0000gn/T/ng-nNRT5n/angular-errors.log" for further details.`
- db-brand: image not found / https://github.com/db-ui/mono/issues/2413

## Questions

- db-brand: <db-brand>db-ui component test</db-brand> is empty -> has to be used with <db-brand brand> .... why?
- why can't <db-header> be used with any child, e.g. <db-header>bla bla</db-header>?

# Other

- docs from MainNavigation and MainNavigation Item are separated
