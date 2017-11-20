import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  constructor(
    protected authenticationService: AuthenticationService,
    protected router: Router
  ) { }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
