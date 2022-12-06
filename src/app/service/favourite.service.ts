import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IPokemonEntry } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  pokemonList: IPokemonEntry[]=[]
  pokemonList$: BehaviorSubject<IPokemonEntry[]>= new BehaviorSubject<IPokemonEntry[]>([])
  constructor() { }
  getList():BehaviorSubject<IPokemonEntry[]>{
    return this.pokemonList$
  }

  setPoke(pokemon:IPokemonEntry):void{
    this.pokemonList$.next([...this.pokemonList$.value, pokemon])
  }

  removePoke(pokemon:IPokemonEntry):void{
    this.pokemonList$.next([...this.pokemonList$.value.filter((val) => val !== pokemon)])
  }
}
