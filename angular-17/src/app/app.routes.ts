import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'headlines', component: HeadlinesComponent },
  { path: 'form', component: FormComponent },
];

