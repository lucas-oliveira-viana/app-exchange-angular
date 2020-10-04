import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  high: number;
  low: number;
  var: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: `Dólar Comercial (USD)`, high: 5.63, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.62, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.61, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.60, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.63, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.63, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.63, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.63, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.63, low: 5.59, var: 0.04},
  {name: `Dólar Comercial (USD)`, high: 5.63, low: 5.59, var: 0.04},
];

@Component({
  selector: 'values-component',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.sass']
})

export class ValuesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'high', 'low', 'var'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
