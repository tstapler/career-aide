import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

import { resume_schema } from './../resume_schema';

import { FrameworkLibraryService } from 'angular2-json-schema-form';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public mySchema = resume_schema;
  public appLayout = {
  };
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    private frameworkLibrary: FrameworkLibraryService
  ) {
    frameworkLibrary.setFramework('bootstrap-3', true);
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  public submitThing(val) {
    console.log(val);
  }

  public showFormSchemaFn(evnt) {
    console.log(evnt);
  }

  public showFormLayoutFn(evnt) {
    console.log(evnt);
  }
}
