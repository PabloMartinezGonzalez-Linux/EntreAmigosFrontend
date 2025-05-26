import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { StandardFormComponent } from "../../../shared/components/standard-form/standard-form.component";
import { KartingService } from '../../../events/karting/service/karting.service';
import { TableConfig } from '../../../shared/interfaces/table-config';
import { KartingConfig } from '../../../events/karting/table-config/karting-config';
import { EventResponse, EventResponseById } from '../../../events/karting/interfaces/karting.interface';
import { ImportsModule } from '../../../shared/imports';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';

@Component({
  selector: 'app-admin',
  imports: [ImportsModule, StandardFormComponent],
  templateUrl: './update-event-result.component.html',
  styleUrl: './update-event-result.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {

  selectedSport: WritableSignal<string> = signal("karting")

  updateSignal(event: Event){
    const value = (event.target as HTMLSelectElement).value;
    this.selectedSport.set(value)
  }

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
