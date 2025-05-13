import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadClassificationData, LoadDataByEventIdResponse, LoadDataNextEventResponse, LoadEventsResponse, PostNewUserResponse } from '../interfaces/karting.interface';
import { catchError, filter, map, Observable, of } from 'rxjs';
import { AuthService } from '../../../auth/service/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class KartingService {
  constructor() { }

  authService = inject(AuthService)
  private _http = inject(HttpClient)

  loadEvents(): Observable<LoadEventsResponse>{
    return this._http.get<LoadEventsResponse>("URL")
  }

  loadDataByEventId( event_id: number ): Observable<LoadDataByEventIdResponse>{
    return this._http.post<LoadDataByEventIdResponse>("URL", {
      event_id: event_id
    })
  }

  loadClassificationData(): Observable<LoadClassificationData>{
    return this._http.get<LoadClassificationData>("URL")
  }

  loadDataNextEvent(): Observable<LoadDataNextEventResponse>{
    return this._http.get<LoadDataNextEventResponse>("URL")
  }

  registerUserForNextEvent( user: User ):Observable<Boolean>{
    return this._http.post<PostNewUserResponse>("URL",{
      user: user
    }).pipe(
      map(res => res?.message === "ok"),
      catchError((error) => {
        return of(false)
      })
    )
  }
}
