import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Group } from '../../models/group.model';
import { WebsocketService } from '../websocket/websocket.service';
import { Message } from '../../models/message.model';

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

  getMessages(groupId: string, userId: string) {
    return this.http.get(`group/messages/${groupId}/${userId}`);
  }

  sendMessage(groupId: string, message: Message) {
    return this.http.post(`group/send-message`, { groupId, message });
  }

  getImage(imageId) {
    return this.http.get(`image/${imageId}`);
  }

  subscription(subscription, userId) {
    return this.http.post(`user/subscription`, { subscription, userId });
  }

  deleteMessage(groupId: string, messageId: string) {
    return this.http.delete(`group/delete-message/${groupId}/${messageId}`);
  }


}
