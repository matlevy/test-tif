import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertsService {

  messages: Subject<string> = new Subject();

  constructor() { }

  notify(message: string): void {
    this.messages.next(message);
  }

  clear(): void {
    this.messages.next('CLEAR');
  }
}
