import { Injectable } from '@angular/core';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { AuthEpics } from '../auth';
import { ResumeEpics } from '../resumes';

@Injectable()
export class RootEpics {
  constructor(
    private authEpics: AuthEpics,
    private resumeEpics: ResumeEpics
  ) { }

  public createEpics() {
    return [createEpicMiddleware(combineEpics(
      this.authEpics.login,
      this.authEpics.logout,
      this.authEpics.register,
      this.authEpics.success,
      this.resumeEpics.getResumes,
      this.resumeEpics.update,
      this.resumeEpics.delete
    ))];
  }
}
// '<T, S>(rootEpic: Epic<T, S>, options?: Options) => EpicMiddleware<T, S>'
// is not assignable to parameter of type 
// '(value: (action$: any) => any, index: number, array: ((action$: any) => any)[]) => EpicMiddleware...'.
