import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GroupService } from 'src/app/services/group/group.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { IHttp } from 'src/app/models/http.model';
import { Message } from '../../../../../models/message.model';
import { WebsocketService } from 'src/app/services/websocket/websocket.service';
import { IWebSocketData } from 'src/app/models/websocket.model';
import { User } from 'src/app/models/user.model';
import { Group } from 'src/app/models/group.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],

})
export class ChatRoomComponent implements OnInit, OnDestroy {
  groupId: string;
  groupId$: Subscription;
  group: Group;
  messages: Message[] = [];
  messageInput = '';
  isLoading = true;
  isImageLoaded = false;

  @ViewChild('messagesContainerRef', { static: false }) messagesContainerRef: ElementRef<HTMLDivElement>;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
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
  }

  getPic() {
    const loader = 'https://i.gifer.com/ZZ5H.gif';
    if (this.group && typeof this.group.image !== 'string') {
      return this.isImageLoaded ? this.getTemplateGroupImage() : loader;
    }
    return loader;
  }





  fetchParams() {
    this.groupId = this.route.snapshot.params['id'];
    if (this.groupId) {
      this.onGetMessages();
    }

    this.groupId$ = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.groupId = id;
      }
    });
  }

  scrollToTheLastMessage() {
    setTimeout(() => {
      // const lastMsgRef = (this.messagesContainerRef.nativeElement.lastChild as HTMLDivElement);
      // lastMsgRef.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
      this.messagesContainerRef.nativeElement.scrollTop = this.messagesContainerRef.nativeElement.scrollHeight;
    }, 1);
  }


  onGetMessages() {
    this.isLoading = true;
    this.groupService.onGetMessages(this.groupId, this.authService.getUser()._id)
      .subscribe((res: IHttp<{ messages: Message[], group: Group }>) => {
        if (res.isValid) {
          this.messages = res.body.messages;
          this.group = res.body.group;
          this.connect();
          this.onGetGroupImage();
          this.isLoading = false;
          this.scrollToTheLastMessage();
        }
      });
  }

  getTemplateGroupImage() {
    const defaultImage = 'https://dk1xgl0d43mu1.cloudfront.net/static_assets/images/default_medium_group_icon.png';
    if (typeof this.group.image !== 'string' && this.group.image.image) {
      return this.group.image.image;
    }
    return defaultImage;
  }

  onGetGroupImage() {
    const callBack = () => {
      this.isImageLoaded = true;
    };
    this.groupService.onGetImage(this.group, callBack);
  }

  isSiblingMessage(index: number, user: User) {
    if (index) {
      return this.messages[index - 1].userId._id === user._id;
    }
    return false;
  }

  onKeyDownSend(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.messageInput) {
      this.onSendMessage();
    }
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
