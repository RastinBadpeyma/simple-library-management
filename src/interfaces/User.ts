import {Book} from './Book';

export interface User {
   id: number;
   name: string;
   email: string;
   borrowedBooks: Book[];
}