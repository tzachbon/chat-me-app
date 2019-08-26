import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { Group, GroupWithRole } from '../models/group.model';
import { BehaviorSubject } from 'rxjs';

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

  groupsHasChanged() {
    this.groups$.next(this.groups);
  }

}
