import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActionsObservable } from 'redux-observable';
import { select } from '@angular-redux/store';
import { ResumeActions } from './resume.actions';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LoopBackConfig } from '../sdk/index';
import { ResumeApi, UserApi } from '../sdk/services';

const BASE_URL = '/api';

@Injectable()
export class ResumeEpics {

  constructor( private userApi: UserApi,
    private resumeApi: ResumeApi) {
    // API_HOST is inserted by webpack
    LoopBackConfig.setBaseURL('http://' + API_HOST );
    LoopBackConfig.setApiVersion('api');
  }

  public getResumes = (action$) => {
    console.log(action$);
    return action$.ofType(ResumeActions.GET_ALL)
      .mergeMap(({ payload }) => {
        console.log(payload);
        return this.userApi.getResumes(payload.userId)
          .map((result) => ({
            type: ResumeActions.API_SUCCESS,
            payload: result
          }))
          .catch((error) => Observable.of({
            type: ResumeActions.API_FAILURE,
          }));
      });
  }

  public update = (action$) => {
    return action$.ofType(ResumeActions.SET)
      .mergeMap(({ payload }) => {
        return this.resumeApi.patchOrCreate(payload)
          .map((result) => ({
            type: ResumeActions.API_SUCCESS,
            payload: result
          }))
          .catch((error) => Observable.of({
            type: ResumeActions.API_FAILURE,
          }));
      });
  }

  public success = (action$) => {
    return action$.ofType(ResumeActions.API_SUCCESS)
      .mergeMap(({ payload }) => {
        console.log(payload);
        return Observable.of({type: ResumeActions.DONE});
      });
  }
}
