import { TestBed } from '@angular/core/testing';

import { IpLocationServiceService } from './ip-location-service.service';

describe('IpLocationServiceService', () => {
  let service: IpLocationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpLocationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
