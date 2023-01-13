import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../../core/models/home.models';

export class HomeState {
  public pokemons$ = new BehaviorSubject<Array<Pokemon>>([]);
}
