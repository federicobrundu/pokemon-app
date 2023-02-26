import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPokemonState } from "./store.interface";
import { pokemonKey } from "./store.reducer";

const loadSelectorState = createFeatureSelector<IPokemonState>(pokemonKey) 


export const selectFavPokemon = createSelector(loadSelectorState, (state:IPokemonState) => state.favourite)
export const selectPokemonList = createSelector(loadSelectorState,(state:IPokemonState) => state.list )
export const selectPokemonDetail = createSelector(loadSelectorState,(state:IPokemonState) => state.detail )
