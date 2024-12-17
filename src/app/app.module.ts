import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeartComponent } from './page/view/heart/heart.component';
import { MedicineComponent } from './page/view/medicine/medicine.component';
import { HomeComponent } from './page/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    MedicineComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
