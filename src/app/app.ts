import { Component, signal } from '@angular/core';
import { TransactionList } from './components/transaction-list/transaction-list';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-root',
  imports: [TransactionList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('STOOSH');
  public transactions: Transaction[] = [{
    id: 1,
    name: 'Salary',
    amount: 2500,
    type: 'income',
    date: new Date('2026-06-29')
  },
  {
    id: 2,
    name: 'Electricity Bill',
    amount: 80,
    type: 'expense',
    date: new Date('2026-07-17')
  }];
  // Update the string literal union to accept 'forgot'
  isLoggedIn = false;
  authMode: 'login' | 'signup' | 'forgot' = 'login';

  // Quick simulation methods for your form submissions
  handleAuthSubmit() {
    this.isLoggedIn = true;
  }

  switchAuthMode(mode: 'login' | 'signup' | 'forgot') {
    this.authMode = mode;
  }
}
