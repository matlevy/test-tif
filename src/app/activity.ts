import { Moment } from 'moment';
import * as moment from 'moment';
import { Injectable } from '@angular/core';

export class Activity {
  constructor(
    public login: Moment,
    public logout: Moment,
  ) { }
}

@Injectable()
export class ActivityFactory {
  create( login: string, logout: string ) {
    return new Activity( moment(login), moment(logout));
  }
}
