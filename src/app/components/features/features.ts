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
      icon: 'pi pi-sitemap',
      title: 'Swarm Intelligence',
      description: 'Real-time fleet collaboration with synchronized missions and adaptive roles for each drone.'
    },
    {
      icon: 'pi pi-directions',
      title: 'Precision Autonomous Navigation',
      description: 'AI-guided flight with indoor/outdoor centimeter accuracy, even in GPS-denied environments.'
    },
    {
      icon: 'pi pi-video',
      title: 'Aerial Analytics & Edge Processing',
      description: 'Onboard AI and cloud fusion for mapping, inspection, and event visualization.'
    }
  ];
}
