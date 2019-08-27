import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHttp } from 'src/app/models/http.model';
import { GroupWithRole, Group } from 'src/app/models/group.model';
import { HttpService } from '../http/http.service';

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

  onGetImages(callback?: () => void) {
    const imagesArray: string[] = this.groups.map(group => {
      if (group.group) {
        return group.group.image;
      }
      return '';
    }).filter(img => img);
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
