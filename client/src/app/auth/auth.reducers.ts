import { AuthActions } from './auth.actions';
import { IAuth } from './auth.types';

// A higher-order reducer: accepts an auth type and returns a reducer
// that only responds to actions for that particular auth type.
export function authReducer(state: IAuth, action): IAuth {
  switch (action.type) {
    case AuthActions.AUTH_SUCCESS:
      console.log(action);
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
