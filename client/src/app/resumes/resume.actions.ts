import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Injectable()
export class ResumeActions {
  public static readonly DONE: string = 'DONE';

  public static readonly GET: string = 'GET';
  public static readonly GET_ALL: string = 'GET_ALL';
  public static readonly SET: string = 'SET';

  public static readonly API_SUCCESS: string = 'API_SUCCESS';
  public static readonly API_FAILURE: string = 'API_FAILURE';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  public getResumes(userId) {
    this.ngRedux.dispatch({
      type: ResumeActions.GET_ALL,
      payload: {
        userId
      }
    });
  }

  public updateResume(username, userId, resumename, resume) {
    this.ngRedux.dispatch({
      type: ResumeActions.SET,
      payload: {
        username,
        userId,
        resumename,
        resume
      }});
  }

}
