import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { log } from 'util';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthGuardService } from '../../guard/auth-guard.service'

// import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [
  //   trigger('arrive', [
  //     state('smal', style({
  //       transform: 'scale(1)',
  //     })),
  //     state('large', style({
  //       transform: 'scale(1.2)'
  //     })),
  //     transition('small => large', animate('1000ms eese-in', keyframes([
  //       style({opacity:0, transform: 'translateY(-75%)', offset:0}),
  //       style({opacity:1, transform: 'translateY(35px)', offset:0.5}),
  //       style({opacity:1, transform: 'translateY(0)', offset:1.0}),
  //     ]))),
  //   ]),
  // ]
})

export class LoginComponent implements OnInit {

  user: User;
  loginForm: FormGroup;
  state = 'small';

  formErrors = {
    login: '',
    password: ''
  };

  validationMessages = {
    login: {
      required: 'Login is required',
      email: 'Enter valid email',

    },
    password: {
      required: 'Password is reqired',
      minlength: 'Password must be at least 8 characters long'
    }
  };
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthGuardService) { }

  ngOnInit() {
    // this.animateMe();
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.loginForm.valueChanges.subscribe(data => this.valueChanged(data));
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
    this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
    .subscribe(
      data => {
        this.router.navigate(['main']);
      }
    );
    // console.log(form.valid);
    // console.log(form.value);
    // console.log(form.pristine);
    // this.router.navigate(['main']);
  }
  // animateMe() {
  //   this.state = (this.state === 'small' ? 'large' : 'small');
  // }

  

}
