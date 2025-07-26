import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {
  title = 'Dashboard';

  stats = [
    { value: '1000', label: 'Users' },
    { value: '500', label: 'Active Sessions' },
    { value: '300', label: 'New Signups' }
  ];

  constructor() {
    console.log('Dashboard component initialized');
  }
}