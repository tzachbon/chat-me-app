import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Group } from '../../models/group.model';

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

  getUsers(name: string) {
    return this.http.get(`user/${name}`);
  }

  createGroup(group: Group) {
    return this.http.post(`group/add-group`, { group });
  }

  getGroups(id: string) {
    return this.http.get(`group/${id}`);
  }

  getImages(images: string[]) {
    return this.http.post(`image`, { images });
  }


}
