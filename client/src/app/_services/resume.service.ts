import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Response,
  RequestOptions,
  URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {
  private options: RequestOptions;
  constructor(
    private http: Http,
    public appState: AppState,
  ) {
    let headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers});
  }

  public get() {
    this.options.search = new URLSearchParams({access_token: this.appState.get('auth-token')});
    let path = '/api/users/' + this.appState.get('user-id') + '/resumes';
    console.log(path);
    return this.http.get(path, this.options)
    .map((response: Response) => {
      let data = response.json();
      console.log(data);
      if (response.ok && data[0] && data[0].data) {
        this.appState.set('resume-id', data[0].id);
        return data[0].data;
      } else {
        return {};
      }
    });
  }

  public set(resume) {
    this.options.search = new URLSearchParams({access_token: this.appState.get('auth-token')});
    let path = '/api/users/' + this.appState.get('user-id') + '/resumes';
    console.log('Sending resume');
    let payload = {
      username: this.appState.get('username'),
      resumename: 'myresume',
      userId: this.appState.get('user-id'),
      data: resume
    };
    if (this.appState.get('resume-id') != null) {
      payload.id = this.appState.get('resume-id');
      path = '/api/Resumes/' + this.appState.get('resume-id');
      return this.http.patch(path, JSON.stringify(payload), this.options)
      .map((response: Response) => {
        let data = response.json();
        console.log('Response from patch');
        console.log(data);
    });
    }
    console.log(payload);
    return this.http.post(path, JSON.stringify(payload), this.options)
    .map((response: Response) => {
      let data = response.json();
      console.log('Response from post');
      console.log(data);
      this.appState.set('resume-id', data.id);
    });
  }
}
