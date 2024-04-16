import { TestBed } from '@angular/core/testing';

import { ApicommonService } from './apicommon.service';

describe('ApicommonService', () => {
  let service: ApicommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
