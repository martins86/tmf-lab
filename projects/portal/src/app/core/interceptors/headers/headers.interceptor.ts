import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'X-API-Key': 'your-api-key',
		});
		const headersRequest = request.clone({ headers });
		return next.handle(headersRequest);
	}
}
