import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DBButton } from '@db-ux/ngx-core-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DBButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular17-example';
}
