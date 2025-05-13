import { ChangeDetectionStrategy, Component, model, inject } from '@angular/core';
import { ImportsModule } from '../../../shared/imports';
import { ImageService } from '../../../shared/interfaces/image-service.interface';
import { PhotoService } from '../../../shared/services/photo.service';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-karting-next-event',
  imports: [
    ImportsModule
  ],
  templateUrl: './karting-next-event.component.html',
  styleUrl: './karting-next-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingNextEventComponent {

  authService = inject(AuthService)

}
