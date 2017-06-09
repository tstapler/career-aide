import { IResume } from '../resumes';
import { IAuth } from '../auth';

export interface IAppState {
  resumes_data?: IResume;
  auth_data?: IAuth;
}
