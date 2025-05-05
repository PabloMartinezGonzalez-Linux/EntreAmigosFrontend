import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StandardTableComponent } from "../../../../shared/standard-table/standard-table.component";
import { KartingConfigClassification } from '../table-config/karting-config';
import { KartingDataClassification } from '../table-config/mockup';

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
