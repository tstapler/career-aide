import { ResumeInterface } from '../sdk/models/Resume';

export interface IResume {
  loaded: {};
  current: string;
};

export interface SetResumePayload {
  id: string;
  result: ResumeInterface;
}
