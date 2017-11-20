import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import {  } from '@angular/http/src/headers';

@Injectable()
export class AuthenticationHttpService {

  server = 'http://localhost:3000';

  constructor(
    protected http: Http
  ) { }

  login( user: User ): Observable<Response> {
    return this.http.post( this.server + '/auth', user );
  }

}
