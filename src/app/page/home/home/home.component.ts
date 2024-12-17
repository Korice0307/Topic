import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router:Router){}
  
  title = 'Topic';
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  navigateToHeart(route:string) {
    this.router.navigate([route]);
  }
}
