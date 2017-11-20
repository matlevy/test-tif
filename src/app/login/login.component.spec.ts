import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';
import { UserFactory, User } from '../user';
import { AlertsService } from '../alerts.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Injectable()
export class MockAuthenticationService {
  authenticate(email: string, password: string): Observable<any> {
    return Observable.create( (d) => null );
  }
  setUser(user: User) {}
}

@Injectable()
export class MockLocalStorageService {
  get(key: string): string { return '{ "email": "test@test.com", "password": "password" }'; }
  set(key: string, value: string): void {}
  remove(key: string): void {}
}

@Injectable()
export class MockUserFactory {
  create(email, password): User { return new User(email, password); }
}

@Injectable()
export class MockAlertService {
  constructor() {}
  clear() {}
  notify(message: string) {}
}

@Injectable()
export class MockRouterService {
  navigate(loc: Array<any>) {}
}

@Injectable()
export class MockUserService {
  getActivity(user: User) { return Observable.of([{}]) }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthenticationService;
  let lsService: LocalStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: LocalStorageService, useClass: MockLocalStorageService },
        { provide: UserFactory, useClass: MockUserFactory },
        { provide: AlertsService, useClass: MockAlertService },
        { provide: Router, useClass: MockRouterService },
        { provide: UserService, useClass: MockUserService }
      ],
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthenticationService);
    lsService = TestBed.get(LocalStorageService);
    fixture.detectChanges();
  });

  describe('Login', () => {
    it('should call the authenticate method of the service', () => {
      spyOn(authService, 'authenticate').and.returnValue(
        Observable.of({})
      );
      component.login('email', 'password');
      expect(authService.authenticate).toHaveBeenCalled();
    });
    it('should attempt to store the form values on successful login and the flag is checked', () => {
      component.loginForm.get('storeUser').setValue(true);
      spyOn(lsService, 'set');
      spyOn(authService, 'authenticate').and.returnValue(
        Observable.of({})
      );
      component.login('email', 'password');
      expect(lsService.set).toHaveBeenCalled();
    });
    it('should remove stored form values on successful login and the flag is not checked', () => {
      component.loginForm.get('storeUser').setValue(false);
      spyOn(lsService, 'remove');
      spyOn(authService, 'authenticate').and.returnValue(
        Observable.of({})
      );
      component.login('email', 'password');
      expect(lsService.remove).toHaveBeenCalled();
    });
  });

});
