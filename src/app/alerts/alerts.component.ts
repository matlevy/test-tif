import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../alerts.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.less']
})
export class AlertsComponent implements OnInit {

  @Output() alerts: Array<string> = [];

  constructor(
    protected alertsService: AlertsService
  ) { }

  ngOnInit() {
    this.alertsService.messages.asObservable().subscribe(
      (alert) => {
        if (alert === 'CLEAR') {
          this.alerts = [];
        } else {
          this.alerts.push(alert);
        }
      }
    );
  }

  remove(alert: string): void {
    this.alerts = this.alerts.splice( this.alerts.indexOf(alert), 1 );
  }

}
