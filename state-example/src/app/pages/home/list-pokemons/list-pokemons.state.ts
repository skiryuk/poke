import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../../../../core/models/home.models';

// Локальное состояние для этой страницы (но общее для всех входящих в страницу вьюх)
export class ListPokemonsState {
  // @ts-ignore
  public selectedPokemon$ = new BehaviorSubject<Pokemon>(null);
}
