import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { log } from 'util';
import { Router } from '@angular/router';

import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  state: string = 'small';

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
      minlength: 'Password must be at least 8 characters long'
    }
  }
  constructor(private fb: FormBuilder, private router: Router,) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });

    this.loginForm.valueChanges.subscribe(data => this.valueChanged(data))
  }

  valueChanged(data) {
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.loginForm.get(field);
      if (control.dirty) {
        for (const key in control.errors) {
          this.formErrors[field] = this.validationMessages[field][key];
        }
      }
    }
  }

  onSubmit(form: FormGroup) {
    console.log(form.valid);
    console.log(form.value);
    console.log(form.pristine);
    
    //this.router.navigate(['main']);
  }

  // animateMe() {
  //   this.state = (this.state === 'small' ? 'large' : 'small');
  // }

}