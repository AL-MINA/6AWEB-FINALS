import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
