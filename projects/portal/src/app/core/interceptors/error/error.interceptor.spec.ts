import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';

describe('Testes do ErrorInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [ErrorInterceptor],
		})
	);

	it('Deve inicializar o ErrorInterceptor', () => {
		const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
