import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../alerts.service';
import { Output } from '@angular/core';

/** The AlertsComponent will subecribe to Alerts sent from the AlertsService and render them within the application view */
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

  /** Initialises the component and subscribes to tha aler subject in the alerts service */
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

  /** Removes an alert from the alert view */
  remove(alert: string): void {
    this.alerts.splice( this.alerts.indexOf(alert), 1 );
  }

}
