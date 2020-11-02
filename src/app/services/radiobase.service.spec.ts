import { TestBed } from '@angular/core/testing';

import { RadiobaseService } from './radiobase.service';

describe('RadiobaseService', () => {
  let service: RadiobaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadiobaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
