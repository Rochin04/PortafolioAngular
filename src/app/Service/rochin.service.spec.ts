import { TestBed } from '@angular/core/testing';

import { RochinService } from './rochin.service';

describe('RochinService', () => {
  let service: RochinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RochinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
