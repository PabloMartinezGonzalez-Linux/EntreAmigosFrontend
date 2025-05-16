import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicUser, ClassificationDataResponse, EventResponse, EventResponseById, LoadClassificationData, LoadDataByEventIdResponse, LoadEventsResponse, LoadUsersNextEventResponse, PostNewUserResponse } from '../interfaces/karting.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class KartingService{
  constructor() { this.loadUsersNextEvent().subscribe() }

  /**
   * Inyecciones de dependencias de angular
  */
  private _http = inject(HttpClient)

  /**
   * Signals que almacenan las respuestas de la API
  */
  private _users: WritableSignal<BasicUser[] | null> = signal(null)
  private _classification: WritableSignal<ClassificationDataResponse[]> = signal([])
  private _events: WritableSignal<EventResponse[]> = signal([])
  private _eventsById: WritableSignal<EventResponseById[]> = signal([])

  /**
   * Computeds que permiten ver el contenido de las signals privadas
  */
  users = computed(() => this._users())
  classification = computed(() => this._classification())
  events = computed(() => this._events())
  eventsById = computed(() => this._eventsById())

  /**
   * @returns Devuelve un Observable boolean:
   * - true si la respuesta de la api es ok
   * - false si recibe un error
  */
  loadEvents(): Observable<Boolean>{
    return this._http.get<LoadEventsResponse>("http://localhost:3000/karting/getEventsList").pipe(
      tap((res) => {
        if (res.result) {
          this._events.set(res.result)
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
  loadDataByEventId( event_id: number ): Observable<Boolean>{
    return this._http.get<LoadDataByEventIdResponse>(`http://localhost:3000/karting/getEventResults/${event_id}`).pipe(
      tap((res) => {
        if(res.result){
          this._eventsById.set(res.result)
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

  /**
   * @returns Devuelve un Observable boolean:
   * - true si la respuesta de la api es ok
   * - false si recibe un error
  */
  updateEventResult( event_id: number, user_id: number, position: number, quick_lap: string, average_time: string ): Observable<Boolean>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put<PostNewUserResponse>("http://localhost:3000/karting/updateEventResults", {
      event_id: event_id,
      user_id : user_id,
      position: position,
      quick_lap: quick_lap,
      average_time: average_time
    },{ headers }).pipe(
      map(res => {
        return res?.message === "200"
      }),
      catchError((error) => {
        return of(false)
      })
    )
  }



}
