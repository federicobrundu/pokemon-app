import { Action, createReducer, on } from "@ngrx/store";
import { IPokemonEntry } from "../interfaces/pokemon.interface";
import { addFavourite, getListRequested, getListSuccess, removeFavourite } from "./store.actions";
import { IPokemonList, IPokemonState } from "./store.interface";

export const pokemonKey= 'pokemon';

const initialState: IPokemonState = {
    favourite: [],
    list: {
        data:[],
        isLoading:false
    },
    detail: {
        data: undefined,
        isLoading:false
    }
}

const handlerAddFavourite = (state:IPokemonState, {item}:{item:IPokemonEntry} )  => {
    return {...state,favourite:[...state.favourite, item]}
} 
const handlerDeleteFavourite = (state:IPokemonState, {item}:{item:IPokemonEntry} )  => {
    const draft = state
    draft.favourite = [...state.favourite, item]
    return draft;
} 

//  GET List
const handlerGetListRequested = (state:IPokemonState) => {
    return {
        ...state, 
        list:{
            data:[],
            isLoading:true
        }
    }
}
// getList Success
const handlerGetListSuccess = (state:IPokemonState,{list}:{list:IPokemonList}) => {
    return {
        ...state, 
        list
    }
}

// GET Detail
const handlerGetDetailRequested = (state:IPokemonState,{id}:{id:string}) => {
    return {
        ...state,
        detail:{
            data:undefined,
            isLoading:true
        }
    }
}
// getDetail Success
const handlerGetDetailSuccess = (state:IPokemonState,{list}:{list:IPokemonList}) => {
    return {
        ...state, 
        list
    }
}



export const reducer = createReducer(
    initialState,
    on(addFavourite, handlerAddFavourite),
    on(removeFavourite, handlerDeleteFavourite),
    on(getListRequested, handlerGetListRequested),
    on(getListSuccess, handlerGetListSuccess)
);

export const storeReducer  = (state:IPokemonState|undefined, action: Action): IPokemonState => reducer(state, action) 
