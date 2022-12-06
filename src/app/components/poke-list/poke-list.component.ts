import { ViewEncapsulation } from '@angular/compiler';
import {Component,EventEmitter,Input, OnChanges, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, from } from 'rxjs';
import { IMappedPokemonEntry, IPokemon, IPokemonEntry } from 'src/app/interfaces/pokemon.interface';
import { FavouriteService } from 'src/app/service/favourite.service';
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

  favN: number

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private favService: FavouriteService) {}

  onPokemonSearch(pokemon: string){
    console.log(this.pokemonList)
    this.pokemonSearched = pokemon;
    this.pokemonListView = this.pokemonList
      .filter((pokemon:IMappedPokemonEntry) => pokemon.pokemon_species.name.includes(this.pokemonSearched))
  }

  addFavorite(pokemon:IPokemonEntry){
    this.favService.setPoke(pokemon)
    this.favN = this.myFavorite$.value.length;
  }

  removeFavorite(pokemon:IPokemonEntry){
    this.favService.removePoke(pokemon)
    this.favN = this.myFavorite$.value.length;
  }

  showMore(): void{
    this.numberOfPokemon = this.numberOfPokemon + 50;
  }
  showLess(): void{
    this.numberOfPokemon = this.numberOfPokemon - 50;
  }

  ngOnInit() {
    this.pokemonService.loadPokemon()
    .subscribe((val: IPokemon) => {
      this.pokemonList = this.mapPokemonEntry(val.pokemon_entries);
      this.pokemonListView = this.pokemonList;
    })

    this.myFavorite$ = this.favService.getList()
  }
  mapPokemonEntry(pokemonEntry: IPokemonEntry[]):IMappedPokemonEntry[]{
    return pokemonEntry.map((pokemon: IPokemonEntry)=> ({
      ...pokemon,
      routerLink:String(pokemon.entry_number)
    }) )
  }
  

}
