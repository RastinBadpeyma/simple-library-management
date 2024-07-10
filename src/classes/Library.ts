import { Book } from "../interfaces/Book";

export class Library {
   private books: Book[] = [];

   addBook(book:Book): void {
      this.books.push(book);
   }


   removeBook(bookId: number):void {
      this.books = this.books.filter(book => bookId !==bookId);
   }



   updateBook(bookId: number, updatedBook: Partial<Book>): void {
      const bookIndex = this.books.findIndex(book => book.id === bookId);
      if (bookIndex > -1) {
        this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
      }
    }

   

 
   listBooks(): Book[] {
      return this.books;
    }
}