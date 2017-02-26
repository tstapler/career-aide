import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  public model: any = {};
  public loading = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService) { }

  public register() {
    this.loading = true;
    this.authService.register(this.model.username, this.model.email, this.model.password)
      .subscribe(
      (data) => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/resume-editor']);
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
