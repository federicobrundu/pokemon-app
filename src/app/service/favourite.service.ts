import { Injectable } from '@angular/core';
import { IPokemonEntry } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  pokemonList: IPokemonEntry[]=[]

  constructor() { }
  getList():IPokemonEntry[]{
    return this.pokemonList;
  }

  setPoke(pokemon:IPokemonEntry):IPokemonEntry[]{
    this.pokemonList.push(pokemon)
    return this.pokemonList
  }

  removePoke(pokemon:IPokemonEntry):IPokemonEntry[]{
    this.pokemonList = this.pokemonList
    .filter((val: IPokemonEntry)=>{
      val.pokemon_species.name !== pokemon.pokemon_species.name
    })
    return this.pokemonList
  }
}
