import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsComponent } from './alerts.component';
import { AlertsService } from '../alerts.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

export class MockAlertService {

}

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AlertsService
      ],
      declarations: [ AlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should remove an alerts when the remove method is called', () => {
    component.alerts = ['a', 'b', 'c'];
    expect(component.alerts.length).toBe(3);
    component.remove(component.alerts[0]);
    expect(component.alerts.length).toBe(2);
  });
  
});
