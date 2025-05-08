import { KartingConfig } from './../table-config/karting-config';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KartingData } from '../table-config/mockup';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';

@Component({
  selector: 'app-karting-events',
  imports: [StandardTableComponent],
  templateUrl: './karting-events.component.html',
  styleUrl: './karting-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingEventsComponent {

  config = KartingConfig
  data = KartingData
}
