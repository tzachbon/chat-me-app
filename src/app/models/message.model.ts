import { User } from './user.model';

export interface Message {
  message: string | string[];
  date: string;
  userId: User;
}
