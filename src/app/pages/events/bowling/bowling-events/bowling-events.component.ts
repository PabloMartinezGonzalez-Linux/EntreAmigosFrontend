import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bowlingData } from '../table-config/mockup';
import { BowlingConfig } from '../table-config/bowling-config';
import { StandardTableComponent } from '../../../../shared/components/standard-table/standard-table.component';

@Component({
  selector: 'app-bowling-events',
  imports: [StandardTableComponent],
  templateUrl: './bowling-events.component.html',
  styleUrl: './bowling-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BowlingEventsComponent {

  config = BowlingConfig
  data = bowlingData
}
