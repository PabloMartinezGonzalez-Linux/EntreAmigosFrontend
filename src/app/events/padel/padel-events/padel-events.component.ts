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
import {
  EventResponse,
  LoadUsersNextEventResponse,
} from '../../karting/interfaces/karting.interface';
import { PadelService } from '../service/padel.service';
import { BehaviorSubject, Observable, Subscription, filter, map } from 'rxjs';
import { GameIDs, PadelEvent, PadelEventPost } from '../interfaces/padel.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { AuthService } from '../../../auth/service/auth.service';
import { AdminService } from '../../../shared/services/admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PadelEventConfig } from './padelEventConfig';

@Component({
  selector: 'app-padel-events',
  imports: [StandardTableComponent, ImportsModule, Dialog, ButtonModule],
  templateUrl: './padel-events.component.html',
  styleUrl: './padel-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadelEventsComponent {
  padelService = inject(PadelService);
  adminService = inject(AdminService);
  fb = inject(FormBuilder)
  padelEventConfig = PadelEventConfig
  authService = inject(AuthService)

  config = padelConfig;
  data = this.padelService.eventById;
  items: GameIDs[] = [];
  value: number = 1;
  visible: boolean = false;

  constructor() {
    this.padelService.filterGameIds().subscribe();
    this.padelService.gameIds$
      .pipe(
        map((games) =>
          games.filter(
            (obj, index, arr) =>
              index === arr.findIndex((o) => o.game_id === obj.game_id)
          )
        )
      )
      .subscribe((uniqueGames) => {
        this.items = uniqueGames;
      });
    this.loadEventById();
    this.adminService.loadAllUsers().subscribe()
  }

  // padelEvent = this.fb.group({
  //   [this.padelEventConfig.JUGADOR1]: [''],
  //   [this.padelEventConfig.JUGADOR2]: [''],
  //   [this.padelEventConfig.SET1]: [''],
  //   [this.padelEventConfig.SET2]: [''],
  //   [this.padelEventConfig.SET3]: [''],
  //   [this.padelEventConfig.RESULTADO]: ['']
  // })

  padelEvent = this.fb.group({
    player1: ["", [Validators.required]],
    player2: ["", [Validators.required]],
    set1: [0, [Validators.required]],
    set2: [0, [Validators.required]],
    set3: [0, [Validators.required]],
    resultado: ["", [Validators.required]],
  })

  showDialog() {
    this.visible = true;
  }

  loadEventById() {
    this.padelService.loadDataByEventId(this.value).subscribe();
  }

  showAll() {
    this.items = [...this.items];
  }

  onSubmit(){
    console.log(this.padelEvent.value)
    this.visible = false;
  }
}
