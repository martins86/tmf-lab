import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler) {
		const authToken = 'your-auth-token';
		const authRequest = request.clone({
			headers: request.headers.set('Authorization', `Bearer ${authToken}`),
		});
		return next.handle(authRequest);
	}
}
