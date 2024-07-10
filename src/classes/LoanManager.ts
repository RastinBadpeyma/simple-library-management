import { Loan } from "../interfaces/Loan";

export class LoanManager {
   private loans: Loan[] = [];

   loanBook(bookId: number, userId: number): void {
      const loan: Loan = {
        bookId,
        userId,
        loanDate: new Date(),
        returnDate: null,
      };
      this.loans.push(loan);
    }

    returnBook(bookId: number, userId: number): void {
      const loan = this.loans.find(loan => loan.bookId === bookId && loan.userId === userId && loan.returnDate === null);
      if (loan) {
        loan.returnDate = new Date();
      }
    }

  
    listLoans(): Loan[] {
      return this.loans;
    }
}