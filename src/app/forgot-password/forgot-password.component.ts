import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  retrieveForm: FormGroup;
  sentPassword: boolean;

  constructor(
    protected formBuilder: FormBuilder,
    protected userService: UserService
  ) { }

  createForm(): void {
    this.retrieveForm = this.formBuilder.group({
      email: [ '', Validators.email]
    });
  }

  sendPassword(): void {
    this.userService.retrievePassword(this.retrieveForm.get('email').value)
      .subscribe(
        (success) => {
          this.sentPassword = true;
        },
        (fail) => {
          // TODO: ERROR HANDLE
          console.log(fail);
        }
      );
  }

  ngOnInit() {
    this.sentPassword = false;
    this.createForm();
  }

}
