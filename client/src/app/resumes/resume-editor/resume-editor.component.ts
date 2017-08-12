import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  NgZone,
} from '@angular/core';

import { select } from '@angular-redux/store';
import { JsonSchemaFormComponent } from 'angular2-json-schema-form';

import * as _ from 'lodash';

import { resumeSchema } from './../resume_schema';
import { resumeLayout } from './../resume_form_layout';

import { ResumeActions } from '../resume.actions';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'resume-editor',
  styleUrls: ['./resume-editor.component.css'],
  templateUrl: './resume-editor.component.html',
})
export class ResumeEditorComponent {
  public mySchema = resumeSchema;
  public appLayout = resumeLayout;
  public current = {};
  public currentForm = {};
  public formLoading = true;

  @select(['resumes', 'loaded']) private $resumes: any;
  @select(['resumes', 'current']) private $current: any;
  @select(['auth', 'token']) private $token: any;

  private token;
  private resumes = {};

  constructor(
    private resumeActions: ResumeActions,
    private cd: ChangeDetectorRef
  ) {
    this.$token.subscribe((t) => {
      this.token = t;
    });
    this.$resumes.subscribe((r) => {
      this.resumes = r;
    });
    this.$current.subscribe((c) => {
      if (c) {
        this.formLoading = true;
        this.current = c;
        this.currentForm = _.cloneDeep(c.resume);
        this.formLoading = false;
      }
    });
  }

  public submitResume(resumeForm) {
    this.resumeActions.updateResume(
      this.token.user.username,
      this.token.userId,
      this.current.resumename,
      resumeForm,
      this.current.id);
  }
}
