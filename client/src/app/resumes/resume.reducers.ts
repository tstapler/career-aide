import * as _ from 'lodash';

import { ResumeActions } from './resume.actions';
import { IResume, SetResumePayload } from './resume.types';

// A higher-order reducer: accepts an resume type and returns a reducer
// that only responds to actions for that particular resume type.
export const resumeReducer = (state: IResume, action) => {
  let current = null;
  let loaded = {};
  switch (action.type) {
    case ResumeActions.GET_ALL_SUCCESS:
      current = state.current;
      _.forEach(action.payload, (resume) => {
        if (current == null) {
          current = resume;
        }

        loaded[resume.id] = resume;
      });

      return {
        loaded,
        current
      };
    case ResumeActions.SET_SUCCESS:
      loaded = _.cloneDeep(state.loaded);
      loaded[action.payload.result.id] = action.payload.result.resume;
      return {
        loaded,
        current: state.current
      };

    case ResumeActions.CURRENT:
      return {
        current: action.payload,
        loaded: state.loaded
      };
    default:
      if (state) {
        return state;
      }
      return {
        loaded: {},
        current: null
      };
  }
};
