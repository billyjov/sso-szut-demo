import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

// import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
// import { environment } from '../environments/environment';
import { authAppInitializerFactory, authConfig } from './core/auth-config';
import { AuthService } from './core/auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

// export function initializer(keycloak: KeycloakService): () => Promise<any> {
//   return (): Promise<any> => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         await keycloak.init({
//           config: {
//             url: environment.keycloak.issuer,
//             realm: environment.keycloak.realm,
//             clientId: environment.keycloak.clientId,
//           },
//           loadUserProfileAtStartUp: false,
//           initOptions: {
//             onLoad: 'login-required',
//             checkLoginIframe: true,
//           },
//           bearerExcludedUrls: [],
//         });
//         resolve;
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
// }

export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    // KeycloakAngularModule,
    AppRoutingModule,
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializer,
    //   deps: [KeycloakService],
    //   multi: true,
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: authAppInitializerFactory,
      deps: [AuthService],
      multi: true,
    },
    { provide: AuthConfig, useValue: authConfig },
    { provide: OAuthStorage, useFactory: storageFactory },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
