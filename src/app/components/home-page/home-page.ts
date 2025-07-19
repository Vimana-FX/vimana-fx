import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

  mainLogo: string = 'assets/main_logo.png';

  constructor() {
    console.log('HomePage component initialized', this.mainLogo);
  }

  ngOnInit() {
    this.mainLogo;
  }

}
function ngOninit() {
  throw new Error('Function not implemented.');
}

