import { TestBed } from '@angular/core/testing';

import { ServiceMontreService } from './service-montre.service';

describe('ServiceMontreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceMontreService = TestBed.get(ServiceMontreService);
    expect(service).toBeTruthy();
  });
});
