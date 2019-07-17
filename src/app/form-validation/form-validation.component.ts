import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  usernamePattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.{3,})');
  passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
  maxDate = new Date().toISOString().slice(0,10);
  salaryPattern = new RegExp('^([0-9])');
  
  constructor() { }

  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.usernamePattern),
    ]),

    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.passwordPattern),
    ]),

    'age': new FormControl('', [
      Validators.required,
      UsernameValidators.ageValidator,
    ]),

    'salary': new FormControl('', [
      Validators.required,
      Validators.pattern(this.salaryPattern)
    ])
  });

  login(){
    this.form.setErrors({
      invalidLogin: true,
    })
  }
  

  ngOnInit() {
    
  }

}
