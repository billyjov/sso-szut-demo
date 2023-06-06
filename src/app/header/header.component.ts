import { Component } from '@angular/core';

import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public isAuthenticated$: Observable<boolean> =
    this.authService.isAuthenticated$;

  constructor(private authService: AuthService) {}

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }

  public logoutExternally(): void {
    window.open(this.authService.logoutUrl);
  }

  public refresh(): void {
    this.authService.refresh();
  }

  public reload(): void {
    window.location.reload();
  }

  public clearStorage(): void {
    localStorage.clear();
  }
}
