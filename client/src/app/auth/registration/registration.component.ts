import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthActions } from '../auth.actions';
import { IAuth } from '../auth.types';

@Component({
  templateUrl: 'registration.component.html'
})
export class RegistrationComponent {
  public model: any = {};
  public loading = false;

  constructor(
    private router: Router,
    private authActions: AuthActions) { }

  public registration() {
    this.authActions.register(this.model.username, this.model.password, this.model.email, '');
  }
}
