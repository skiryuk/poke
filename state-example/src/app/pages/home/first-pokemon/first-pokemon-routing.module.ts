import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPokemonComponent } from './first-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: FirstPokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstPokemonRoutingModule { }
