import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FeatureToggleService } from './feature-toggle.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FeatureToggleService', () => {
  let service: FeatureToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureToggleService],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(FeatureToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
