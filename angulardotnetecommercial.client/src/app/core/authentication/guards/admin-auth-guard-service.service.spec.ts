import { TestBed } from '@angular/core/testing';

import { AdminAuthGuardServiceService } from './admin-auth-guard-service.service';

describe('AdminAuthGuardServiceService', () => {
  let service: AdminAuthGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
