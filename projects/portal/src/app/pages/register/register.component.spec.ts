import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateStubModule } from '@utils/stubs/translate-stub.module';

import { RegisterComponent } from './register.component';
import { RegisterModule } from './register.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Testes do RegisterComponent', () => {
	let component: RegisterComponent;
	let fixture: ComponentFixture<RegisterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RegisterComponent],
			imports: [RegisterModule, BrowserAnimationsModule, TranslateStubModule, RouterModule.forRoot([])],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RegisterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Deve inicializar o RegisterComponent', () => {
		expect(component).toBeTruthy();
	});
});
