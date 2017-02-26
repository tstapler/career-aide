import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

import { AppState } from '../app.service';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // Set our default values
  public localState: any = {};
  // TypeScript public modifiers

  constructor(
    public appState: AppState,
    public authService: AuthenticationService,
    private router: Router,
  ) {
  }

  public ngOnInit() {
    console.log('hello `Login` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public login() {
    console.log('Logging in');
    this.authService.login(this.localState.username, this.localState.password).subscribe(
      (data) => this.router.navigate(['/resume-editor'])
    );
  }

}
