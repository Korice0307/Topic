import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeartComponent } from './page/view/heart/heart.component';
import { MedicineComponent } from './page/view/medicine/medicine.component';
import { HomeComponent } from './page/home/home/home.component';
import { AleartComponent } from './page/view/aleart/aleart.component';
import { SosComponent } from './page/view/sos/sos.component';
import { AichatComponent } from './page/view/aichat/aichat.component';

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
  },
  {
    path: 'aleart',
    component: AleartComponent,
  },
  {
    path: 'sos',
    component: SosComponent,
  },
  {
    path: 'aichat',
    component: AichatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
