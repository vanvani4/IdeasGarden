import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(login: string, password: string) {
    return this.http.post('http://localhost:3000/login', { login, password })
      .map((data: Response) => {
        // if (data && data.token) {
        //   localStorage.setItem('currentUser', JSON.stringify(data))
        // }
        // const user = data.json().user;
        // this.saveToken(data.json().token);
        // localStorage.setItem('currentUser', user);
      });
  }

  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }

  deleteToken() {
    window.localStorage.removeItem('jwtToken');
  }
}
