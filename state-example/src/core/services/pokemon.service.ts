import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Pokemon, PokemonResult } from '../models/home.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // можно определять состояние здесь и оно будет считаться глобальным
  // но могут быть проблемы если например двум страницам потребуется вызов метода апи с разными параметрами
  // и получается коллекция будет перезатироваться
  // кроме того если нам понадобиться состояние мы импортируем весь сервис
  // (что может быть избыточно, тк например вызывать метод апи нет необходимости)
  // public pokemons$ = new BehaviorSubject<Array<Pokemon>>([]);

  constructor(
    private _http: HttpClient,
    ) { }

  public loadPokemons(): Observable<Array<Pokemon>> {
    return this._http.get<PokemonResult>(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`)
      .pipe(map((res) => res.results ?? []));
  }
}
