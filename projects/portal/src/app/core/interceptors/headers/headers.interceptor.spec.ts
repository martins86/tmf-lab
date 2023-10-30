import { TestBed } from '@angular/core/testing';

import { HeadersInterceptor } from './headers.interceptor';

describe('Testes do HeadersInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HeadersInterceptor],
    })
  );

  it('Deve inicializar o HeadersInterceptor', () => {
    const interceptor: HeadersInterceptor = TestBed.inject(HeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
