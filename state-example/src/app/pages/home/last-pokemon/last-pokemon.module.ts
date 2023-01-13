import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastPokemonComponent } from './last-pokemon.component';
import { LastPokemonRoutingModule } from './last-pokemon-routing.module';



@NgModule({
  declarations: [
    LastPokemonComponent
  ],
  imports: [
    CommonModule,
    LastPokemonRoutingModule,
  ]
})
export class LastPokemonModule { }
