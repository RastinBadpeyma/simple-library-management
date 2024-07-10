import {User} from '../interfaces/User';

export class UserManager {
   private users : User[] = [];

   addUser(user : User): void {
      this.users.push(user);
   }

   removeUser(userId: number): void {
      this.users = this.users.filter(user => userId !== userId);
   }

   updateUser(userId: number, updatedUser: Partial<User>): void {
      const userIndex = this.users.findIndex(user => user.id === userId);
      if (userIndex > -1) {
        this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      }
    }


   listUsers(): User[] {
      return this.users;
   }
}