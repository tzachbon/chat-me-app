import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Group, UserGroup, ERole } from 'src/app/models/group.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-menu-more',
  templateUrl: './chat-menu-more.component.html',
  styleUrls: ['./chat-menu-more.component.scss'],
})
export class ChatMenuMoreComponent implements OnInit {
  @Input() group: Group;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isUserIsAdmin() {
    const id = this.authService.getUser()._id;
    const userIndex = this.group.users.findIndex((res: User | UserGroup) => {
      if (res.hasOwnProperty('userId')) {
        return (res as UserGroup).userId === id;
      }
      return (res as User)._id === id;
    });

    if (userIndex) {
      const user = this.group.users[userIndex];
      return (user as UserGroup).role === ERole.admin;
    }
    return false;
  }
}
