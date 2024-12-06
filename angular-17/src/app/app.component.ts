import {
  DBBrand,
  DBButton,
  DBHeader,
  DBInput,
  DBLink,
  DBMainNavigation,
  DBNavigationItem
} from '@db-ui/ngx-components';

import { Component } from '@angular/core';
// import { ActionBarDirective } from '@db-ui/ngx-components/components/header/ActionBar.directive';
// import { MetaNavigationDirective } from '@db-ui/ngx-components/components/header/MetaNavigation.directive';
// import { NavigationContentDirective } from '@db-ui/ngx-components/components/navigation-item/NavigationContent.directive';
// import { NavigationDirective } from '@db-ui/ngx-components/components/header/Navigation.directive';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DBButton, DBInput, DBMainNavigation, DBNavigationItem, DBBrand, DBHeader, DBLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
