import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlacesComponent} from './places/places.component'

const routes: Routes = [
  {path:'places',component:PlacesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
