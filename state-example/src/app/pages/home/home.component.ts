import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { Pokemon } from '../../../core/models/home.models';
import { PokemonService } from '../../../core/services/pokemon.service';
import { HomeState } from './home.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  private _subs = new Subscription();

  constructor(private  _pokemonService: PokemonService, private _homeState: HomeState) {
  }

  ngOnInit(): void {
    this._subs.add(
      this._pokemonService.loadPokemons()
        .subscribe(res => this._homeState.pokemons$.next(res))
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
