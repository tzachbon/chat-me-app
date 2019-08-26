import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GroupService } from 'src/app/services/group.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  groupId: string;
  groupId$: Subscription;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchParams();
  }

  fetchParams() {
    this.groupId = this.route.snapshot.params['id'];
    this.groupId$ = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.groupId = id;
      }
    });
  }

  ngOnDestroy() {
    if (this.groupId$) {
      this.groupId$.unsubscribe();
    }
  }

}
