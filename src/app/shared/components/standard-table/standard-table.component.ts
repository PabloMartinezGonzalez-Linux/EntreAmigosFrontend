import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  isSignal,
  OnInit,
  Signal,
} from '@angular/core';
import { TableConfig } from '../../interfaces/table-config';
import { ImportsModule } from '../../imports';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-standard-table',
  imports: [ImportsModule],
  templateUrl: './standard-table.component.html',
  styleUrl: './standard-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardTableComponent implements OnInit {

  constructor() {}

  authService = inject(AuthService)

  @Input() tableConfig: TableConfig = { columns: [] };
  @Input() data!: Signal<any[]> | any[];

  isClassification: boolean = false;

  get tableData(): any[] {
    return isSignal(this.data) ? this.data() : this.data;
  }

  ngOnInit(): void {
    this.isClassification = this.tableConfig.isClassification ?? false;
  }

  isFirst(row: any, data: any) {
    const dataArray = isSignal(data) ? data() : data;

    if (!dataArray || !Array.isArray(dataArray) || dataArray.length === 0) {
      return 'standard';
    }

    return this.checkFisrtRow(row, dataArray) ? 'first' : 'standard';
  }

  checkFisrtRow(row: any, data: any) {
    if (data && data[0] && data[0].user_id !== undefined) {
      const firstUserId = data[0].user_id;
      const currentUserId = row.user_id;
      return firstUserId === currentUserId;
    }
    return false;
  }
}
