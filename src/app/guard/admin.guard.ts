import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthGuardService } from './auth-guard.service';
import * as decode from 'jwt-decode';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthGuardService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    // if (
    //   !this.auth.isAuthenticated() || 
    //   tokenPayload.role !== expectedRole
    // ) {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }
}
