import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeState } from '../home.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-last-pokemon',
  templateUrl: './last-pokemon.component.html',
  styleUrls: ['./last-pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastPokemonComponent {

  get lastPokemon$() {
    return this._homeState.pokemons$.pipe(map(res => res.reverse()[0]));
  }

  constructor(private _homeState: HomeState) {
  }
}
