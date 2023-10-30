import { TestBed } from '@angular/core/testing';

import { RetryInterceptor } from './retry.interceptor';

describe('Testes do RetryInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [RetryInterceptor],
    })
  );

  it('Deve inicializar o RetryInterceptor', () => {
    const interceptor: RetryInterceptor = TestBed.inject(RetryInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
