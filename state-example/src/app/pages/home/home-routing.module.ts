import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'first-pokemon',
        loadChildren: () => import('./first-pokemon/first-pokemon.module').then(m => m.FirstPokemonModule)
      },
      {
        path: 'last-pokemon',
        loadChildren: () => import('./last-pokemon/last-pokemon.module').then(m => m.LastPokemonModule)
      },
      {
        path: 'list-pokemons',
        loadChildren: () => import('./list-pokemons/list-pokemons.module').then(m => m.ListPokemonsModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
