import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoadingService {
	private loading: boolean = false;

	setSpinner(loading: boolean): void {
		this.loading = loading;
	}

	getSpinner(): boolean {
		return this.loading;
	}
}
