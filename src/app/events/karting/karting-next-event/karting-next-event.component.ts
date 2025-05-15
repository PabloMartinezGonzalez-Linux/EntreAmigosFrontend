import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { ImportsModule } from '../../../shared/imports';
import { AuthService } from '../../../auth/service/auth.service';
import { TitleCasePipe } from '@angular/common';
import { KartingService } from '../service/karting.service';
import { catchError, pipe, tap } from 'rxjs';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-karting-next-event',
  imports: [
    ImportsModule,
    TitleCasePipe
  ],
  templateUrl: './karting-next-event.component.html',
  styleUrl: './karting-next-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingNextEventComponent {

  authService = inject(AuthService)
  kartingService = inject(KartingService)

  registerStatus: WritableSignal<string> = signal("")

  registerUser(): void{
    this.kartingService.registerUserForNextEvent(this.authService.user()!.id).subscribe((isRegister) => {
      if(isRegister){
        this.registerStatus.set("Usuario Registrado")
      } else {
        this.registerStatus.set("Error al registrar el usuario")
      }
    })
  }

}
