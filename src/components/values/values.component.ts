import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ValuesService } from './values.service'

export interface PeriodicElement {
  name: string;
  high: number;
  low: number;
  var: number;
}

let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'values-component',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.sass']
})

export class ValuesComponent implements AfterViewInit {

  private valuesService: ValuesService;

  displayedColumns: string[] = ['name', 'high', 'low', 'var'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(valuesService: ValuesService) {
    this.valuesService = valuesService;

    this.createValues();
  }

  async createValues() {
    const res = await this.valuesService.getValues();
    
    res.forEach(value => {
      ELEMENT_DATA.push({
        name: value.name,
        high: Number(value.high),
        low: Number(value.low),
        var: Number(value.varBid),
      })
    })

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
