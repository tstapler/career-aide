import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgRedux, select } from '@angular-redux/store';
import * as _ from 'lodash';

import { Resume } from '../../sdk/models/Resume';
import { ResumeActions } from '../resume.actions';

@Component({
  selector: 'resume-selector',
  templateUrl: 'resume-selector.component.html'
})
export class ResumeSelectorComponent {

  public current: {};
  public resumes = [];

  @select(['resumes', 'loaded']) private $resumes;
  @select(['resumes', 'current']) private $currentResume;

  constructor(public route: ActivatedRoute,
    private resumeActions: ResumeActions) {

    this.$resumes.subscribe((r) => {
      console.log(r);
      let output = _.map(_.values(r), (resume: Resume) => {
        console.log(resume);
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
}
