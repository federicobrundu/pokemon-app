import { IPokemonState } from "./store.interface";
import { pokemonKey, storeReducer } from "./store.reducer";

export interface IAppState{
    [pokemonKey]:IPokemonState
}

export const appReducers = {[pokemonKey]:storeReducer}