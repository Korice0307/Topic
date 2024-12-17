import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeartComponent } from './page/heart/heart.component';
import { MedicineComponent } from './page/medicine/medicine.component';

const routes: Routes = [
  {
    path:'heart',
    component:HeartComponent,
  },
  {
    path:'medicien',
    component:MedicineComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
