import { Component } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  controlName = new FormControl('', Validators.required);
  controlEmail = new FormControl('', Validators.pattern(/.+@.+\..+/));

  constructor(private formBuilder: FormBuilder) {
    this.startRegisterForm();
  }

  startRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      fieldName: this.controlName,
      fieldEmail: this.controlEmail,
    });
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
  }

  getErrorEmailMessage(): string {
    return this.controlEmail.hasError('required')
      ? 'E-mail Obrigatório'
      : 'E-mail inválido';
  }
}
