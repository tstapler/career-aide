import {
  Component,
  OnInit,
  NgZone,
  ApplicationRef
} from '@angular/core';

import { select } from '@angular-redux/store';

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
export class ResumeEditorComponent implements OnInit {
  // TypeScript public modifiers
  public mySchema = resumeSchema;
  public appLayout = resumeLayout;
  public resumeModel= {};
  public resumename;

  @select(['resumes', 'resumes']) private $resumes: any;
  @select(['auth', 'token']) private $token: any;

  private token;
  private resumes = [];

  constructor(
    private resumeActions: ResumeActions,
  ) {
    this.$token.subscribe((t) => {
      this.token = t;
    });
    this.$resumes.subscribe((r) => {
      console.log(r);
      this.resumes = r;
      if(!this.resumename && r.length > 0) {
        this.resumename = r[0].id;
      }
    });
  }

  public ngOnInit() {

    this.resumeActions.getResumes(this.token.userId);
  }

  public getCurrentResume(resumeId) {
    console.log(resumeId);
    let value = _.find(this.resumes, ['id', resumeId]);
    if (value) {
      this.resumeModel = value.resume;
      console.log(this.resumeModel);
    }

    return this.resumeModel;
  }

  public submitResume(resumeForm) {
    this.resumeActions.updateResume(
      this.token.user.username,
      this.token.userId,
      this.resumename,
      resumeForm);
  }
}
