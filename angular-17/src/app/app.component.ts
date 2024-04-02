import { DBButton, DBInput, DBMainNavigation, DBNavigationItem } from '@db-ui/ngx-components';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DBButton, DBInput, DBMainNavigation, DBNavigationItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
