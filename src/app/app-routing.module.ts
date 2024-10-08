import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritePokemonComponent } from './components/favourite-pokemon/favourite-pokemon.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  {path: '', component: PokeListComponent, children:[
    {path: 'favorite', component: FavouritePokemonComponent},

  ]},
  {path: ':id', component: PokeDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
