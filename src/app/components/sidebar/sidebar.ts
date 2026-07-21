import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() collapsed: boolean = false;
  @Input() navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'bi-house-door', active: true },
    { label: 'Transactions', icon: 'bi-arrow-up-arrow-down' },
    { label: 'Analytics', icon: 'bi-bar-chart-line' },
    { label: 'Settings', icon: 'bi-gear' },
  ];

  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}