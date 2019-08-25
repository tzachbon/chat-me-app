import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  signUp(user: User) {
    return this.http.post('user/sign-up', user);
  }

  signIn(email, password) {
    return this.http.post('user/sign-in', { email, password });
  }

  
}
