import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyinpitctureComponent } from './babyinpitcture/babyinpitcture.component';
import { HomeComponent } from './home/home.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'babyinpicture', component: BabyinpitctureComponent},
  {path: 'calender', component: CalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
