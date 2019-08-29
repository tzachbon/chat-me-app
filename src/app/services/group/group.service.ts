import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHttp } from 'src/app/models/http.model';
import { GroupWithRole, Group } from 'src/app/models/group.model';
import { HttpService } from '../http/http.service';
import { Message } from '../../models/message.model';
import { Image } from '../../models/image.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups: GroupWithRole[] = [];
  public groups$ = new BehaviorSubject<GroupWithRole[]>(this.groups);

  constructor(private http: HttpService) { }

  onGetUsers(name: string) {
    return this.http.getUsers(name);
  }

  onCreateGroup(group: Group) {
    return this.http.createGroup(group);
  }

  onGetGroups(id: string) {
    return this.http.getGroups(id);
  }

  setGroups(groups: GroupWithRole[]) {
    this.groups = groups;
    this.groupsHasChanged();
  }

  onGetMessages(groupId, userId) {
    return this.http.getMessages(groupId, userId);
  }

  onSendMessage(groupId: string, message: Message) {
    return this.http.sendMessage(groupId, message);
  }

  onDeleteMessage(groupId: string, messageId: string) {
    return this.http.deleteMessage(groupId, messageId);
  }

  onGetImage(group: Group, callBack?: () => void) {
    if (typeof group.image === 'string') {
      this.http.getImage(group.image).subscribe((res: IHttp<{ image: Image }>) => {
        if (res.isValid) {
          group.image = res.body.image;
          if (callBack) {
            callBack();
          }
        }
      });
    }
  }

  onGetUsersImages(users: User[], callback?: () => void) {
    const usersImages = users.map(user => {
      if (typeof user.image === 'string') {
        return user.image;
      }
      return '';
    });
    this.http.getImages(usersImages).subscribe((res: IHttp<{ images: { image: string, _id: string }[] }>) => {
      if (res.isValid) {
        const images = res.body.images;
        users.map((user, i) => {
          if (user.image && images[i]) {
            user.image = images[i];
          }
        });
        if (callback) {
          callback();
        }
      }
    });

  }

  onGetImages(callback?: () => void) {
    const imagesArray: any = this.groups.map(group => {
      if (group.group) {
        return group.group.image;
      }
      return '';
    });
    this.http.getImages(imagesArray).subscribe((res: IHttp<{ images: { image: string, _id: string }[] }>) => {
      if (res.isValid) {
        const images = res.body.images;
        this.groups = this.groups.map((grp, i) => {
          if (grp.group && images[i]) {
            grp.group.image = images[i].image;
          }
          return grp;
        }).filter(grp => grp.group);
        this.groupsHasChanged();
      }
      if (callback) {
        callback();
      }
    });
  }

  groupsHasChanged() {
    this.groups$.next(this.groups);
  }

}
