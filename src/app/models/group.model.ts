import { User } from 'src/app/models/user.model';
import { Message } from './message.model';

export interface Group {
  _id?: string;
  name: string;
  image: string;
  users: User[] | { userId: string }[];
  messages?: Message[];
}
