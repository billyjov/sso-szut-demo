import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public isAuthenticated$: Observable<boolean>;
  public isDoneLoading$: Observable<boolean>;
  public canActivateProtectedRoutes$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.isDoneLoading$ = this.authService.isDoneLoading$;
    this.canActivateProtectedRoutes$ =
      this.authService.canActivateProtectedRoutes$;
  }



  public get hasValidToken(): boolean {
    return this.authService.hasValidToken();
  }

  public get accessToken(): string {
    return this.authService.accessToken;
  }

  public get refreshToken(): string {
    return this.authService.refreshToken;
  }

  public get identityClaims(): Record<string, unknown> {
    return this.authService.identityClaims;
  }

  public get idToken(): string {
    return this.authService.idToken;
  }
}
