import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon, PokemonResult } from '../models/home.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons$ = new BehaviorSubject<Array<Pokemon>>([]);

  constructor(
    private _http: HttpClient,
    ) { }

  public loadPokemons(): void {
    this._http.get<PokemonResult>(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`)
      .subscribe(res => this.pokemons$.next(res.results ?? []));
  }
}
