import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GroupService } from 'src/app/services/group.service';
import { Group } from '../../../models/group.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IHttp } from '../../../models/http.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('slideBottom', [
      state('void', style({
        transform: 'translateY(100vh)'
      })),
      state('*', style({
        transform: 'translateY(0)'
      })),
      transition(':enter', animate('0.3s ease-in')),
      transition(':leave', animate('0.3s ease-out')),
    ])
  ]
})
export class MainComponent implements OnInit, OnDestroy {
  showCreateGroupDialog = false;
  groups: Group[] = [];
  groups$: Subscription;
  isLoading = false;

  constructor(private groupService: GroupService, private authService: AuthService) { }

  ngOnInit() {
    this.initGroups();
    this.initFetchGroups();
  }

  onCreateGroupDialog() {
    this.showCreateGroupDialog = !this.showCreateGroupDialog;
  }

  initGroups() {
    this.groups$ = this.groupService.groups$.subscribe(groups => {
      this.groups = groups;
    });
  }

  initFetchGroups() {
    this.isLoading = true;
    this.groupService.onGetGroups(this.authService.getUser()._id).subscribe((res: IHttp<{ groups: Group[] }>) => {
      if (res.isValid) {
        this.groupService.setGroups(res.body.groups);
      }
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.groups$) {
      this.groups$.unsubscribe();
    }
  }

}
