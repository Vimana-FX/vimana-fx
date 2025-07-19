import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('vimana-fx');
  mainLogo: string = 'assets/main_logo.png';

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('App component initialized', this.title());
  }

    gotoHome() {
    this.router.navigate(['/']);
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

  gotoFeatures() {
    this.router.navigate(['/features']);
  }

  gotoContact() {
    this.router.navigate(['/contact']);
  }
}
