import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyInPictureComponent } from './baby-in-picture/baby-in-picture.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'baby-in-picture', component: BabyInPictureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
