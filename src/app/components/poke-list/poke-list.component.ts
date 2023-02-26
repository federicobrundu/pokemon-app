import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject} from 'rxjs';
import { IMappedPokemonEntry, IPokemon, IPokemonEntry } from 'src/app/interfaces/pokemon.interface';
import { FavouriteService } from 'src/app/service/favourite.service';
import { addFavourite, getListRequested, removeFavourite,  } from 'src/app/store/store.actions';
import {PokemonService} from '../../service/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})

export class PokeListComponent implements OnInit {


  pokemonList: IMappedPokemonEntry[]= [];
  pokemonListView: IMappedPokemonEntry[]= [];
  pokemonSearched: string;
  showSpinner: boolean = false
  numberOfPokemon = 0;
  myFavorite$: BehaviorSubject<IPokemonEntry[]>; 

  favN: number= 0 

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private favService: FavouriteService, private store: Store) {}

  onPokemonSearch(pokemon: string){
    console.log(this.pokemonList)
    this.pokemonSearched = pokemon;
    this.pokemonListView = this.pokemonList
      .filter((pokemon:IMappedPokemonEntry) => pokemon.pokemon_species.name.includes(this.pokemonSearched))
  }

  addFav(pokemon:IPokemonEntry){
    // this.favService.setPoke(pokemon)
    this.store.dispatch(addFavourite({item:pokemon}))
  }

  removeFav(pokemon:IPokemonEntry){
    this.store.dispatch(removeFavourite({item:pokemon}))
  }

  showMore(): void{
    this.numberOfPokemon = this.numberOfPokemon + 50;
  }
  showLess(): void{
    this.numberOfPokemon = this.numberOfPokemon - 50;
  }

  ngOnInit() {
    // this.store.dispatch(getListRequested())
    this.pokemonService.loadPokemon()
    .subscribe((val: IPokemon) => {
      this.pokemonList = this.mapPokemonEntry(val.pokemon_entries);
      this.pokemonListView = this.pokemonList;
    })
    this.favService.getList().subscribe((val)=> this.favN= val.length )
  }
  mapPokemonEntry(pokemonEntry: IPokemonEntry[]):IMappedPokemonEntry[]{
    return pokemonEntry.map((pokemon: IPokemonEntry)=> ({
      ...pokemon,
      routerLink:String(pokemon.entry_number)
    }) )
  }
  

}
