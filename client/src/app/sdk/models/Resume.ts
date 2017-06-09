/* tslint:disable */

declare var Object: any;
export interface ResumeInterface {
  "username": string;
  "resumename": string;
  "id"?: any;
  "userId"?: any;
}

export class Resume implements ResumeInterface {
  "username": string;
  "resumename": string;
  "id": any;
  "userId": any;
  constructor(data?: ResumeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Resume`.
   */
  public static getModelName() {
    return "Resume";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Resume for dynamic purposes.
  **/
  public static factory(data: ResumeInterface): Resume {
    return new Resume(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Resume',
      plural: 'Resumes',
      properties: {
        "username": {
          name: 'username',
          type: 'string'
        },
        "resumename": {
          name: 'resumename',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
