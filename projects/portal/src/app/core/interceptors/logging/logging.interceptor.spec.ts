import { TestBed } from '@angular/core/testing';

import { LoggingInterceptor } from './logging.interceptor';

describe('Testes do LoggingInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			providers: [LoggingInterceptor],
		})
	);

	it('Deve inicializar o LoggingInterceptor', () => {
		const interceptor: LoggingInterceptor = TestBed.inject(LoggingInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
