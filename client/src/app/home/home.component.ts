import {
  Component,
  OnInit
} from '@angular/core';

import { resumeSchema, resumeLayout } from '../resumes';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Set our default values
  public mySchema = resumeSchema;
  public appLayout = resumeLayout;
  // TypeScript public modifiers

}
