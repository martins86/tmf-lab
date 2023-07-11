import { TestBed } from '@angular/core/testing';

import { FeatureToggleResolver } from './feature-toggle.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FeatureToggleResolver', () => {
  let resolver: FeatureToggleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    resolver = TestBed.inject(FeatureToggleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
