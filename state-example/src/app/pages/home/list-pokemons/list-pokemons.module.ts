import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonsComponent } from './list-pokemons.component';
import { ListPokemonRoutingModule } from './list-pokemons-routing.module';



@NgModule({
  declarations: [
    ListPokemonsComponent
  ],
  imports: [
    CommonModule,
    ListPokemonRoutingModule,
  ]
})
export class ListPokemonsModule { }
