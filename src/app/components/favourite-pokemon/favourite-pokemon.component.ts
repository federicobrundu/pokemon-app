import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPokemonEntry } from 'src/app/interfaces/pokemon.interface';
import { FavouriteService } from 'src/app/service/favourite.service';

@Component({
  selector: 'app-favourite-pokemon',
  templateUrl: './favourite-pokemon.component.html',
  styleUrls: ['./favourite-pokemon.component.css']
})
export class FavouritePokemonComponent implements OnInit{

  favPkmList : BehaviorSubject<IPokemonEntry[]>
  
  constructor(private serviceFav: FavouriteService){

  }

  // handleHeart(pokemon: IPokemonEntry){
  //   if(this.pokemonList.find((item:IPokemonEntry)=>{
  //     item.pokemon_species.name === item.pokemon_species.name
  //   })){
  //     this.pokemonList= this.serviceFav.removePoke(pokemon)
  //   }else{
  //     this.pokemonList = this.serviceFav.setPoke(pokemon);
  //   }
  // } 

  ngOnInit(): void {
    this.favPkmList=  this.serviceFav.getList();
  }
}
