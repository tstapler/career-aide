import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { ActionsObservable } from 'redux-observable';
import { AuthActions } from './auth.actions';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LoopBackConfig } from '../sdk/index';
import { UserApi } from '../sdk/services';
import { IAuth } from './auth.types';

const BASE_URL = '/api';

const DEFAULT_URL = '/resume-editor';

@Injectable()
export class AuthEpics {
  constructor(private userApi: UserApi,
    private router: Router,
    private ngRedux: NgRedux<IAuth>) {
    LoopBackConfig.setBaseURL('http://' + API_HOST);
    LoopBackConfig.setApiVersion('api');
  }

  public login = (action$) => {
    console.log(action$);
    return action$.ofType(AuthActions.LOGIN)
      .mergeMap(({ payload }) => {
        console.log(payload);
        return this.userApi.login(payload)
          .map((result) => ({
            type: AuthActions.AUTH_SUCCESS,
            payload:
            {
              token: this.userApi.getCurrentToken(),
              returnUrl: payload.returnUrl || DEFAULT_URL
            }
          }))
          .catch((error) => Observable.of({
            type: AuthActions.AUTH_FAILURE
          }));
      });
  }

  public logout = (action$) => {
    return action$.ofType(AuthActions.LOGOUT)
      .mergeMap(({ payload }) => {
        return this.userApi.logout();
      });
  }

  public register = (action$) => {
    return action$.ofType(AuthActions.REGISTER)
      .mergeMap(({ payload }) => {
        return this.userApi.patchOrCreate(payload)
          .map((result) => ({
            type: AuthActions.AUTH_SUCCESS,
            payload:
            {
              token: this.userApi.getCurrentToken(),
              returnUrl: payload.returnUrl || DEFAULT_URL
            }
          }))
          .catch((error) => Observable.of({
            type: AuthActions.AUTH_FAILURE
          }));
      });
  }

  public success = (action$) => {
    return action$.ofType(AuthActions.AUTH_SUCCESS)
      .mergeMap(( action ) => {
        let url = action.payload.returnUrl || DEFAULT_URL;
        this.router.navigate([url]);
        return Observable.of({type: 'DONE'});
      });
  }
}
