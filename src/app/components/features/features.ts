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
    description: 'Advanced algorithms for real-time collaboration among fleets of drones, enabling synchronized missions and autonomous decision-making.'
  },
  {
    icon: 'pi pi-directions',
    title: 'Precision Autonomous Navigation',
    description: 'GPS-independent and AI-driven navigation for challenging environments—ensuring safe flights, automated pathfinding, and seamless multi-drone operations.'
  },
  {
    icon: 'pi pi-video',
    title: 'AI-Powered Aerial Analytics',
    description: 'Live data capture and processing from swan drones, delivering actionable insights for surveillance, mapping, and asset inspection.'
  }
];


ngOnInit() {
  console.log('Features component initialized', this.features);
}
}
