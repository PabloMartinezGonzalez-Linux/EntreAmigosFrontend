import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { padelConfig } from '../table-config/padel-config';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';
import { ImportsModule } from '../../../shared/imports';
import { EventResponse, LoadUsersNextEventResponse } from '../../karting/interfaces/karting.interface';
import { PadelService } from '../service/padel.service';
import { BehaviorSubject, Observable, Subscription, filter, map } from 'rxjs';
import { GameIDs, PadelEvent } from '../interfaces/padel.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-padel-events',
  imports: [StandardTableComponent, ImportsModule],
  templateUrl: './padel-events.component.html',
  styleUrl: './padel-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadelEventsComponent{

  padelService = inject(PadelService);

  config = padelConfig;
  data = this.padelService.eventById;
  items: GameIDs[] = [];
  value: number = 1;

  constructor() {
    this.padelService.filterGameIds().subscribe()
    this.padelService.gameIds$.subscribe(games => this.items = games)
    this.loadEventById()
  }

  loadEventById(){
    this.padelService.loadDataByEventId(this.value).subscribe();
  }

  showAll(){
    this.items = [...this.items];
  }
}
