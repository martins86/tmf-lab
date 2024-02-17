import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler) {
		return next.handle(request).pipe(
			tap((event) => {
				if (event instanceof HttpResponse) {
					console.log('HTTP Response:', event);
				}
			})
		);
	}
}
