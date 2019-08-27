import { Group } from './group.model';
import { Image } from './image.model';


export interface User {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  image: string | Image;
  groups: Group[];
}
