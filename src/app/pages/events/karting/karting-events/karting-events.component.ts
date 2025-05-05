import { KartingConfig } from './../table-config/karting-config';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StandardTableComponent } from "../../../../shared/standard-table/standard-table.component";
import { KartingData } from '../table-config/mockup';

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
