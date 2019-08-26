import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { GroupService } from 'src/app/services/group.service';
import { IHttp } from 'src/app/models/http.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Group, UserGroup, ERole } from '../../../../../models/group.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  @ViewChild('auto', { static: false }) auto: MatAutocomplete;
  @Input() onCreateGroupDialog: () => void;
  @Input() initFetchGroups: () => void;
  form: FormGroup;
  options: User[] = [];
  isOptionLoaded = true;
  selectedUsers: User[] = [];
  isLoading = false;

  constructor(
    private groupService: GroupService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSearchUsers(event?: Event) {
    if (event) {
      this.isOptionLoaded = false;
      const { value } = event.target as HTMLInputElement;
      const name: string = value as string;
      this.groupService.onGetUsers(name).subscribe((res: IHttp<{ users: User[] }>) => {
        if (res.isValid) {
          this.options = res.body.users;
          this.options = this.options
            .filter(opn => opn._id !== this.authService.getUser()._id);
          console.log(res.body.users);
        }
        this.isOptionLoaded = true;
      }, e => {
        console.log(e);
        this.isOptionLoaded = true;
      });

    }
  }


  displayWithFunction(user: User) {
    return user ? user.fullName : '';
  }

  addToUsers(event: MatAutocompleteSelectedEvent) {
    const value: User = event.option.value;
    const userAlreadyInSelected = this.selectedUsers.find(user => user._id === value._id);
    if (!userAlreadyInSelected) {
      this.selectedUsers.push(value);
    }
    this.form.get('user').setValue('');
    this.form.updateValueAndValidity();
  }

  removeUser(id: string) {
    this.selectedUsers = this.selectedUsers.filter(user => user._id !== id);
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      user: new FormControl(),
      image: new FormControl(),
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Value = reader.result;
      this.form.controls['image'].setValue(base64Value);
      this.form.updateValueAndValidity();
    };
  }

  onSubmit() {
    this.isLoading = true;
    const { name, image } = this.form.value;
    const users: UserGroup[] = this.selectedUsers
      .map(user => ({ userId: user._id, role: ERole.regular }));
    users.push({ userId: this.authService.getUser()._id, role: ERole.admin });
    const group: Group = {
      name,
      image,
      users
    };
    this.groupService.onCreateGroup(group).subscribe((res: IHttp<{ group: Group }>) => {
      if (res.isValid) {
        this.router.navigate(['/'], { relativeTo: this.route });
        this.onCreateGroupDialog();
        this.initFetchGroups();
      }
      this.isLoading = false;
    });
  }

}
