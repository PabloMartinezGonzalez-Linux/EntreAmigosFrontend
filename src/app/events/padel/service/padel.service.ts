import { HttpClient } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import {
  EventResponse,
  GameIDs,
  LoadClassificationData,
  LoadDataByEventIdResponse,
  LoadEventsResponse,
  PadelClassification,
  PadelEvent,
  PadelEventPost,
} from '../interfaces/padel.interface';
import { Events } from 'leaflet';

@Injectable({ providedIn: 'root' })
export class PadelService {
  constructor() {}

  // Injeccion de HttpClient
  private _http = inject(HttpClient);

  // Variables que almacenan la info del modulo de padel
  private _classification: WritableSignal<PadelClassification[]> = signal([]);
  private _events$ = new BehaviorSubject<PadelEvent[]>([]);
  private _eventsById: WritableSignal<PadelEvent[]> = signal([]);
  private _gameIds$ = new BehaviorSubject<GameIDs[]>([]);

  classification = computed(() => this._classification());

  // Get y Set _events$
  get events$() {
    return this._events$.asObservable();
  }

  set eventsResponse$(events: PadelEvent[]) {
    this._events$.next(events);
  }

  eventById = computed(() => this._eventsById());

  // Get y Set _eventsById$
  get gameIds$() {
    return this._gameIds$;
  }

  set gameIdsResponse$(gamesIds: GameIDs[]) {
    this._gameIds$.next(gamesIds);
  }

  filterGameIds(): Observable<boolean> {
    return this._http
      .get<LoadDataByEventIdResponse>(
        'http://localhost:3000/padel/getEventsResult'
      )
      .pipe(
        map((res) => {
          this.gameIdsResponse$ = res.result.map((res) => ({
            game_id: res.game_id,
            team_id: res.team_id,
          }));
          return true;
        }),
        catchError((error) => {
          return of(false);
        })
      );
  }

  loadDataByEventId(event_id: number): Observable<Boolean> {
    return this._http
      .get<LoadDataByEventIdResponse>(
        `http://localhost:3000/padel/getEventsResultById/${event_id}`
      )
      .pipe(
        tap((res) => {
          if (res.result) {
            this._eventsById.set(res.result);
          }
        }),
        map(() => true),
        catchError((error) => {
          return of(false);
        })
      );
  }

  loadClassificationData(): Observable<Boolean> {
    return this._http
      .get<LoadClassificationData>(
        'http://localhost:3000/padel/getClassification'
      )
      .pipe(
        tap((res) => {
          if (res.result) {
            this._classification.set(res.result);
          }
        }),
        map(() => true),
        catchError((error) => of(false))
      );
  }

  postEventResult(padelEvent: PadelEventPost): Observable<boolean>{
    return this._http.post('http://localhost:3000/padel/postEventResult', padelEvent).pipe(
      map(() => true),
      catchError((error) => {
        return of(false)
      })
    )
  }
}
