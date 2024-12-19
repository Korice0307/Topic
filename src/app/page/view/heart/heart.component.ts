import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heart',
  standalone: false,

  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss'
})
export class HeartComponent {

  constructor(private router: Router) { }

  selectedIndex = 0; // 默認顯示第一個標籤（心跳）

  // 根據需要可以動態設置選中的標籤
  setActiveTab(index: number): void {
    this.selectedIndex = index;
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
