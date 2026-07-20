import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionList } from '../transaction-list/transaction-list';
import { Transaction } from '../../transaction.model';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TransactionList],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  @Input() title!: string;
  @Input() transactions: Transaction[] = [];
  
  sidebarCollapsed = false;
  
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}