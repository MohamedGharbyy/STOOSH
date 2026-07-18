import { Component, signal, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Auth } from './components/auth/auth';
import { Dashboard } from './components/dashboard/dashboard';
import { Transaction } from './transaction.model';

@Component({
  selector: 'app-root',
  imports: [Auth, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  protected readonly title = signal('STOO$H');
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
  
  isLoggedIn = signal(false);
  isLoading = signal(false);

  onLoginSuccess() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoggedIn.set(true);
      this.isLoading.set(false);
    }, 1000);
  }

  ngAfterViewInit() {
    const video = this.bgVideo?.nativeElement;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }
}