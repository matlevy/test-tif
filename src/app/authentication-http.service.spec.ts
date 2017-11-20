import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationHttpService } from './authentication-http.service';

describe('AuthenticationHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationHttpService]
    });
  });

  it('should be created', inject([AuthenticationHttpService], (service: AuthenticationHttpService) => {
    expect(service).toBeTruthy();
  }));
});
