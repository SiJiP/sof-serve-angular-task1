import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { CurrencyService } from "./../currency.service";
import { format } from 'util';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  usernamePattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.{3,})');
  passwordPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
  salaryPattern = new RegExp('^([0-9])');
  currencies;
  private currency;
   
  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({
  //     username: ['', Validators.required, Validators.pattern(this.usernamePattern)],
  //     password: ['', Validators.required, Validators.pattern(this.passwordPattern)],
  //     age: ['', Validators.required, UsernameValidators.ageValidator],
  //     salary: ['', Validators.required, Validators.pattern(this.salaryPattern)]
  //   })
  //  }
  constructor(service: CurrencyService) {
    this.currencies = service.getList();
  }
  
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
    'currency': new FormControl('', []),

    'salary': new FormControl('', [
      Validators.required,
      Validators.pattern(this.salaryPattern)
    ])

  });

 
  onChange(){
    this.currency = this.form.get('currency').value;
  }

  ngOnInit() {
  }

}
