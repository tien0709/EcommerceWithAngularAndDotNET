import { TestBed } from '@angular/core/testing';

import { UserAuthGuardServiceService } from './user-auth-guard-service.service';

describe('UserAuthGuardServiceService', () => {
  let service: UserAuthGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
