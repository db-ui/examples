import { DBButton, DBTooltip } from '@db-ui/ngx-components';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-headlines',
  standalone: true,
  imports: [DBButton, CommonModule, DBTooltip],
  templateUrl: './headlines.component.html',
  styleUrl: './headlines.component.css'
})
export class HeadlinesComponent {
  density: string = 'regular';

  getDensityClass = (): string => {
    return `db-density-${this.density}`
  }

  changeDensity = (value: string) => {
    this.density = value;
  }

}
