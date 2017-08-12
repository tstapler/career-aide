import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Injectable()
export class ResumeActions {
  public static readonly DONE: string = 'DONE';

  public static readonly GET: string = 'GET';
  public static readonly GET_SUCCESS: string = 'GET_SUCCESS';
  public static readonly GET_FAILURE: string = 'GET_FAILURE';

  public static readonly GET_ALL: string = 'GET_ALL';
  public static readonly GET_ALL_SUCCESS: string = 'GET_ALL_SUCCESS';
  public static readonly GET_ALL_FAILURE: string = 'GET_ALL_FAILURE';

  public static readonly SET: string = 'SET';
  public static readonly SET_SUCCESS: string = 'SET_SUCCESS';
  public static readonly SET_FAILURE: string = 'SET_FAILURE';

  public static readonly CURRENT: string = 'CURRENT';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  public getResumes(userId) {
    this.ngRedux.dispatch({
      type: ResumeActions.GET_ALL,
      payload: {
        userId
      }
    });
  }

  public updateResume(
    username: string, userId: string,
    resumename: string, resume: {},
    resumeId: string) {
    this.ngRedux.dispatch({
      type: ResumeActions.SET,
      payload: {
        id: resumeId,
        username,
        userId,
        resumename,
        resume
      }
    });
  }

  public setCurrentResume(resume) {
    this.ngRedux.dispatch({
      type: ResumeActions.CURRENT,
      payload: resume
    });
  }
}
