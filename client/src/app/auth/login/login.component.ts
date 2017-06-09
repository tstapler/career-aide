import {
  Component,
  OnInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthActions } from '../auth.actions';
import { IAuth } from '../auth.types';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // Set our default values
  public credentials = {
    username: '',
    password: '',
  };

  private params$;
  private returnUrl: string;

  // TypeScript public modifiers

  constructor(
    private authActions: AuthActions,
    private route: ActivatedRoute
  ) {
  }

  public login() {
    this.authActions.login(this.credentials.username, this.credentials.password, this.returnUrl);
  }

  public ngOnInit() {
    this.params$ = this.route.queryParams.subscribe((params) => {
      this.returnUrl = params['returnUrl'];
    });
  }
}
