import {
  ChangeDetectionStrategy,
  Component,
  Input,
  isSignal,
  OnInit,
  Signal,
} from '@angular/core';
import { TableConfig } from '../../interfaces/table-config';
import { ImportsModule } from '../../imports';


@Component({
  selector: 'app-standard-table',
  imports: [ImportsModule],
  templateUrl: './standard-table.component.html',
  styleUrl: './standard-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardTableComponent implements OnInit {
  @Input() tableConfig: TableConfig = { columns: [] };
  @Input() data!: Signal<any[]> | any[];

  get tableData(): any[] {
    return isSignal(this.data) ? this.data() : this.data;
  }

  isClassification: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isClassification = this.tableConfig.isClassification ?? false;
  }

  isFirst(row: any, data: any) {
    if (!data || !Array.isArray(data()) || data().length === 0) {
      return 'standard';
    }
    return this.checkFisrtRow(row, data()) ? 'first' : 'standard';
  }

  checkFisrtRow(row: any, data: any) {
    if (data && data[0] && data[0].user_id !== undefined) {
      const firstUserId = data[0].user_id;
      const currentUserId = row.user_id;
      console.log('Are they equal? ', firstUserId === currentUserId);
      return firstUserId === currentUserId;
    }
    return false;
  }
}
