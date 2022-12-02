export interface IPokemonObject {
    id:number;
    name:string;
    base_experience:number;
    types:IPokemonObjectType[];
    weight:number;
}

export interface IPokemonEntry{
    entry_number:number;
    pokemon_species: {
        name:string;
        url:string;
    };
}
export interface IMappedPokemonEntry extends IPokemonEntry{
    routerLink: string;
}

export interface IPokemonObjectType{
    slot:number;
    type:{
        name:string;
        url:string;
    }
}
export interface IPokemon{
    pokemon_entries:IPokemonEntry[]
}
