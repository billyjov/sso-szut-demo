import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

import { AuthConfig } from 'angular-oauth2-oidc';
import { Observable, filter } from 'rxjs';
import { AuthService } from './core/auth.service';

// export const authCodeFlowConfig: AuthConfig = {
//   issuer: 'https://keycloak.szut.dev/auth/realms/szut',
//   redirectUri: window.location.origin + '/',
//   postLogoutRedirectUri: window.location.origin + '/login',
//   clientId: 'employee-management-service-frontend',
//   responseType: 'code',
//   scope: 'openid profile email offline_access',
//   // showDebugInformation: true,
//   // timeoutFactor: 0.01,
//   // checkOrigin: false,
//   // scope: 'openid profile email offline_access',
//   showDebugInformation: true,
//   requireHttps: false,
//   disableAtHashCheck: true,
//   // sessionChecksEnabled: true,
//   // sessionCheckIntervall: 60000,

//   // when this is not set to false, the router refuses to
//   // redirect to the requested URL after tryLogin()
//   clearHashAfterLogin: false,
//   // silentRefreshTimeout: 5000, // For faster testing
//   // timeoutFactor: 0.25, // For faster testing
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // constructor(
  //   private oauthService: OAuthService,
  //   private authService: AuthService
  // ) {
  // this.authService.login();
  // this.oauthService.configure(authCodeFlowConfig);
  // this.oauthService.loadDiscoveryDocumentAndLogin();
  // this.oauthService.loadDiscoveryDocumentAndLogin();
  // this.oauthService.events
  //   .pipe(filter((e) => e.type === 'token_received'))
  //   .subscribe((value) => {
  //     console.log('token_received', value);
  //     this.oauthService.loadUserProfile();
  //   });
  // Für den Client registrierte Id
  // this.oauthService.clientId = 'employee-management-service-frontend';
  // // Url des Angular-Clients, an die das Token zu senden ist
  // this.oauthService.redirectUri = window.location.origin + '/index.html';
  // // Rechte, die der Client wahrnehmen möchte
  // this.oauthService.scope = 'openid profile email flightapi_user';
  // // Definieren, dass auch ein Id-Token abgerufen werden soll
  // this.oauthService.oidc = true;
  // // Festlegen, ob Tokens im localStorage oder im sessionStorage zu speichern sind
  // this.oauthService.setStorage(sessionStorage);
  // let url =
  //   'https://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/login-status-iframe.html/init?client_id=employee-management-service-frontend';
  // // let url =
  // //   'https://keycloak.szut.dev/auth/realms/szut/.well-known/openid-configuration';
  // this.oauthService.loadDiscoveryDocument(url).then((doc) => {
  //   console.log('discovery document loaded', doc);
  //   // Eventuelle Tokens aus Url entnehmen
  //   this.oauthService.tryLogin({});
  // });
  // }

  // get userName(): string | null {
  //   const claims = this.oauthService.getIdentityClaims();
  //   if (!claims) return null;
  //   return claims['given_name'];
  // }

  // get idToken(): string {
  //   return this.oauthService.getIdToken();
  // }

  // get accessToken(): string {
  //   return this.oauthService.getAccessToken();
  // }

  isAuthenticated$: Observable<boolean>;
  isDoneLoading$: Observable<boolean>;
  canActivateProtectedRoutes$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.isDoneLoading$ = this.authService.isDoneLoading$;
    this.canActivateProtectedRoutes$ =
      this.authService.canActivateProtectedRoutes$;
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
  refresh() {
    this.authService.refresh();
  }
  reload() {
    window.location.reload();
  }
  clearStorage() {
    localStorage.clear();
  }

  logoutExternally() {
    window.open(this.authService.logoutUrl);
  }

  get hasValidToken() {
    return this.authService.hasValidToken();
  }
  get accessToken() {
    return this.authService.accessToken;
  }
  get refreshToken() {
    return this.authService.refreshToken;
  }
  get identityClaims() {
    return this.authService.identityClaims;
  }
  get idToken() {
    return this.authService.idToken;
  }
}
