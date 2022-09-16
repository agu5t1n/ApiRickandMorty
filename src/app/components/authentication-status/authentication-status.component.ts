import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-authentication-status',
  templateUrl: './authentication-status.component.html',
  styleUrls: ['./authentication-status.component.css']
})
export class AuthenticationStatusComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {}

}
