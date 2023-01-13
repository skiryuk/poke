import { BehaviorSubject } from 'rxjs';
import { User } from '../models/auth.models';

// Некое глобальное состояние - доступно из всего приложения
export class AuthState {
  // @ts-ignore
  public user$ = new BehaviorSubject<User>(null);
  // @ts-ignore
  public accessToken$ = new BehaviorSubject<string>(null);
}
