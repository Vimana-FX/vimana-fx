import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {
  constructor() {}
  features = [
    {
      icon: 'pi pi-bolt',
      title: 'Real-Time Analytics',
      description: 'Instant insights and monitoring powered by the latest AI.'
    },
    {
      icon: 'pi pi-lock',
      title: 'Secure Transactions',
      description: 'Top-grade security keeps your data and trades safe at all times.'
    },
    {
      icon: 'pi pi-globe',
      title: 'Global Connectivity',
      description: 'Connect to markets and devices around the world with zero hassle.'
    },
  ];



ngOnInit() {
  console.log('Features component initialized', this.features);
}
}
