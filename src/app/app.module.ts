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

const ROUTES = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    WelcomeComponent
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
    AuthenticationHttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }