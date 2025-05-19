import { HttpClient } from '@angular/common/http';
import { inject, Injectable, computed, WritableSignal, signal } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../../auth/interfaces/user.interface';
import { LoadAllUsers } from '../interfaces/admin.interface';
import { ResizableColumn } from 'primeng/table';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  private _http = inject(HttpClient)
  private _users: WritableSignal<User[] | null> = signal(null)

  users = computed(() => this._users())

  loadAllUsers(): Observable<Boolean>{
    return this._http.get<LoadAllUsers>("http://localhost:3000/admin/getAllUsers").pipe(
      tap((res) =>{
        this._users.set(res.result)
      }),
      map(() => true),
      catchError((error) => {
        return of(false)
      })
    )
  }

}
