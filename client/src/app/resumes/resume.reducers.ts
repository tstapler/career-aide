import * as _ from 'lodash';

import { ResumeActions } from './resume.actions';
import { IResume, SetResumePayload } from './resume.types';

// A higher-order reducer: accepts an resume type and returns a reducer
// that only responds to actions for that particular resume type.
export const resumeReducer = (state: IResume, action) => {
  let new_state = {
    current: null,
    loaded: {}
    creating_new: false
  };

  _.merge(new_state, state)

  let current = null;
  let loaded = {};
  switch (action.type) {
    case ResumeActions.GET_ALL_SUCCESS:
      _.forEach(action.payload, (resume) => {
        if (new_state == null) {
          current = resume;
        }

        loaded[resume.id] = resume;
      });

      return _.merge(new_state,{
        loaded,
        current
      });
    case ResumeActions.SET_SUCCESS:
      loaded = new_state.loaded;
      loaded[action.payload.result.id] = action.payload.result.resume;
      return _.merge(new_state,{
        loaded,
        current: state.current
      });

    case ResumeActions.CURRENT:
      return _merge(new_state, {
      current: action.payload,
      loaded: new_state.loaded
      });
    default:
      if (state) {
        return state;
      }
      return {
        loaded: {},
        current: null,
        creating_new: false
      };
  }
};
