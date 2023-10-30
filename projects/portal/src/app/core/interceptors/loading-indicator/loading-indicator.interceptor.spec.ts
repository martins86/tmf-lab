import { TestBed } from '@angular/core/testing';

import { LoadingInterceptor } from './loading-indicator.interceptor';

describe('Testes do LoadingInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LoadingInterceptor],
    })
  );

  it('Deve inicializar o LoadingInterceptor', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
