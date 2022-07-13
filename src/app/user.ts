import { Film } from './interfaces/film';

export interface User {
  id?: string;
  email?: string | undefined;
  firstName?: string;
  lastName?: string;
  roles?: any;
  password?: string;
  films?: Array<string>;
}
