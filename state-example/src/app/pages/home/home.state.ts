import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../../core/models/home.models';

// Общее состояние (шарится между страницами)
export class HomeState {
  public pokemons$ = new BehaviorSubject<Array<Pokemon>>([]);
}
