import { HttpClient, HttpParams } from '@angular/common/http';
import {
  inject,
  Injectable,
  computed,
  WritableSignal,
  signal,
} from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../../auth/interfaces/user.interface';
import { DeleteUser, LoadAllUsers } from '../interfaces/admin.interface';
import { ResizableColumn } from 'primeng/table';
import { UserFilter } from '../../pages/admin/interfaces/UserFiltert';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}

  private _http = inject(HttpClient);
  private _users: WritableSignal<User[] | null> = signal(null);
  private _users$ = new BehaviorSubject<User[]>([]);

  users = computed(() => this._users());

  get usersObservable$(): Observable<User[]> {
    return this._users$.asObservable();
  }

  set users$(user: User[]) {
    this._users$.next(user);
  }

  loadAllUsers(params?: UserFilter): Observable<Boolean> {
    let httpParams = new HttpParams();

    if (params) {
      if (params.gender) {
        httpParams = httpParams.set('gender', params.gender);
      }
      if (params?.minAge != null) {
        httpParams = httpParams.set('minAge', params.minAge.toString());
      }
      if (params?.maxAge != null) {
        httpParams = httpParams.set('maxAge', params.maxAge.toString());
      }
      if (params?.role != null) {
        httpParams = httpParams.set('role', params.role.toString());
      }
    }

    console.log(params)

    return this._http
      .get<LoadAllUsers>('http://localhost:3000/admin/getAllUsers', {
        params: httpParams,
      })
      .pipe(
        tap((res) => {
          this._users.set(res.result);
          this.users$ = res.result;
        }),
        map(() => true),
        catchError((error) => {
          return of(false);
        })
      );
  }

  deleteUser(user_id: number): Observable<boolean> {
    return this._http
      .delete<DeleteUser>(`http://localhost:3000/admin/deleteUser/${user_id}`)
      .pipe(
        tap((res) => {
          this.loadAllUsers().subscribe();
        }),
        map(() => true),
        catchError((error) => {
          return of(false);
        })
      );
  }

  setRoleByUserId(user_id: number, role_id: number): Observable<boolean> {
    return this._http
      .patch<DeleteUser>(`http://localhost:3000/admin/setRole/${user_id}`, {
        role_id,
      })
      .pipe(
        tap((res) => {
          if (res.message === '200') {
            this.loadAllUsers().subscribe();
          }
        }),
        map(() => true),
        catchError((error) => {
          return of(false);
        })
      );
  }
}
