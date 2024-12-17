import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeartComponent } from './page/view/heart/heart.component';
import { MedicineComponent } from './page/view/medicine/medicine.component';
import { HomeComponent } from './page/home/home/home.component';
import { MatTabLabel, MatTabsModule } from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BackHomeButtonComponent } from './back-home-button/back-home-button.component'; 
import { MatIconModule } from '@angular/material/icon';  // 引入 MatIconModule


@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    MedicineComponent,
    HomeComponent,
    BackHomeButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
