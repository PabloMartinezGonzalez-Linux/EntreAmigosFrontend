import { ChangeDetectionStrategy, Component } from '@angular/core';
import { padelConfig } from '../table-config/padel-config';
import { dataPadel } from '../table-config/mockup';
import { StandardTableComponent } from '../../../../shared/components/standard-table/standard-table.component';

@Component({
  selector: 'app-padel-events',
  imports: [ StandardTableComponent ],
  templateUrl: './padel-events.component.html',
  styleUrl: './padel-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadelEventsComponent {

  config = padelConfig
  data = dataPadel

}
