import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AuthActions } from './auth.actions';
import { AuthEpics } from './auth.epics';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login';
import { RegistrationComponent } from './registration';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  exports: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [AuthActions, AuthEpics, AuthGuard],
})
export class AuthModule { }
