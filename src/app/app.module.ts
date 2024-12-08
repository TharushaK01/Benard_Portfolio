import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BabyinpitctureComponent } from './babyinpitcture/babyinpitcture.component';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BabyinpitctureComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
