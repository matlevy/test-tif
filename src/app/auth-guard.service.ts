import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    protected authentcationService: AuthenticationService,
    protected router: Router
  ) { }

  canActivate() {
    if (!this.authentcationService.user) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
