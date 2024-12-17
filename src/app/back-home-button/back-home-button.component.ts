import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-home-button',
  standalone: false,
  templateUrl: './back-home-button.component.html',
  styleUrls: ['./back-home-button.component.scss']
})
export class BackHomeButtonComponent {
  constructor(private router: Router) { }

  goHome() {
    // 使用 Angular Router 來導航回主頁
    this.router.navigate(['/']);
  }
}
