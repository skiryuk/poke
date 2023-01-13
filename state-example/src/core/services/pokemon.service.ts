import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonResult } from '../models/home.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(
    private _http: HttpClient,
    ) { }

  public loadPokemons(): Observable<Array<Pokemon>> {
    return this._http.get<PokemonResult>(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`)
      .pipe(map((res) => res.results ?? []));
  }
}
