import { TestBed } from '@angular/core/testing';

import { SesdataService } from './sesdata.service';

describe('SesdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SesdataService = TestBed.get(SesdataService);
    expect(service).toBeTruthy();
  });
});
