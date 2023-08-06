import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  session: any;

  constructor(private http: HttpClient) {
    let session = localStorage.getItem('session');
    if (session) this.session = JSON.parse(session);
  }

  login(username: string, password: string) {
    let ob = this.http
      .post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
      })
      .pipe(share());

    ob.subscribe((response) => {
      this.session = response;
      localStorage.setItem('session', JSON.stringify(this.session));
    });

    return ob;
  }

  logout() {
    this.session = undefined;
    localStorage.removeItem('session');
  }
}
