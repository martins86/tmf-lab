import { TestBed } from '@angular/core/testing';

import { TimeoutInterceptor } from './timeout.interceptor';

describe('Testes do TimeoutInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TimeoutInterceptor],
    })
  );

  it('Deve inicializar o TimeoutInterceptor', () => {
    const interceptor: TimeoutInterceptor = TestBed.inject(TimeoutInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
