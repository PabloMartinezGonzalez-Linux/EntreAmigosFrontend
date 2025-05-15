import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicUser, ClassificationDataResponse, LoadClassificationData, LoadUsersNextEventResponse, PostNewUserResponse } from '../interfaces/karting.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';


@Injectable({providedIn: 'root'})
export class KartingService {
  constructor() { this.loadUsersNextEvent().subscribe() }

  /**
   * Inyecciones de dependencias de angular
   */
  private _http = inject(HttpClient)

  /**
   * Signals que almacenan:
   * - _users: Lista de usuarios del próximo evento
   * - _classification: Tabla de datos de la clasificación
   */
  private _users: WritableSignal<BasicUser[] | null> = signal(null)
  private _classification: WritableSignal<ClassificationDataResponse[]> = signal([])

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

  loadClassificationData(): Observable<Boolean>{
    return this._http.get<LoadClassificationData>("http://localhost:3000/karting/karting-classification").pipe(
      tap((res) => {
        if (res.result) {
          this._classification.set(res.result)
        }
      }),
      map(() => true),
      catchError((error) => of(false))
    )
  }

  /**
   * @returns Metodo que devuelve un Observable boolean:
   * - true si se ha conseguido hacer la petición
   * - false si recibe un error
   */
  loadUsersNextEvent(): Observable<Boolean>{
    return this._http.get<LoadUsersNextEventResponse>("http://localhost:3000/karting/getUserForNextEvent").pipe(
      tap((res) => {
        if(res.result){
          this._users.set(res.result)
        }
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
  registerUserForNextEvent( user_id: number ): Observable<Boolean>{
    console.log(user_id)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<PostNewUserResponse>("http://localhost:3000/karting/registerUserForNextEvent", {
      user_id : user_id
    },{ headers }).pipe(
      map(res => {
        this.loadUsersNextEvent().subscribe()
        return res?.message === "200"
      }),
      catchError((error) => {
        return of(false)
      })
    )
  }
}
