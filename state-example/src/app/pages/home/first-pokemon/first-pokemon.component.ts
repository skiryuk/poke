import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeState } from '../home.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-first-pokemon',
  templateUrl: './first-pokemon.component.html',
  styleUrls: ['./first-pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstPokemonComponent{

  get firstPokemon$() {
    return this._homeState.pokemons$.pipe(map(res => res[0]));
  }

  constructor(private _homeState: HomeState) {
  }
}
