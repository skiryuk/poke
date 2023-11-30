import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonsComponent } from './list-pokemons.component';
import { ListPokemonRoutingModule } from './list-pokemons-routing.module';
import { ListPokemonsState } from './list-pokemons.state';



@NgModule({
  declarations: [
    ListPokemonsComponent
  ],
  imports: [
    CommonModule,
    ListPokemonRoutingModule,
  ],
  providers: [
    ListPokemonsState
  ]
})
export class ListPokemonsModule { }
