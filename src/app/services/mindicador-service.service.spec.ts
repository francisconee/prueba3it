import { TestBed } from '@angular/core/testing';

import { MindicadorServiceService } from './mindicador-service.service';

describe('MindicadorServiceService', () => {
  let service: MindicadorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MindicadorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
