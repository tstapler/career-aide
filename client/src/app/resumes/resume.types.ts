import { ResumeInterface } from '../sdk/models/Resume';

export interface IResume {
  loaded: {};
  current: string;
  creating_new: boolean;
};

export interface SetResumePayload {
  id: string;
  result: ResumeInterface;
}
