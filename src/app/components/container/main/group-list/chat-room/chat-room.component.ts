import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GroupService } from 'src/app/services/group/group.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHttp } from 'src/app/models/http.model';
import { Message } from '../../../../../models/message.model';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';
import { IWebSocketData } from 'src/app/models/websocket.model';
import { MatNavList } from '@angular/material';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  groupId: string;
  groupId$: Subscription;
  messages: Message[] = [];
  messageInput = '';
  isLoading = true;

  @ViewChild('messagesContainerRef', { static: false }) messagesContainerRef: ElementRef<HTMLDivElement>;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private wws: WebsocketService
  ) { }

  ngOnInit() {
    this.fetchParams();
  }

  connect() {
    this.wws.listen(this.groupId)
      .subscribe((res: IWebSocketData<{ message: Message }>) => {
        if (res.action === 'message') {
          const message = res.data.message;
          this.pushMessage(message);
          this.messageInput = '';
          this.scrollToTheLastMessage();
        }
      });
  }

  pushMessage(message: Message) {
    this.messages.push(message);
    // const lastMessage =

  }

  // joinSaveUserMessage() {
  //   const tempMessages = [];
  //   this.messages.forEach((message, i) => {
  //     // if (i > 0) {
  //     //   const lastMessage = this.messages[i];
  //     //   if (lastMessage.userId._id === message.userId._id) {

  //     //   }
  //     // }

  //     if (typeof message.message === 'string') {
  //       message.message = [message.message];
  //     }

  //     if (!tempMessages.length) {
  //       tempMessages.push(message);
  //     } else {
  //       const lastTempItem = tempMessages[tempMessages.length - 1];


  //     }
  //   });
  // }



  fetchParams() {
    this.groupId = this.route.snapshot.params['id'];
    if (this.groupId) {
      this.onGetMessages();
    }

    this.groupId$ = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.groupId = id;
        // this.onGetMessages();
      }
    });
  }

  scrollToTheLastMessage() {
    setTimeout(() => {
      const lastMsgRef = (this.messagesContainerRef.nativeElement.lastChild as HTMLDivElement);
      lastMsgRef.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }, 1);
  }

  onGetMessages() {
    this.isLoading = true;
    this.groupService.onGetMessages(this.groupId, this.authService.getUser()._id)
      .subscribe((res: IHttp<{ messages: Message[] }>) => {
        if (res.isValid) {
          this.messages = res.body.messages;
          this.connect();
          this.isLoading = false;
          this.scrollToTheLastMessage();

        }
      });
  }

  isSiblingMessage(index: number, user: User) {
    if (index) {
      return this.messages[index - 1].userId._id === user._id;
    }
    return false;
  }

  onSendMessage() {
    const message = {
      date: new Date().toString(),
      message: this.messageInput,
      userId: this.authService.getUser()
    };

    this.groupService.onSendMessage(this.groupId, message)
      .subscribe((res: IWebSocketData<Message>) => {
        console.log('====================================');
        console.log('Message Send');
        console.log('====================================');
      });

  }

  isCurrentUser(user: User) {
    const id = user._id;
    return id === this.authService.getUser()._id;
  }

  ngOnDestroy() {
    if (this.groupId$) {
      this.groupId$.unsubscribe();
    }
  }

}
