import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { authReducer } from '../auth';
import { resumeReducer } from '../resumes';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    auth: authReducer,
    resumes: resumeReducer,
    router: routerReducer,
  }));
