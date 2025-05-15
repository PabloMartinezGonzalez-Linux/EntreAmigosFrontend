import { ChangeDetectionStrategy, Component, inject, WritableSignal } from '@angular/core';
import { KartingConfigClassification } from '../table-config/karting-config';
import { KartingDataClassification } from '../table-config/mockup';
import { StandardTableComponent } from '../../../shared/components/standard-table/standard-table.component';
import { KartingService } from '../service/karting.service';
import { ClassificationDataResponse } from '../interfaces/karting.interface';
import { kartingRoutes } from '../karting.routes';

@Component({
  selector: 'app-karting-classification',
  imports: [StandardTableComponent],
  templateUrl: './karting-classification.component.html',
  styleUrl: './karting-classification.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KartingClassificationComponent {

  KartingService = inject(KartingService)

  constructor(){ this.KartingService.loadClassificationData().subscribe()}

  config = KartingConfigClassification
  data = this.KartingService.classification

}
