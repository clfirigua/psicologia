import { TestBed } from '@angular/core/testing';

import { ComplementsService } from './complements.service';

describe('ComplementsService', () => {
  let service: ComplementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
