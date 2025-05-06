import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableConfig } from '../../interfaces/table-config';
import { ImportsModule } from '../../imports';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-standard-table',
  imports: [
    ImportsModule
  ],
  templateUrl: './standard-table.component.html',
  styleUrl: './standard-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardTableComponent {

  @Input() tableConfig: TableConfig = { columns: [] };
  @Input() data: any[] = [];

}
