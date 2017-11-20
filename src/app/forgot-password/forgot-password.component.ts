import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {

  retrieveForm: FormGroup;
  sentPassword: boolean;

  constructor(
    protected formBuilder: FormBuilder
  ) { }

  createForm(): void {
    this.retrieveForm = this.formBuilder.group({
      email: [ '', Validators.email]
    });
  }

  sendPassword(): void {
    this.sentPassword = true;
  }

  ngOnInit() {
    this.sentPassword = false;
    this.createForm();
  }

}
