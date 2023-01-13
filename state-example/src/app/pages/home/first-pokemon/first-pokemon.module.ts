import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPokemonComponent } from './first-pokemon.component';
import { FirstPokemonRoutingModule } from './first-pokemon-routing.module';



@NgModule({
  declarations: [
    FirstPokemonComponent
  ],
  imports: [
    CommonModule,
    FirstPokemonRoutingModule,
  ]
})
export class FirstPokemonModule { }
