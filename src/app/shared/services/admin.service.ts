import { HttpClient } from '@angular/common/http';
import { inject, Injectable, computed, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../../auth/interfaces/user.interface';
import { DeleteUser, LoadAllUsers } from '../interfaces/admin.interface';
import { ResizableColumn } from 'primeng/table';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  private _http = inject(HttpClient)
  private _users: WritableSignal<User[] | null> = signal(null)
  private _users$ = new BehaviorSubject<User[]>([])

  users = computed(() => this._users())

  get usersObservable$(): Observable<User[]>{
    return this._users$.asObservable()
  }

  set users$(user: User[]){
    this._users$.next(user)
  }

  loadAllUsers(): Observable<Boolean>{
    return this._http.get<LoadAllUsers>("http://localhost:3000/admin/getAllUsers").pipe(
      tap((res) =>{
        this._users.set(res.result)
        this.users$ = res.result
      }),
      map(() => true),
      catchError((error) => {
        return of(false)
      })
    )
  }

  deleteUser(user_id: number): Observable<boolean>{
    return this._http.delete<DeleteUser>(`http://localhost:3000/admin/deleteUser/${user_id}`).pipe(
      tap((res) => {
        this.loadAllUsers()
      }),
      map(() => true),
      catchError((error) => {
        return of (false)
      })
    )
  }

  setRoleByUserId(user_id: number, role_id: number): Observable<boolean>{
    return this._http.patch<DeleteUser>(`http://localhost:3000/admin/setRole/${user_id}`, {
      role_id
    }).pipe(
      tap((res) => {
        if (res.message === "200") {
          this.loadAllUsers()
        }
      }),
      map(() => true),
      catchError((error) => {
        return of(false)
      })
    )
  }

}
