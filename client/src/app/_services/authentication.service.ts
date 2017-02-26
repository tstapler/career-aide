import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private options: RequestOptions;
  constructor(
    private http: Http,
    public appState: AppState,
  ) { 
    let headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: headers});
  }

  public login(username: string, password: string) {
    return this.http.post('/api/users/login', JSON.stringify({ username: username, password: password }), this.options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let data = response.json();
        if (response.ok && data.id) {
          this.appState.set('auth-token', data.id);
          this.appState.set('user-id', data.userId);
          this.appState.set('username', username);
        }
      });
  }

  public logout() {
    // remove user from local storage to log user out
    return this.http.post('/api/users/logout', JSON.stringify({userId: this.appState.get('user-id')}), this.options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        if (response.ok) {
          this.appState.set('auth-token', '');
          this.appState.set('user-id', '');
        }
      });
  }

  public register(username: string, email: string,  password: string) {
    return this.http.post('/api/users', JSON.stringify({ username: username, email: email, password: password }), this.options).map((response: Response) => {
        if (response.ok) {
        }
      });
  }
}
