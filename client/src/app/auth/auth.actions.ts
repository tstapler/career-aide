import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAuth } from './auth.types';
import { IAppState } from '../store';

@Injectable()
export class AuthActions {
  public static readonly DONE: string = 'DONE';
  public static readonly LOGIN: string = 'LOGIN';
  public static readonly LOGOUT: string = 'LOGOUT';
  public static readonly REGISTER: string = 'REGISTER';

  public static readonly AUTH_SUCCESS: string = 'AUTH_SUCCESS';
  public static readonly AUTH_FAILURE: string = 'AUTH_FAILURE';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  public login(username, password, returnUrl) {
    this.ngRedux.dispatch({
      type: AuthActions.LOGIN,
      payload: {
        username,
        password,
        returnUrl,
      }
    });
  }

  public logout() {
    this.ngRedux.dispatch({
      type: AuthActions.LOGOUT
    });
  }

  public register(username, password, email, returnUrl) {
    this.ngRedux.dispatch({
      type: AuthActions.REGISTER,
      payload: {
        username,
        password,
        email,
        returnUrl
      }
    });
  }
}
