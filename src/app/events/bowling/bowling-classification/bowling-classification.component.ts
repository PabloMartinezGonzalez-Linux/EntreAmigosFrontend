import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bowlingDataClassification } from '../table-config/mockup';
import { bowlingConfigClassification } from '../table-config/bowling-config';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';

@Component({
  selector: 'app-bowling-classification',
  imports: [
    StandardTableComponent
  ],
  templateUrl: './bowling-classification.component.html',
  styleUrl: './bowling-classification.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BowlingClassificationComponent {
  data = bowlingDataClassification
  config = bowlingConfigClassification
}
