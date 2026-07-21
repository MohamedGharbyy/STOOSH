import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../transaction.model';

@Component({
  selector: 'app-transaction-row',
  imports: [CommonModule],
  templateUrl: './transaction-row.html',
  styleUrl: './transaction-row.css',
})
export class TransactionRow {
  @Input() item!: Transaction;
}