import { TestBed } from '@angular/core/testing';

import { CacheInterceptor } from './cache.interceptor';

describe('Testes do CacheInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [CacheInterceptor],
    })
  );

  it('Deve inicializar o CacheInterceptor', () => {
    const interceptor: CacheInterceptor = TestBed.inject(CacheInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
