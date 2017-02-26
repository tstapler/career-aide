import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

import { resumeSchema } from './../resume_schema';
import { resumeLayout } from './../resume_form_layout';

import { FrameworkLibraryService } from 'angular2-json-schema-form';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'resume-editor'
  selector: 'resume-editor',  // <resume-editor></resume-editor>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./resume-editor.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './resume-editor.component.html'
})
export class ResumeEditorComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public mySchema = resumeSchema;
  public appLayout = resumeLayout;
  public resumeModel;
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
  ) {
  }

  public ngOnInit() {
    console.log('hello `ResumeEditor` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitResume(resumeForm) {
    console.log(resumeForm);
  }

}
