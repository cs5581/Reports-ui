
import { TestBed } from '@angular/core/testing';

import { ReportsService } from './recon-service.service';

describe('ReconServiceService', () => {
  let service: ReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
