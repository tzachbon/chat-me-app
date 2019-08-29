import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { CreateGroupComponent } from './group-list/create-group/create-group.component';
import { ChatRoomComponent } from './group-list/chat-room/chat-room.component';
import { GroupListComponent } from './group-list/group-list.component';
import { ChatMessageComponent } from './group-list/chat-room/chat-message/chat-message.component';
import { MessageControlPanelComponent } from './group-list/chat-room/chat-message/message-control-panel/message-control-panel.component';
import { ChatMenuMoreComponent } from './group-list/chat-room/chat-menu-more/chat-menu-more.component';

@NgModule({
  declarations: [MainComponent, CreateGroupComponent, ChatRoomComponent, GroupListComponent, ChatMessageComponent, MessageControlPanelComponent, ChatMenuMoreComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
