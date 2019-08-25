import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  signUp(user: User) {
    return this.http.post('auth/sign-up', user);
  }

  signIn(email, password) {
    return this.http.post('auth/sign-in', { email, password });
  }
}
