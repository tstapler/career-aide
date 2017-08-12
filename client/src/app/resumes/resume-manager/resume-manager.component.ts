import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgRedux, select } from '@angular-redux/store';
import * as _ from 'lodash';

import { Resume } from '../../sdk/models/Resume';
import { ResumeActions } from '../resume.actions';

@Component({
  selector: 'resume-manager',
  templateUrl: 'resume-manager.component.html'
})
export class ResumeManagerComponent {

  public current: {};
  public resumes = [];

  public creating_resume: boolean = false;

  public new_resume_name: string = '';

  @select(['resumes', 'loaded']) private $resumes;
  @select(['resumes', 'current']) private $currentResume;

  constructor(public route: ActivatedRoute,
    private resumeActions: ResumeActions) {

    this.$resumes.subscribe((r) => {
      let output = _.map(_.values(r), (resume: Resume) => {
        return {
          id: resume,
          text: resume.resumename
        };
      });
      console.log(output);
      this.resumes = output;
    });

    this.$currentResume.subscribe((resume) => {
      if (resume) {
        this.current = [{
          id: resume,
          text: resume.resumename
        }];
      }
    });
  }

  public updateSelected(option) {
    this.resumeActions.setCurrentResume(option.id);
  }

  createResume() {
    this.creating_resume = !this.creating_resume;
  }
}
