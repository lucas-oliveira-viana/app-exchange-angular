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
  {name: `Dólar Comercial (USD)`, high: 5.63, low: 5.59, var: 0.7},
  {name: `Dólar Turismo (USDT)`, high: 5.82, low: 5.75, var: 0.7},
  {name: `Dólar Canadense (CAD)`, high: 4.27, low: 4.21, var: 0.56},
  {name: `Euro (EUR)`, high: 6.66, low: 6.57, var: 0.43},
  {name: `Libra Esterlina (GBP)`, high: 7.36, low: 7.24, var: 1.12},
  {name: `Peso Argentino (ARS)`, high: 0.07, low: 0.07, var: -0.27},
  {name: `Bitcoin (BTC)`, high: 60497.7, low: 59900, var: 2.8},
  {name: `Iene Japonês (JPY)`, high: 0.05, low: 0.05, var: 0.00},
  {name: `Yuan Chinês (CNY)`, high: 0.83, low: 0.83, var: 0.00},
  {name: `Ethereum (ETH)`, high: 6480, low: 6480, var: 0.00},
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
