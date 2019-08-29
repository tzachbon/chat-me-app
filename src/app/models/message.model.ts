import { User } from './user.model';

export interface Message {
  _id?: string;
  message: string | string[];
  date: string;
  userId: User;
}
