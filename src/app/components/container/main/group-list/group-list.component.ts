import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GroupWithRole, ERole, Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IHttp } from 'src/app/models/http.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
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
export class GroupListComponent implements OnInit, OnDestroy {
  showCreateGroupDialog = false;
  groups: GroupWithRole[] = [];
  groups$: Subscription;
  isLoading = false;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initGroups();
    this.initFetchGroups();
  }


  initGroups() {
    this.groups$ = this.groupService.groups$.subscribe(groups => {
      this.groups = groups;
    });
  }

  routeToChat(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  onCreateGroupDialog() {
    this.showCreateGroupDialog = !this.showCreateGroupDialog;
  }


  initFetchGroups() {
    this.isLoading = true;
    this.groupService.onGetGroups(this.authService.getUser()._id)
      .subscribe((res: IHttp<{ groups: { _id: Group, role: ERole }[] }>) => {
        if (res.isValid) {
          const groups: GroupWithRole[] = res.body.groups.map(grp => ({ group: grp._id, role: grp.role }));
          this.groupService.setGroups(groups);
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
