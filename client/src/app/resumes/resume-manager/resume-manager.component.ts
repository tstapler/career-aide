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

  public current: '';
  public resumes = [];
  public resumesById = {};

  public creating: boolean = false;

  public newResumeName: string = '';
  public token = null;

  @select(['auth', 'token']) private $token;

  @select(['resumes', 'loaded']) private $resumes;
  @select(['resumes', 'current']) private $currentResume;
  @select(['resumes', 'creating_new']) private $creating;

  constructor(
    public route: ActivatedRoute,
    private resumeActions: ResumeActions) {

    this.$resumes.subscribe((r) => {
      let output = [];
      let outputById = r;

      if (r) {
        output = _.map(_.values(r), (resume: Resume) => {
          return {
            id: resume,
            text: resume.resumename
          };
        });
      }

      this.resumes = output;
      this.resumesById = outputById;
    });

    this.$currentResume.subscribe((resume) => {
      if (resume) {
        this.current = [{
          id: resume,
          text: this.resumesById[resume].resumename
        }];
      } else {
        this.current = [{
          id: 'none',
          text: 'No Resumes Found'
        }];
      }
    });

    this.$creating.subscribe((creating) => this.creating = creating);

    this.$token.subscribe((token) => this.token = token);
  }

  public updateSelected(option) {
    this.resumeActions.setCurrentResume(option.id);
  }

  public deleteSelected() {
    console.log(this.current);
    this.resumeActions.deleteCurrentResume(this.current[0].id);
  }

  public toggleCreating() {
    this.resumeActions.toggleCreatingResume();
  }

  public refreshResumes() {
    this.resumeActions.getResumes(this.token.userId);
  }

  public createResume() {
    this.toggleCreating();
    this.resumeActions.createResume(this.token.user.username,
      this.token.userId, this.newResumeName);
  }
}
