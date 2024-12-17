import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeartComponent } from './page/view/heart/heart.component';
import { MedicineComponent } from './page/view/medicine/medicine.component';
import { HomeComponent } from './page/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'heart',
    component: HeartComponent,
  },
  {
    path: 'medicine',
    component: MedicineComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
