import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {

  constructor(
    protected authService: AuthenticationService
  ) { }

  retrievePassword( email: string ): Observable<any> {
    return this.authService.sendPassword(email);
  }
}
