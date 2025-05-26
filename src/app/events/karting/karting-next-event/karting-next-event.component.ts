import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ImportsModule } from '../../../shared/imports';
import { AuthService } from '../../../auth/service/auth.service';
import { TitleCasePipe } from '@angular/common';
import { KartingService } from '../service/karting.service';
import { catchError, pipe, switchMap, tap } from 'rxjs';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-karting-next-event',
  imports: [ImportsModule, TitleCasePipe],
  templateUrl: './karting-next-event.component.html',
  styleUrl: './karting-next-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingNextEventComponent implements OnInit {
  authService = inject(AuthService);
  kartingService = inject(KartingService);
  myId = this.authService.user()!.id;

  nextEventStatus: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    this.refreshStatus()
  }

  registerUser(): void {
    this.kartingService
      .registerUserForNextEvent(this.myId)
      .pipe(
        switchMap(() => this.kartingService.loadAllUsers()),
        tap(canLoad => {
          if (canLoad) this.updateNextEventStatus();
        })
      )
      .subscribe();
  }

  cancelUserRegister(): void {
    this.kartingService
      .cancelRegisterUserForNextEvent(this.myId)
      .pipe(
        switchMap(() => this.kartingService.loadAllUsers()),
        tap(canLoad => {
          if (canLoad) this.updateNextEventStatus();
        })
      )
      .subscribe();
  }

  refreshStatus(): void {
    this.kartingService
      .loadAllUsers()
      .pipe(tap(canLoad => {
        if (canLoad) this.updateNextEventStatus();
      }))
      .subscribe();
  }

  updateNextEventStatus(): void {
    const registered = this.kartingService.users()?.some(u => u.id === this.myId) ?? false;
    this.nextEventStatus.set(registered);
  }

}
