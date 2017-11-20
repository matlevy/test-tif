import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { UserHttpService } from './user-http.service';
import { User } from './user';
import { Activity, ActivityFactory } from './activity';

@Injectable()
export class UserService {

  constructor(
    protected authService: AuthenticationService,
    protected userService: UserHttpService,
    protected activityFactory: ActivityFactory
  ) { }

  retrievePassword( email: string ): Observable<any> {
    return this.authService.sendPassword(email);
  }

  getActivity( user: User ): Observable<Array<Activity>> {
    return this.userService.activity(user)
      .map( (d) => d.json() )
      .map(
        (d: any) => {
          return d.activity.map( (v) => {
            return this.activityFactory.create(v.login, v.logout);
          });
        }
      );
  }
}
