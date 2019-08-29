import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../../../../../models/message.model';
import { SnackBarService } from 'src/app/shared/ui/snackbar/snack-bar.service';
import { GroupService } from '../../../../../../../services/group/group.service';

@Component({
  selector: 'app-message-control-panel',
  templateUrl: './message-control-panel.component.html',
  styleUrls: ['./message-control-panel.component.scss']
})
export class MessageControlPanelComponent implements OnInit {
  @Input() message: Message;

  constructor(
    private snackBarService: SnackBarService,
    private groupService: GroupService,
  ) { }

  ngOnInit() {
  }

}
