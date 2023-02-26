import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { IPokemon } from "../interfaces/pokemon.interface";
import { PokemonService } from "../service/pokemon.service";
import { getListRequested, getListSuccess } from "./store.actions";



@Injectable()
export class PokemonEffects{

    getListRequest$ = createEffect(()=>
        this.actions$
        .pipe(
            ofType(getListRequested),
            switchMap(()=> this.pokemonService.loadPokemon()),
            map((pokemon:IPokemon)=> {
                const list= {
                    data:[],
                    isLoading:false,
                }
                return getListSuccess({list})
            })
        )
    )

    constructor(private pokemonService: PokemonService, private actions$: Actions){}

}