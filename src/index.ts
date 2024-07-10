import { Library } from './classes/Library';
import { UserManager } from './classes/UserManager';
import { LoanManager } from './classes/LoanManager';
import { Book } from './interfaces/Book';
import { User } from './interfaces/User';

const library = new Library();
const userManager = new UserManager();
const loanManager = new LoanManager();

// addBook
const book1: Book = { id: 1, title: '1984', author: 'George Orwell', available: true };
const book2: Book = { id: 2, title: 'Brave New World', author: 'Aldous Huxley', available: true };
library.addBook(book1);
library.addBook(book2);

//addUser
const user1: User = { id: 1, name: 'John Doe', email: 'john@example.com', borrowedBooks: [] };
const user2: User = { id: 2, name: 'Jane Doe', email: 'jane@example.com', borrowedBooks: [] };
userManager.addUser(user1);
userManager.addUser(user2);

//LoanBook
loanManager.loanBook(1, 1); 
loanManager.loanBook(2, 2); 

// listBooks
console.log('Books:', library.listBooks());

// listUsers
console.log('Users:', userManager.listUsers());

// listloans
console.log('Loans:', loanManager.listLoans());


