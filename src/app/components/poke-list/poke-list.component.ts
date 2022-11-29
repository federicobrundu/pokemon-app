import { ViewEncapsulation } from '@angular/compiler';
import {Component,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { IMappedPokemonEntry, IPokemon, IPokemonEntry } from 'src/app/interfaces/pokemon.interface';
import {PokemonService} from '../../service/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})

export class PokeListComponent {
  pokemonList: IMappedPokemonEntry[]= [];
  pokemonListView: IMappedPokemonEntry[]= [];
  pokemonSearched: string;
  showSpinner: boolean = false
  numberOfPokemon = 0;


  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  onPokemonSearch(pokemon: string) {
    this.pokemonSearched = pokemon;
    this.pokemonListView = this.pokemonList
      .filter((pokemon:IMappedPokemonEntry) => pokemon.pokemon_species.name.includes(this.pokemonSearched))
      console.log(this.pokemonListView)
  }

  showMore(): void {
    this.numberOfPokemon = this.numberOfPokemon + 50;
  }
  showLess(): void {
    this.numberOfPokemon = this.numberOfPokemon - 50;
  }

  ngOnInit() {
    this.pokemonService.loadPokemon()
      .subscribe((val: IPokemon) => {
        this.pokemonList = this.mapPokemonEntry(val.pokemon_entries);
        this.pokemonListView = this.pokemonList;
      })
  }
  mapPokemonEntry(pokemonEntry: IPokemonEntry[]):IMappedPokemonEntry[]{
    return pokemonEntry.map((pokemon: IPokemonEntry)=> ({
      ...pokemon,
      routerLink:String(pokemon.entry_number)
    }) )
  }
  

}
