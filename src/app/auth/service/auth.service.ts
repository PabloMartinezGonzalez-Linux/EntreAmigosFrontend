import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../interfaces/auth.response.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

@Injectable(
  {providedIn: 'root'}
)
export class AuthService {
  private _authStatus = signal<AuthStatus>('checking')
  private _user = signal<User | null>(null)
  private _token = signal<string | null>(null)

  private _http = inject(HttpClient)

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === "checking") return "checking"
    if (this._user()) return "authenticated"
    return "not-authenticated"
  })

  user = computed(() => this._user())
  token = computed(() => this._token())

  login( email: string, password: string ): Observable<boolean>{
    return this._http.post<AuthResponse>('URL', {
      email: email,
      password: password
    }).pipe(
      tap(res => {
        this._user.set(res.user)
        this._token.set(res.token)
        // ?¿
        this._authStatus.set('authenticated')
        localStorage.setItem("token", res.token)
      }),
      map(() => true),
      catchError((error: any) => {
        this._user.set(null)
        this._token.set(null)
        // ?¿
        this._authStatus.set('not-authenticated')
        return of(false)
      })
    )
  }

  checkStatus(): Observable<boolean>{
    return of (true)
  }

  logOut(){
    this._user.set(null)
    this._authStatus.set('not-authenticated')
    this._token.set(null)

    localStorage.removeItem("token")
  }

}

