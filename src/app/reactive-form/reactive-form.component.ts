import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveComponent {
  title = 'form-app';
  userName: string = "";
  email: string = "";
  age: string = "";
  address: string = "";
  submitted = false;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(""),
    email: new FormControl(""),
    age: new FormControl(""),
    address: new FormControl("")
  });

  onClickSubmit() {
    if (this.formdata.valid) {
      const data = this.formdata.value;
      this.userName = data.userName;
      this.email = data.email;
      this.age = data.age;
      this.address = data.address;
      this.submitted = true; 

      console.log('Form Submitted:', data);
    }
  }
}
