import { createAction, props } from "@ngrx/store";
import { IPokemonEntry } from "../interfaces/pokemon.interface";
import { IPokemonDetails, IPokemonList } from "./store.interface";

//  ACTION 
export const addFavourite = createAction (
    '[pokemonState] addFavourite', 
    props<{item:IPokemonEntry}>()
)
export const removeFavourite = createAction(
    '[pokemonState] removeFavourite',
    props<{item:IPokemonEntry}>()
)

// GET LIST ACTION 
export const getListRequested = createAction(
    '[pokemonState] getListRequested',
)
export const getListSuccess = createAction(
    '[pokemonState] getListSuccess',
    props<{list:IPokemonList}>()
)


// GET DETAILS ACTION 
export const getDetailRequested = createAction(
    '[pokemonState] getDetailRequested',
    props<{id:string}>()
)
export const getDetailSuccess = createAction(
    '[pokemonState] getDetailSuccess',
    props<{detail:IPokemonDetails}>()
)