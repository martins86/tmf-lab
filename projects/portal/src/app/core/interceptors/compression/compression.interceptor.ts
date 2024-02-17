import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class CompressionInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler) {
		const compressedRequest = request.clone({
			setHeaders: {
				'Accept-Encoding': 'gzip, deflate',
			},
		});
		return next.handle(compressedRequest);
	}
}
