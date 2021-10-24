import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EMAIL_REGEX, NotificationService, PASSWORD_REGEX } from 'src/shared';
import { CreateNotification, Login } from '../state/app/app.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.pattern(PASSWORD_REGEX)]]
      }
    );
  }

  login() {
    if (this.loginForm.valid) {
      const loginCredentials = this.loginForm.value;
      console.log(loginCredentials);
      this.store.dispatch(new Login(loginCredentials))
    } else {
      this.store.dispatch(new CreateNotification({ title: 'Form is not valid', content: 'Login credentials are not valid.' }))
    }
  }

}
