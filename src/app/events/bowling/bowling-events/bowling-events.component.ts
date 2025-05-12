import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bowlingData } from '../table-config/mockup';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';
import { bowlingConfig } from '../table-config/bowling-config';

@Component({
  selector: 'app-bowling-events',
  imports: [StandardTableComponent],
  templateUrl: './bowling-events.component.html',
  styleUrl: './bowling-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BowlingEventsComponent {

  config = bowlingConfig
  data = bowlingData
}
