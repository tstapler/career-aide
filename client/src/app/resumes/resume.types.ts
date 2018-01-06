import { ResumeInterface } from '../sdk/models/Resume';

export interface IResume {
  loaded: { [id: string]: ResumeInterface };
  current: string;
  creating_new: boolean;
};

export interface SetResumePayload {
  id: string;
  result: ResumeInterface;
}
