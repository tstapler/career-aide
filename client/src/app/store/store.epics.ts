import { Injectable } from '@angular/core';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { AuthEpics } from '../auth';
import { ResumeEpics } from '../resumes';

@Injectable()
export class RootEpics {
  constructor(private authEpics: AuthEpics,
    private resumeEpics: ResumeEpics
  ) { }

  public createEpics() {
    return [
      this.authEpics.login,
      this.authEpics.logout,
      this.authEpics.register,
      this.authEpics.success,
      this.resumeEpics.getResumes,
      this.resumeEpics.update,
      this.resumeEpics.success
    ].map(createEpicMiddleware);
  }
}
