import { Directive, Injectable, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NgControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable()
export class ValidatePhoneService implements Validator {
	constructor() {}

	validate(control: AbstractControl): ValidationErrors | null {
		if (control && control.value) {
			if (control.value.length < 10) {
				return { 'phone-mask': true };
			}
		}
		return null;
	}
}

@Directive({
	selector: '[appPhoneMask]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => ValidatePhoneService),
			multi: true,
		},
	],
})
export class PhoneMaskDirective implements OnInit {
	constructor(public ngControl: NgControl) {}

	ngOnInit(): void {
		if (this.ngControl.valueAccessor) {
			const originalWriteVal = this.ngControl.valueAccessor.writeValue.bind(this.ngControl.valueAccessor);

			this.ngControl.valueAccessor.writeValue = (val: any) => originalWriteVal(this._maskValue(val));

			const originalChange = (<any>this.ngControl.valueAccessor)['onChange'].bind(this.ngControl.valueAccessor);
			this.ngControl.valueAccessor.registerOnChange((val: any) => originalChange(this._unmaskValue(val)));

			this._setVal(this._maskValue(this.ngControl.value));
		}
	}

	private _setVal(val: string) {
		if (this.ngControl.control) {
			this.ngControl.control.setValue(val, { emitEvent: false });
		}
	}

	private _maskValue(val: any): string {
		if (val) {
			let newVal: string = val;

			if (!isNaN(val)) {
				newVal = val.toString();
			}

			newVal = newVal.replace(/\D/g, '');

			if (newVal.length === 0) {
				newVal = '';
			} else if (newVal.length <= 2) {
				//  newVal = newVal.replace(/^(\d{0,2})/, '($1)');
			} else if (newVal.length <= 6) {
				newVal = newVal.replace(/^(\d{0,2})(\d{0,4})/, '($1) $2');
			} else if (newVal.length <= 10) {
				newVal = newVal.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, '($1) $2-$3');
			} else {
				newVal = newVal.substring(0, 11);
				newVal = newVal.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
			}

			return newVal;
		}
		return val;
	}

	private _unmaskValue(val: string): string {
		const maskedVal = this._maskValue(val);
		const unmaskedVal = this.unmaskValue(maskedVal);

		if (maskedVal !== val) {
			this._setVal(maskedVal);
		}

		return maskedVal ? unmaskedVal : '';
	}

	private unmaskValue(value: string): any {
		if (value) {
			return value.replace(/\D/g, '');
		}
		return undefined;
	}
}
