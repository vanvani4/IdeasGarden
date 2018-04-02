import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  formErrors = {
    login: '',
    password: ''
  }

  validationMessages = {
    login: {
      required: 'Login is required',
      email: 'Enter valid email',

    },
    password: {
      required: 'Password is reqired',
      minlength: 'Password must be at least 6 characters long'
    }
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm.valueChanges.subscribe(data => this.valueChange(data))
  }

  valueChange(data) {
    console.log(this.formErrors);
    
    for (let field in this.formErrors) {
      this.formErrors[field] = '';

      const control = this.loginForm.get(field);

      if (control.dirty && control.invalid) {
        const res = [];     

        for (let key in control.errors) {
          res.push(this.validationMessages[field][key]);
        }
        
        this.formErrors[field] = res.join(' , ');
      }
    }
  }

  onSubmit(form: FormGroup) {
    console.log(form.valid);
    console.log(form.value);
  }

}