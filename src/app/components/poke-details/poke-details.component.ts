import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from 'src/app/service/pokemon.service';
import { IPokemonObject } from 'src/app/interfaces/pokemon.interface';
@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {
  pokemonId: string | undefined;
  pokemonObject: IPokemonObject; 
  showSpinner: boolean;
  isDetails: boolean;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
    this.pokemonId = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if (!!this.pokemonId) {
      this.showSpinner = true
      this.pokemonService.getDetails(this.pokemonId)
        .subscribe((res: IPokemonObject) => {
          this.pokemonObject = {
            id: res.id,
            name: res.name,
            base_experience: res.base_experience,
            types: res.types,
            weight: res.weight
          }
          this.showSpinner = false
        })
    }
  }
}
