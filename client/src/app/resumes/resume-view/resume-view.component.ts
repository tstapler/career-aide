import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { select } from '@angular-redux/store';

@Component({
  selector: 'resume-view',
  templateUrl: 'resume-view.component.html'
})
export class ResumeViewComponent {

  public userId;

  @select(['auth', 'token', 'userId']) private $userId;
  @select(['resumes', 'current']) private $currentResume;

  private currentResumeId: string;

  constructor(public route: ActivatedRoute) {
    this.$userId.subscribe((id: string) => {
      this.userId = id;
    });

    this.$currentResume.subscribe((resume) => {
      if (resume) {
        this.currentResumeId = resume.id;
      }
    });
  }
}
