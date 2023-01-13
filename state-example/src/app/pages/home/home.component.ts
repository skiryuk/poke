import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { Pokemon } from '../../../core/models/home.models';
import { PokemonService } from '../../../core/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public pokemons$ = new BehaviorSubject<Array<Pokemon>>([]);

  private _subs = new Subscription();

  constructor(private  _pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this._subs.add(
      this._pokemonService.loadPokemons()
        .subscribe(res => this.pokemons$.next(res))
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
