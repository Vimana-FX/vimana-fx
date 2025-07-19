import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent {
  title: string = 'Dashboard';
  stats = [
    { value: '1000', label: 'Users' },
    { value: '500', label: 'Active Sessions' },
    { value: '300', label: 'New Signups' }
  ];

  constructor() {
    console.log('Dashboard component initialized');
  }
}
