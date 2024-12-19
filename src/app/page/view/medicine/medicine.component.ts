import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  standalone: false,
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.scss'
})
export class MedicineComponent {
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
