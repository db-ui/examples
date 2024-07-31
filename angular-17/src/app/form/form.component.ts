import {
  DBButton,
  DBInput
} from '@db-ui/ngx-components';

import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DBButton, DBInput],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
