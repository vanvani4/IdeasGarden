import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private auth: AuthGuardService, 
    private router: Router) {}

  canActivate(): boolean {
    if(!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
