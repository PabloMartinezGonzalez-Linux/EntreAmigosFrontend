import { KartingConfig } from './../table-config/karting-config';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
  WritableSignal,
} from '@angular/core';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';
import { ImportsModule } from '../../../shared/imports';
import { ImageService } from '../../../shared/interfaces/image-service.interface';
import { PhotoService } from '../../../shared/services/photo.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { KartingService } from '../service/karting.service';
import { EventResponse, EventResponseById } from '../interfaces/karting.interface';
import { TableConfig } from '../../../shared/interfaces/table-config';

@Component({
  selector: 'app-karting-events',
  imports: [StandardTableComponent, ImportsModule],
  templateUrl: './karting-events.component.html',
  styleUrl: './karting-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingEventsComponent {
  kartingService = inject(KartingService);

  constructor() {
    this.loadEvents();
    this.loadEventById()
  }

  config: TableConfig = KartingConfig;
  data: WritableSignal<EventResponseById[]> = signal([]);

  filteredItems: WritableSignal<EventResponse[]> = signal([]);
  items: WritableSignal<EventResponse[]> = signal([]);
  value: number = 0;

  loadEvents(): void{
    this.kartingService.loadEvents().subscribe((canLoad) => {
      if (canLoad) {
        this.items.set(this.kartingService.events());
      }
    });
  }

  loadEventById(): void{
    this.kartingService.loadDataByEventId(this.value).subscribe((canLoad) => {
      if(canLoad){
        this.data.set(this.kartingService.eventsById())
      }
    })
  }

  getAllItems(event: any): void{
    this.filteredItems.set([...this.items()]);
  }
}
