import {
  Component,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';

import { AuthActions } from '../auth';
import { IAppState } from '../store/store.types';
import { SDKToken } from '../sdk/models/BaseModels';

@Component({
  selector: 'nav-aide',
  styleUrls: ['./nav-aide.component.css'],
  templateUrl: './nav-aide.component.html'
})
export class NavAideComponent {

  public authenticated : boolean;

  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Career Aide';
  public url = 'https://github.com/tstapler/career-aide';

  constructor(
    private authActions: AuthActions,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.ngRedux.select(['auth', 'authenticated']).subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

  public logout() {
    this.authActions.logout();
  }

}
