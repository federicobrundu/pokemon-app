import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './service/favourite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pokemon-app';
  constructor (private favService: FavouriteService){

  }
  ngOnInit(){
    this.favService.getLocalFav();
  }
}
