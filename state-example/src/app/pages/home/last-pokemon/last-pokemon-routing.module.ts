import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastPokemonComponent } from './last-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: LastPokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastPokemonRoutingModule { }
