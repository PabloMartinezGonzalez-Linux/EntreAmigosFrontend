import { PadelEvent } from './../interfaces/padel.interface';
import { PadelClassification } from '../interfaces/padel.interface';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableConfig } from '../../../shared/interfaces/table-config';
import { classificationPadelConfig } from '../table-config/padel-config';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';
import { PadelService } from '../service/padel.service';
import { FormBuilder } from '@angular/forms';

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

  constructor(){
    this.padelService.loadClassificationData().subscribe()
  }

  padelService = inject(PadelService)

  data = this.padelService.classification
  config: TableConfig = classificationPadelConfig

}
