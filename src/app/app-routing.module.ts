import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyinpitctureComponent } from './babyinpitcture/babyinpitcture.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'babyinpicture', component: BabyinpitctureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
