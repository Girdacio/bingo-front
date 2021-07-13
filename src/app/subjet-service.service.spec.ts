import { TestBed } from '@angular/core/testing';

import { SubjetServiceService } from './subjet-service.service';

describe('SubjetServiceService', () => {
  let service: SubjetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
