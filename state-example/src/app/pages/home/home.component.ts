import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../../../core/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  get pokemons$() {
    return this._pokemonService.pokemons$;
  }

  constructor(private  _pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this._pokemonService.loadPokemons();
  }

  ngOnDestroy(): void {
  }
}
