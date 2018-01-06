import * as _ from 'lodash';

import { ResumeInterface } from './../sdk/models/Resume';
import { ResumeActions } from './resume.actions';
import { IResume, SetResumePayload } from './resume.types';

let removeResume = (target: string, state: IResume): IResume => {
  return _.merge(state, {
    loaded: _.omit(state.loaded, target)
  });
};

let addResumes = (resumes: ResumeInterface[], state: IResume): IResume => {
  let loaded = {};

  if (resumes) {
    _.forEach(resumes, (resume) => {
      loaded[resume.id] = resume;
    });
  }

  return _.merge(state, {
    loaded
  });
};

// Set the current resume
let setCurrent = (resume: ResumeInterface, state: IResume): IResume => {
  // If resume === null then load a new
  
  let currentResume = resume

  if (resume === null && state.current == null) {
    currentResume = _.sample(state.loaded);
  }

  console.log(currentResume)

  return _.merge(state, {
    current: currentResume.id
  });
};

// A higher-order reducer: accepts an resume type and returns a reducer
// that only responds to actions for that particular resume type.
export const resumeReducer = (state: IResume, action) => {
  let newState: IResume = {
    current: null,
    loaded: {},
    creating_new: false
  };

  _.merge(newState, state);

  switch (action.type) {
    case ResumeActions.GET_ALL_SUCCESS:
      return setCurrent(null, addResumes(action.payload, newState));
    case ResumeActions.SET_SUCCESS:
      let target = action.payload.result;
      return setCurrent(target, addResumes([target], newState));
    case ResumeActions.DELETE_SUCCESS:
      return setCurrent(null, removeResume(action.payload, newState));
    case ResumeActions.CURRENT:
      return setCurrent(action.payload, newState);
    case ResumeActions.TOGGLE_CREATING:
      return _.merge(newState, {
        creating_new: !newState.creating_new
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
