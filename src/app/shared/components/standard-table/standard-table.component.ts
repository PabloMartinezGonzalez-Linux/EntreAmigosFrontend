import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TableConfig } from '../../interfaces/table-config';
import { ImportsModule } from '../../imports';
import { TitleCasePipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-standard-table',
  imports: [
    ImportsModule
  ],
  templateUrl: './standard-table.component.html',
  styleUrl: './standard-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardTableComponent implements OnInit{

  @Input() tableConfig: TableConfig = { columns: [] };
  @Input() data: any[] = [];

  isClassification: boolean = false

  constructor(){}

  ngOnInit(): void {
    this.isClassification = this.tableConfig.isClassification ?? false
  }

  isFirst( row: any, data: any ){
    console.log(row, data)
    console.log(this.checkFisrtRow( row, data ))
    return this.isClassification && this.checkFisrtRow( row, data ) ? 'first' : 'standard'
  }

  checkFisrtRow( row: any, data: any ){
    return data[0].event_id === row.event_id
  }
}
