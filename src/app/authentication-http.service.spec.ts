import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationHttpService } from './authentication-http.service';

xdescribe('AuthenticationHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationHttpService]
    });
  });

  it('should be created', inject([AuthenticationHttpService], (service: AuthenticationHttpService) => {
    expect(service).toBeTruthy();
  }));
});
