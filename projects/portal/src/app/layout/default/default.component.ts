import { Component } from '@angular/core';

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
	leftBarOpen: boolean = false;
	maintenance: boolean = false;

	toggleLeftBar(): void {
		this.leftBarOpen = !this.leftBarOpen;
	}

	closeLeftBar(): void {
		this.leftBarOpen = false;
	}
}
