import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavouriteService } from './service/favourite.service';
import { selectFavPokemon, selectPokemonList } from './store/store.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokemon-app';
  constructor (private favService: FavouriteService, private store: Store){

  }
  ngOnInit(){
    this.favService.getLocalFav();
    this.store.select(selectFavPokemon).subscribe((value)=> console.log(value))
    // this.store.select(selectPokemonList).subscribe((value)=> console.log(value))
  }
}
