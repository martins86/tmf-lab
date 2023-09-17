import { TestBed } from '@angular/core/testing';

import { FeatureToggleResolver } from './feature-toggle.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Testes do FeatureToggleResolver', () => {
  let resolver: FeatureToggleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    resolver = TestBed.inject(FeatureToggleResolver);
  });

  it('Deve criar o FeatureToggleResolver', () => {
    expect(resolver).toBeTruthy();
  });
});
