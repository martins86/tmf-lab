import { TestBed } from '@angular/core/testing';

import { BaseUrlInterceptor } from './baseurl.interceptor';

describe('Testes do BaseUrlInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [BaseUrlInterceptor],
		})
	);

	it('Deve inicializar o BaseUrlInterceptor', () => {
		const interceptor: BaseUrlInterceptor = TestBed.inject(BaseUrlInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
