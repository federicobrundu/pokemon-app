import {Component,EventEmitter,Input,OnDestroy,OnInit,Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Subject, takeUntil} from 'rxjs';
import { IPokemonObject } from 'src/app/interfaces/pokemon.interface';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export default class TopbarComponent implements OnInit, OnDestroy  {
  @Output() searchPokemonEvent = new EventEmitter <string> ()
  @Output() selectEvent = new EventEmitter <string> ()
  

  onDestroy$ : Subject<void> = new Subject();
  searchControl :  FormControl = new FormControl('');
  select: FormControl= new FormControl('');
  pokemonObjectSearched: IPokemonObject
  constructor() {}

  res:any
  subscribeValueChanges():void{
    this.searchControl.valueChanges
    .pipe(
      takeUntil(this.onDestroy$),
    ).subscribe(value => this.searchPokemonEvent.emit(value));
  }
  selectValueChanges():void{
    this.select.valueChanges
    .pipe(
      map(val => String(val))
    ).subscribe(value=> this.selectEvent.emit(value))
  }
  
  ngOnInit() {
    this.subscribeValueChanges();
    this.selectValueChanges();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }
}
