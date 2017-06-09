import { ResumeActions } from './resume.actions';
import { IResume } from './resume.types';

// A higher-order reducer: accepts an resume type and returns a reducer
// that only responds to actions for that particular resume type.
export function resumeReducer(state: IResume, action): IResume {
  switch (action.type) {
    case ResumeActions.GET_ALL:
      return state;
    case ResumeActions.SET:
      return state;
    case ResumeActions.API_SUCCESS:
      console.log(state);
      state.resumes = action.payload;
    default:
      if (state) {
        return state;
      }
      return {
        resumes: []
      };
  }
};
