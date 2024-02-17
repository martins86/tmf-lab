import { TestBed } from '@angular/core/testing';

import { CompressionInterceptor } from './compression.interceptor';

describe('Testes do CompressionInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [CompressionInterceptor],
		})
	);

	it('Deve inicializar o CompressionInterceptor', () => {
		const interceptor: CompressionInterceptor = TestBed.inject(CompressionInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
