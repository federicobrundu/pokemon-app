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
  
  getLocalFav():void{
    const localFav= localStorage.getItem('favourite');
    if(localFav){
      this.pokemonList$.next(JSON.parse(localFav))
    }
  }
  
  getList():BehaviorSubject<IPokemonEntry[]>{
    return this.pokemonList$
  }

  setPoke(pokemon:IPokemonEntry):void{
    this.pokemonList$.next([...this.pokemonList$.value, pokemon])
    localStorage.setItem('favourite', JSON.stringify(this.pokemonList$.value))
  }

  removePoke(pokemon:IPokemonEntry):void{
    this.pokemonList$.next([...this.pokemonList$.value.filter((val) => val !== pokemon)])
  }

}
