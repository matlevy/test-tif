import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserFactory } from './user';
import { AuthenticationService } from './authentication.service';
import { AuthenticationHttpService } from './authentication-http.service';
import { LocalStorageModule } from 'angular-2-local-storage/dist/local-storage.module';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertsService } from './alerts.service';
import { NavComponent } from './nav/nav.component';
import { AuthGuardService } from './auth-guard.service';
import { ActivityComponent } from './activity/activity.component';
import { ActivityFactory } from './activity';
import { UserHttpService } from './user-http.service';

const ROUTES = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    WelcomeComponent,
    AlertsComponent,
    NavComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    LocalStorageModule.withConfig({
        prefix: 'tsc',
        storageType: 'localStorage'
    }),
    RouterModule.forRoot( ROUTES )
  ],
  providers: [
    UserFactory,
    AuthenticationService,
    AuthenticationHttpService,
    UserService, AlertsService, AuthGuardService,
    ActivityFactory, UserHttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }