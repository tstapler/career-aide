import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../store/store.types';
import { SDKToken } from '../sdk/models/BaseModels';

@Injectable()
export class AuthGuard implements CanActivate {

  public token: SDKToken;

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.select(['auth', 'token']).subscribe((token: SDKToken) => {
      console.log(token);
      this.token = token;
    });
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.token != null) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
