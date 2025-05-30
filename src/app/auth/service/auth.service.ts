import { computed, inject, Injectable, signal } from '@angular/core';
import { UpdateUser, User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { AuthResponse } from '../interfaces/auth.response.interface';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { DeleteUser } from '../../shared/interfaces/admin.interface';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  // private _updateUser = signal<UpdateUser | null>(null);
  private _updateUser = new BehaviorSubject<any>({})
  private _token = signal<string | null>(null);

  private _http = inject(HttpClient);

  setUpdateUSer(user: any){
    this._updateUser.next(user)
  }

  getUpdateUSer(): BehaviorSubject<any>{
    return this._updateUser
  }

  checkStatusResource = rxResource({
    loader: () => this.checkStatus(),
  });

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'checking') return 'checking';
    if (this._user()) return 'authenticated';
    return 'not-authenticated';
  });

  user = computed(() => {
    return this._user();
  });

  token = computed(() => this._token());

  login(name: string, password: string): Observable<boolean> {
    return this._http
      .post<AuthResponse>('http://localhost:3000/auth/login', {
        name: name,
        password: password,
      })
      .pipe(
        tap((res) => {
          this._user.set(res.user);
          this._token.set(res.token);
          this._authStatus.set('authenticated');
          localStorage.setItem('token', res.token);
        }),
        map(() => true),
        catchError((error: any) => {
          this._user.set(null);
          this._token.set(null);
          this._authStatus.set('not-authenticated');
          return of(false);
        })
      );
  }

  register(name: string, password: string): Observable<boolean> {
    return this._http
      .post('http://localhost:3000/auth/register', {
        name: name,
        password: password,
      })
      .pipe(
        map(() => true),
        catchError((error: any) => {
          return of(false);
        })
      );
  }

  checkStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.logOut();
      return of(false);
    }

    return this._http
      .get<AuthResponse>('http://localhost:3000/auth/check-status', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .pipe(
        tap((res) => {
          this.setUpdateUSer(res.user)
          this._user.set(res.user);
          this._token.set(res.token);
          this._authStatus.set('authenticated');
          localStorage.setItem('token', res.token);
        }),
        map(() => true),
        catchError((error: any) => {
          this._user.set(null);
          this._token.set(null);
          this._authStatus.set('not-authenticated');
          return of(false);
        })
      );
  }

  logOut() {
    this._user.set(null);
    this._authStatus.set('not-authenticated');
    this._token.set(null);

    localStorage.removeItem('token');
  }

  updateUserInfo(user: UpdateUser): Observable<boolean> {
    const {age, name, address, gender, phone_number} = user
    let clearName = name?.trim()
    const getName = () => clearName === "" ? null : clearName
    return this._http
      .patch<DeleteUser>(
        `http://localhost:3000/auth/user-config/${this.user()?.id}`,
        {
          age,
          phone_number,
          getName,
          gender,
          address
        }
      )
      .pipe(
        map(() => true),
        catchError((error) => {
          return of(false)
        })
      );
  }
}

