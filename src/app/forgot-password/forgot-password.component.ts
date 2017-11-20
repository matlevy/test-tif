import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AlertsService } from '../alerts.service';

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
    protected userService: UserService,
    protected alertsService: AlertsService
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
          this.alertsService.clear();
          this.alertsService.notify('Sorry.. There is no user with that email.');
        }
      );
  }

  ngOnInit() {
    this.alertsService.clear();
    this.sentPassword = false;
    this.createForm();
  }

}
