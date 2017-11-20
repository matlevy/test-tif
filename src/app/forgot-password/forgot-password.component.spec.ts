import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { AlertsService } from '../alerts.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockUserService {
  constructor() {}
  retrievePassword(email: string): Observable<any> {
    return Observable.of(email);
  }
}

@Injectable()
export class MockAlertService {
  constructor() {}
  clear() {}
  notify(message: string) {}
}

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let alertService: AlertsService;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        { provide: UserService, useClass: MockUserService },
        { provide: AlertsService, useClass: MockAlertService }
      ],
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ ForgotPasswordComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    alertService = TestBed.get(AlertsService);
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  describe('Initialisation', () => {
    it('should call the clear method of the alerts service on init', () => {
      spyOn(alertService, 'clear');
      component.ngOnInit();
      expect(alertService.clear).toHaveBeenCalled();
    });
    it('should set a flag to say that the password has been retrieved to false', () => {
      component.ngOnInit();
      expect(component.sentPassword).toBeFalsy();
    });
    it('should create the form group', () => {
      spyOn(component, 'createForm');
      component.ngOnInit();
      expect(component.createForm).toHaveBeenCalled();
      expect(component.retrieveForm).toBeDefined();
      expect(component.retrieveForm.get('email')).toBeDefined();
    });
  });

  describe('sendPassword', () => {
    it('should set the sent password flag to true if the service call works', () => {
      spyOn(userService, 'retrievePassword').and.returnValue(
        Observable.of(true)
      );
      component.ngOnInit();
      component.retrieveForm.get('email').setValue('test@test.com');
      component.sendPassword();
      expect(userService.retrievePassword).toHaveBeenCalled();
      expect(component.sentPassword).toBe(true);
    });
    it('should send a message to the alert service and call its clear method if there is a'
    + ' problem retriving the email', () => {
      spyOn(userService, 'retrievePassword').and.returnValue(
        Observable.throw(false)
      );
      spyOn(alertService, 'clear');
      spyOn(alertService, 'notify');
      component.ngOnInit();
      component.retrieveForm.get('email').setValue('test@test.com');
      component.sendPassword();
      expect(userService.retrievePassword).toHaveBeenCalled();
      expect(component.sentPassword).toBeFalsy();
      expect(alertService.clear).toHaveBeenCalled();
      expect(alertService.notify).toHaveBeenCalled();
    });
  });
  
});
