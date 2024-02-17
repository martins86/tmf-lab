import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
	private baseUrl = 'https://api.example.com';

	intercept(request: HttpRequest<any>, next: HttpHandler) {
		const apiRequest = request.clone({
			url: `${this.baseUrl}${request.url}`,
		});
		return next.handle(apiRequest);
	}
}
