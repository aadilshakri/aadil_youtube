import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },              
  { path: 'favourites', component: FavouritesComponent }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
