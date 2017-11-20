import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  constructor(
    protected authenticationService: AuthenticationService
  ) { }

  logout(): void {
    this.authenticationService.logout();
  }

  ngOnInit() {
  }

}
