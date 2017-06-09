import { SDKToken } from '../sdk/models/BaseModels';

export const AUTH_TYPES = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  REGISTER: 'register',
};

export interface IAuth {
  authenticated: boolean;
  token: SDKToken;
};
