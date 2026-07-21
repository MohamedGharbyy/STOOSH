import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionList } from '../transaction-list/transaction-list';
import { Transaction } from '../../transaction.model';
import { Sidebar, NavItem } from '../sidebar/sidebar';
import { Header, HeaderAction } from '../header/header';
import { StatCard } from '../stat-card/stat-card';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TransactionList, Sidebar, Header, StatCard],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  @Input() title!: string;
  @Input() transactions: Transaction[] = [];
  
  sidebarCollapsed = false;
  
  // Stat card data
  totalBalance = '$24,580.00';
  income = '+$5,000.00';
  expenses = '-$1,250.00';
  netChange = '+$3,750.00';
  
  // Header actions
  headerActions: HeaderAction[] = [
    { label: 'Export', icon: 'bi-download', variant: 'secondary', action: 'export' },
    { label: 'Add', icon: 'bi-plus-lg', variant: 'primary', action: 'add' },
  ];
  
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() headerAction = new EventEmitter<string>();
  
  onSidebarToggle(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.sidebarToggle.emit();
  }
  
  onHeaderAction(action: string): void {
    this.headerAction.emit(action);
  }
}
