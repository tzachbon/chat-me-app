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
  showDate = false;
  constructor() { }

  ngOnInit() {
    console.log(this.isSiblingMessage);

  }

}
