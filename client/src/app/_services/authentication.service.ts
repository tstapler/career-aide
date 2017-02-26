import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.service';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(
    private http: Http,
    public appState: AppState,
  ) { }

  public login(username: string, password: string) {
    return this.http.post('/users/login', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let data = response.json();
        if (user && user.id) {
          this.appState.set('auth-token', user.id);
          this.appState.set('user-id', user.userId);
        }
      });
  }

  public logout() {
    // remove user from local storage to log user out
    return this.http.post('/api/users/logout')
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        if (response.ok) {
          this.appState.set('auth-token', '');
          this.appState.set('user-id', '');
        }
      });
  }

  public register(username: string, password: string) {
    return this.http.post('/api/users', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let data = response.json();
        if (user && user.id) {
          this.appState.set('auth-token', user.id));
    this.appState.set('user-id', user.userId));
  }
});
    }
}
