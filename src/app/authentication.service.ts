import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { UserFactory, User } from './user';
import { AuthenticationHttpService } from './authentication-http.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  user: User;

  constructor(
    protected userFactory: UserFactory,
    protected authHttp: AuthenticationHttpService
  ) { }

  authenticate( email: string, password: string ): Observable<User> {
    const user: User = this.userFactory.create( email, password );
    return this.authHttp.login(user)
      .map( (d: Response) => {
        return d.json();
      });
  }

  setUser( user: User ): void {
    this.user = user;
  }

  logout(): void {
    this.user = null;
  }

  sendPassword( email: string ): Observable<Response> {
    return this.authHttp.retrieve(email)
      .map( (d: Response) => {
        return d.json();
      });
  }
}
