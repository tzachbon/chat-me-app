import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  public user$ = new BehaviorSubject<User>(this.user);

  constructor() { }

  setUser(user: User) {
    this.user = user;
    this.userHasChanged();
  }

  userHasChanged() {
    this.user$.next(this.user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }
}
