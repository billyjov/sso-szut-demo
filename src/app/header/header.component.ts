import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private oauthService: OAuthService
    // private keycloakService: KeycloakService
  ) {}

  public logout(): void {

     this.oauthService.logOut();
    // this.keycloakService.logout();
  }

  public login(): void {
    this.oauthService.initLoginFlow();
    // this.keycloakService.login();
  }
}
