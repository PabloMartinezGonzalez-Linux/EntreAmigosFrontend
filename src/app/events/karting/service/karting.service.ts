import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassificationDataResponse, LoadClassificationData, LoadDataByEventIdResponse, LoadEventsResponse, LoadUsersNextEventResponse, PostNewUserResponse } from '../interfaces/karting.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../../../auth/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class KartingService {
  constructor() { }

  /**
   * Inyecciones de dependencias de angular
   */
  private _http = inject(HttpClient)

  /**
   * Signals que almacenan:
   * - _users: Lista de usuarios del próximo evento
   * - _classification: Tabla de datos de la clasificación
   */
  private _users: WritableSignal<User[] | null> = signal(null)
  private _classification: WritableSignal<ClassificationDataResponse[] | null> = signal(null)

  /**
   * Computeds que permiten ver el contenido de las signals:
   * - users --> _users
   * - classification --> _classification
   */
  users = computed(() => this._users())
  classification = computed(() => this._classification())

  // loadEvents(): Observable<Boolean>{
  //   return this._http.get<LoadEventsResponse>("URL")
  // }

  // loadDataByEventId( event_id: number ): Observable<Boolean>{
  //   return this._http.post<LoadDataByEventIdResponse>("URL", {
  //     event_id: event_id
  //   })
  // }

  // loadClassificationData(): Observable<Boolean>{
  //   return this._http.get<LoadClassificationData>("URL")
  // }

  /**
   * @returns Metodo que devuelve un Observable boolean:
   * - true si se ha conseguido hacer la petición
   * - false si recibe un error
   */
  loadUsersNextEvent(): Observable<Boolean>{
    return this._http.get<LoadUsersNextEventResponse>("URL").pipe(
      tap((res) => {
        this._users.set(res.results)
      }),
      map(() => true),
      catchError((error) => {
        return of(false)
      })
    )
  }

  /**
   * @returns Devuelve un Observable boolean:
   * - true si la respuesta de la api es ok
   * - false si recibe un error
   */
  registerUserForNextEvent( user: User ): Observable<Boolean>{
    return this._http.post<PostNewUserResponse>("URL",{
      user: user
    }).pipe(
      map(res => res?.status === "200"),
      catchError((error) => {
        return of(false)
      })
    )
  }
}
