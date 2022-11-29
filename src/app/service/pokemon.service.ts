import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon, IPokemonObject } from '../interfaces/pokemon.interface';

// ENDPOINTS 
const API = 'https://pokeapi.co/api/v2/pokedex/2/';
const API_DETAILS = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient) {}
  getDetails(id: string): Observable<IPokemonObject> {
    return this.http.get<IPokemonObject>(`${API_DETAILS}/${id}`)
  };

  loadPokemon():Observable<IPokemon> {
    return this.http.get<IPokemon>(API)
  }
  

}
