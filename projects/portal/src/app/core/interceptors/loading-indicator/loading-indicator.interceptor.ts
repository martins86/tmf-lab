import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

import { LoadingService } from '@services/loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
	constructor(private loadingService: LoadingService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler) {
		this.loadingService.setSpinner(true);
		return next.handle(request).pipe(
			finalize(() => {
				this.loadingService.setSpinner(false);
			})
		);
	}
}
