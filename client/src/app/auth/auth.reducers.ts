import { Reducer } from 'redux';
import { FluxStandardAction as Action } from 'flux-standard-action';

import { AuthActions } from './auth.actions';
import { IAuth, AuthPayload } from './auth.types';

// A higher-order reducer: accepts an auth type and returns a reducer
// that only responds to actions for that particular auth type.
export const authReducer = (
  state: IAuth,
  action: Action<AuthPayload, null>): IAuth => {
  switch (action.type) {
    case AuthActions.AUTH_SUCCESS:
      return {
        token: action.payload.token,
        authenticated: true
      };
    default:
      if (state) {
        return state;
      }
      return {
        token: null,
        authenticated: false
      };
  }
};
