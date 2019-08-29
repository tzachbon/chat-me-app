import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  public user$ = new BehaviorSubject<User>(this.user);

  constructor(private http: HttpService) { }

  setUser(user: User) {
    this.user = user;
    this.userHasChanged();
  }

  getUser() {
    return this.user;
  }

  userHasChanged() {
    this.user$.next(this.user);
  }

  onSignIn(email, password) {
    this.removeToken();
    return this.http.signIn(email, password);
  }

  onSignUp(user: User) {
    this.removeToken();
    return this.http.signUp(user);
  }

  onSignOut() {
    localStorage.clear();
    this.user = null;
    this.userHasChanged();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  onSubscribeToNotification(subscription) {
    return this.http.subscription(subscription, this.getUser()._id);
  }

}
