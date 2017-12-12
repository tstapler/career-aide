/* tslint:disable */
import { Injectable } from '@angular/core';
import { Email } from '../../models/Email';
import { User } from '../../models/User';
import { Resume } from '../../models/Resume';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Email: Email,
    User: User,
    Resume: Resume,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
