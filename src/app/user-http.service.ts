import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import {  } from '@angular/http/src/headers';

@Injectable()
export class UserHttpService {

  server = 'http://localhost:3000';

  constructor(
    protected http: Http
  ) { }

  activity( user: User ): Observable<Response> {
    return this.http.get( this.server + '/activity' );
  }

}
