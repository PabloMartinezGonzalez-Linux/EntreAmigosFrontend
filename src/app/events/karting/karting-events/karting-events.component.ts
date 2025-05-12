import { KartingConfig } from './../table-config/karting-config';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
} from '@angular/core';
import { KartingData } from '../table-config/mockup';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';
import { ImportsModule } from '../../../shared/imports';
import { ImageService } from '../../../shared/interfaces/image-service.interface';
import { PhotoService } from '../../../shared/services/photo.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { KartingService } from '../service/karting.service';

@Component({
  selector: 'app-karting-events',
  imports: [StandardTableComponent, ImportsModule],
  templateUrl: './karting-events.component.html',
  styleUrl: './karting-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingEventsComponent {

  kartingService = inject(KartingService)

  config = KartingConfig;
  data = KartingData;

  items: string[] = [];
  value: string = "";

  /**
   * TODO: Injectar el servicio y usar la peticion de los eventos en el search
   * @param event
   *
   */
  search(event: AutoCompleteCompleteEvent) {

  }
}
