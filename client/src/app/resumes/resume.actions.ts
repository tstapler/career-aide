import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../store';
import { ResumeInterface } from './../sdk/models/Resume';

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
  public static readonly TOGGLE_CREATING: string = 'TOGGLE_CREATING';
  public static readonly START_NEW: string = 'START_NEW';

  public static readonly DELETE: string = 'DELETE';
  public static readonly DELETE_SUCCESS: string = 'DELETE_SUCCESS';
  public static readonly DELETE_FAILURE: string = 'DELETE_FAILURE';

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
    resumename: string, resume: ResumeInterface,
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

  public createResume(
    username: string, userId: string,
    resumename: string
  ) {
    this.ngRedux.dispatch({
      type: ResumeActions.SET,
      payload: {
        username,
        userId,
        resumename
      }
    });
  }

  public deleteCurrentResume(resume) {
    this.ngRedux.dispatch({
      type: ResumeActions.DELETE,
      payload: resume
    });
  }

  public toggleCreatingResume() {
    this.ngRedux.dispatch({
      type: ResumeActions.TOGGLE_CREATING
    });
  }

  public setCurrentResume(resume) {
    this.ngRedux.dispatch({
      type: ResumeActions.CURRENT,
      payload: resume
    });
  }
}
