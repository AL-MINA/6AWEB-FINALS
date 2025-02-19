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

formdata: FormGroup = new FormGroup({
userName: new FormControl(""),
email: new FormControl(""),
age: new FormControl(""),
address: new FormControl("")
});

onClickSubmit(data: { userName: string; email: string; age: number; address: string }) {
this.userName = data.userName;

console.log('Form Submitted:', data);
}
}