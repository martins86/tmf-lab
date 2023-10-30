import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('Testes do LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('Deve inicializar o LoadingService', () => {
    expect(service).toBeTruthy();
  });
});
