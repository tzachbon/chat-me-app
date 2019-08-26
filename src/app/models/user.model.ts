import { Group } from './group.model';


export interface User {
  _id?: string;
  fullName: string;
  email: string;
  password: string;
  image: string;
  groups: Group[];
}
