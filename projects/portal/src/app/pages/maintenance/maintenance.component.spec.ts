import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceComponent } from './maintenance.component';

describe('Testes do MaintenanceComponent', () => {
	let component: MaintenanceComponent;
	let fixture: ComponentFixture<MaintenanceComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MaintenanceComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MaintenanceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Deve inicializar o MaintenanceComponent', () => {
		expect(component).toBeTruthy();
	});
});
