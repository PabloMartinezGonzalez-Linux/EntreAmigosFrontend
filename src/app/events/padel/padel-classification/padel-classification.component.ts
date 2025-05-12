import { PadelEvent } from './../interfaces/padel.interface';
import { PadelClassification } from '../interfaces/padel.interface';
import { dataPadelClassification } from './../table-config/mockup';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableConfig } from '../../../shared/interfaces/table-config';
import { classificationPadelConfig } from '../table-config/padel-config';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';

@Component({
  selector: 'app-padel-classification',
  imports: [
    StandardTableComponent
  ],
  templateUrl: './padel-classification.component.html',
  styleUrl: './padel-classification.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadelClassificationComponent {
  data: PadelClassification[] = dataPadelClassification
  config: TableConfig = classificationPadelConfig
}
