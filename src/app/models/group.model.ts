import { User } from 'src/app/models/user.model';
import { Message } from './message.model';

export interface Group {
  _id?: string;
  name: string;
  image: string;
  users: UserGroup[] | User[];
  messages?: Message[];
}

export interface GroupWithRole {
  group: Group;
  role: ERole;
}

export interface UserGroup {
  userId: string;
  role: ERole;
}

export enum ERole {
  admin = 'admin',
  regular = 'regular'
}
