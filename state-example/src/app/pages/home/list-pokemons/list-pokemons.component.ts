import { Component } from '@angular/core';
import { HomeState } from '../home.state';
import { ListPokemonsState } from './list-pokemons.state';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../../../core/models/home.models';

// Как вариант определять состояние здесь
// (но если оно потребуется во внутренних вьюхах то придется импортировать файл из ListPokemonsComponent)
/*export class ListPokemonsState {
  // @ts-ignore
  public selectedPokemon$ = new BehaviorSubject<Pokemon>(null);
}*/

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent {
  // Либо определять состояние здесь
  // (но если оно потребуется во внутренних вьюхах то придется его как-то передавать в инпутах)
  // public selectedPokemon$ = new BehaviorSubject<Pokemon>(null);

  get pokemons$() {
    return this._homeState.pokemons$;
  }

  constructor(private _homeState: HomeState, private _state: ListPokemonsState) {
  }
}
