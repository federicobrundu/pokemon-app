import { IPokemonEntry } from "../interfaces/pokemon.interface";


export interface IPokemonState{
    favourite: IPokemonEntry[],
    list:IPokemonList,
    detail: IPokemonDetails
}

export interface IPokemonList {
    data: IPokemonEntry[],
    isLoading: boolean,
}

export interface IPokemonDetails {
    data: IPokemonEntry|undefined,
    isLoading: boolean,
}

