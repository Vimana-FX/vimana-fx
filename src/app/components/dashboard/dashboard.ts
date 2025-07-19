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
  title = 'vimana-fx Hi-Tech Dashboard';
  stats = [
    { label: 'Flights Today', value: 17 },
    { label: 'FX Trades', value: 59 },
    { label: 'Active Sensors', value: 212 }
  ];
}
