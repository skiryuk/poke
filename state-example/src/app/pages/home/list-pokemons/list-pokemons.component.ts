import { Component } from '@angular/core';
import { HomeState } from '../home.state';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent {

  get pokemons$() {
    return this._homeState.pokemons$;
  }

  constructor(private _homeState: HomeState) {
  }
}
