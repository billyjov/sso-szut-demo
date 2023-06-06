import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  bearer =
    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2ODU5NzUxOTQsImlhdCI6MTY4NTk3MTU5NCwianRpIjoiMjBkM2Q0ZmYtM2VjNC00Mjg2LWE4MzYtNmE1NTk4YjU5ODA5IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI3YzkxYjgwZS1jNmRlLTQ3MmEtOTc3ZC0zYzcxMTEyMWI5MzQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.EY0JegAWM3eZBdx8w-R4h5FVttBxSvlrqI7-wxq6BA8hDcFHXi6hZbESJlDaMlezYyCAzNJrvkQ0lzTAN0Hw_Iwkw1cCaIlx88qmBlChYvNVvWVwWRXOVzioCfbGfr4rDwD6GuqMivqyEqWOU2SCcgj7JJbcv45kMW-JALCkL6W9l0qwHIn_F7srapfro4UYpy-KhkQ3bnigbSROApffYE_HXJYP22Fhft2m81QiqzNTHXLAYTj1ukHcQ5iRO_rEIqcMxbDQOfSUxAwxIdtZOG5SJG_19XNAXsPbm-WvR6zu_9MeOEBN-CDhQere3c3G4k5e7y6PMeIStYL9Fv6p1g';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient, private oauthService: OAuthService) {
    this.employees$ = of([]);
    this.fetchData();
  }

  public fetchData(): void {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        // .set('Authorization', `Bearer ${this.oauthService.getAccessToken()}`),
        // .set('Authorization', `Bearer ${this.bearer}`),
    });
  }
}
