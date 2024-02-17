import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';

describe('Testes do AuthInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [AuthInterceptor],
		})
	);

	it('Deve inicializar o AuthInterceptor', () => {
		const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
