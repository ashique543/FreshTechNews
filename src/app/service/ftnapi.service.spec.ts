import { TestBed } from '@angular/core/testing';

import { FtnapiService } from './ftnapi.service';

describe('FtnapiService', () => {
  let service: FtnapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtnapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
