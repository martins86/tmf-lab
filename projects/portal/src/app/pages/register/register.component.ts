import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ISelectItem } from '@interfaces/iselect-item.interface';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
	registerForm!: FormGroup;
	controlName!: FormControl;
	controlBirthDate!: FormControl;
	controlDocument!: FormControl;
	controlPhone!: FormControl;
	controlEmail!: FormControl;
	controlNickname!: FormControl;
	controlItem!: FormControl;
	listItems!: ISelectItem[];

	regexCPF = 'd{3}.d{3}.d{3}-d{2}';

	constructor(private formBuilder: FormBuilder) {
		this.startControlFields();
		this.startRegisterForm();
		this.getListItems();
	}

	getListItems(): void {
		this.listItems = [];

		if (this.listItems?.length < 1) {
			this.controlItem.setValue('XX');
			this.controlItem.markAsTouched();
		}
	}

	startControlFields(): void {
		this.controlName = new FormControl('', Validators.required);
		this.controlEmail = new FormControl('', Validators.email);
		this.controlBirthDate = new FormControl('', Validators.required);
		this.controlDocument = new FormControl('', [Validators.required]);
		this.controlPhone = new FormControl('', Validators.required);
		this.controlNickname = new FormControl('');
		this.controlItem = new FormControl('', [Validators.required, Validators.minLength(3)]);
	}

	startRegisterForm(): void {
		this.registerForm = this.formBuilder.group({
			fieldName: this.controlName,
			fieldBirthDate: this.controlBirthDate,
			fieldDocument: this.controlDocument,
			fieldPhone: this.controlPhone,
			fieldEmail: this.controlEmail,
			fieldNickname: this.controlNickname,
			fieldItem: this.controlItem,
		});
	}

	onSubmit(): void {
		if (this.registerForm.valid) {
			console.log('Submit: ', this.registerForm.value);
		}
	}

	resetForm(): void {
		this.startControlFields();
		this.getListItems();
	}

	getStyle(field: FormControl) {
		return {
			'mat-form-field-valid': field.valid && field.touched,
		};
	}

	getErrorEmailMessage(): string {
		return this.controlEmail.hasError('required') ? 'E-mail Obrigatório!' : 'E-mail inválido';
	}
}
