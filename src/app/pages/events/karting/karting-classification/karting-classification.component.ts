import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KartingConfigClassification } from '../table-config/karting-config';
import { KartingDataClassification } from '../table-config/mockup';
import { StandardTableComponent } from '../../../../shared/components/standard-table/standard-table.component';

@Component({
  selector: 'app-karting-classification',
  imports: [StandardTableComponent],
  templateUrl: './karting-classification.component.html',
  styleUrl: './karting-classification.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingClassificationComponent {
  config = KartingConfigClassification
  data = KartingDataClassification
}
