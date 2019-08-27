import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../../../../models/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  @Input() isCurrentUser: boolean;
  @Input() isSiblingMessage: boolean;
  showControl = false;
  constructor() { }

  ngOnInit() {
    console.log(this.isSiblingMessage);

  }

  getUserImage() {
    const defaultImage = 'https://newsroom.stitchfix.com/wp-content/uploads/2016/08/default-user.png';
    if (typeof this.message.userId.image !== 'string' && this.message.userId.image.image) {
      return this.message.userId.image.image;
    }
    return defaultImage;
  }

}
