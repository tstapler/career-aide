import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent, RegistrationComponent } from './auth';
import { ResumeEditorComponent, ResumeViewComponent } from './resumes';
import { AboutComponent } from './about';

import { AuthGuard } from './auth';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resume-editor', component: ResumeEditorComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume-view', component: ResumeViewComponent, canActivate: [AuthGuard] },
];
