import { TestBed } from '@angular/core/testing';

import { RandomService } from './random.service';

describe('RandomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomService = TestBed.get(RandomService);
    expect(service).toBeTruthy();
  });

  it('getRandomFormData() returns a JSON.parse()-able string', () => {
    const service: RandomService = TestBed.get(RandomService);
    expect(service).toBeTruthy();

    for (let index = 0; index < 100; index++) {
      const randomFormData = service.getRandomFormData();
      const obj = JSON.parse(randomFormData);
      expect(obj).toBeDefined();
    }
  });
});
