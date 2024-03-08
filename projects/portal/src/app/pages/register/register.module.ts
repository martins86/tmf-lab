import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [FormsModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule];

import { PhoneMaskDirective, ValidatePhoneService } from '../../shared/directives/phone-mask.directive';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
	declarations: [RegisterComponent, PhoneMaskDirective],
	imports: [CommonModule, RegisterRoutingModule, ...materialModules, TranslateModule.forChild()],
	providers: [ValidatePhoneService, { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'auto' } }],
	exports: [RegisterComponent],
})
export class RegisterModule {}
