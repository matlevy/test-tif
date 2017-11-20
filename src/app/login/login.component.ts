import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    protected authenticationService: AuthenticationService,
    protected formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['test@test.com', Validators.email],
      password: ['password', Validators.required]
    });
  }

  login( email: string, password: string ): void {
    this.authenticationService.authenticate( email, password)
      .subscribe(
        (user: User) => {
          console.log(user);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  authenticate(): void {
    this.login( this.loginForm.get('email').value, this.loginForm.get('password').value );
  }

  ngOnInit() {}

}
