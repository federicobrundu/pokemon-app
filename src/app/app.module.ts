import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import TopbarComponent from './components/topbar/topbar.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouritePokemonComponent } from './components/favourite-pokemon/favourite-pokemon.component';
import { StoreModule } from '@ngrx/store';
import { PokemonService } from './service/pokemon.service';
import { StoreDevtools } from '@ngrx/store-devtools';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    TopbarComponent,
    PokeDetailsComponent,
    FavouritePokemonComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    StoreModule.forRoot({
      pokeList:() =>[PokemonService.toString]
    }),
    // StoreDevtoolsModule.instrument({
    //   ...
    // }),
    EffectsModule.forRoot([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
