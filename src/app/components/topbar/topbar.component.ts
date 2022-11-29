import {Component,EventEmitter,Input,OnDestroy,OnInit,Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil} from 'rxjs';
import { IPokemonObject } from 'src/app/interfaces/pokemon.interface';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export default class TopbarComponent implements OnInit, OnDestroy  {
  @Output() searchPokemonEvent = new EventEmitter <string> ()
  @Input() searchDisabled: boolean;
  

  onDestroy$ : Subject<void> = new Subject();
  searchControl :  FormControl = new FormControl('');
  pokemonObjectSearched: IPokemonObject
  constructor() {}

  subscribeValueChanges():void{
    this.searchControl.valueChanges
    .pipe(
      takeUntil(this.onDestroy$),
    ).subscribe(value => this.searchPokemonEvent.emit(value));
  }

  ngOnInit() {
    this.subscribeValueChanges();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }
}
