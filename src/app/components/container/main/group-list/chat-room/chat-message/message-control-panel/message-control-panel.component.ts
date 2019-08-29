import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../../../../../models/message.model';
import { SnackBarService } from 'src/app/shared/ui/snackbar/snack-bar.service';
import { GroupService } from '../../../../../../../services/group/group.service';
import { Group } from '../../../../../../../models/group.model';
import { IHttp } from '../../../../../../../models/http.model';

@Component({
  selector: 'app-message-control-panel',
  templateUrl: './message-control-panel.component.html',
  styleUrls: ['./message-control-panel.component.scss']
})
export class MessageControlPanelComponent implements OnInit {
  @Input() message: Message;
  @Input() group: Group;

  constructor(
    private snackBarService: SnackBarService,
    private groupService: GroupService,
  ) { }

  ngOnInit() {
  }

  onDeleteMessage() {
    this.groupService.onDeleteMessage(this.group._id, this.message._id)
      .subscribe((res: IHttp<any>) => {
        if (res.isValid) {
          this.snackBarService.onOpenSnackBar(`Message Deleted Successfully`);
        }
      });
  }

  onEditMessage() {

  }

  onGetMessageInformation() {

  }

}
