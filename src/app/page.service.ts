import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  tempGridColumnDefs = [
    {headerName: 'TempMin', field: 'min', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'TempAvg', field: 'avg', sortable: true, filter: true},
    {headerName: 'TempMax', field: 'max', sortable: true, filter: true}
    ];
  humGridColumnDefs = [
    {headerName: 'HumMin', field: 'min', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'HumAvg', field: 'avg', sortable: true, filter: true},
    {headerName: 'HumMax', field: 'max', sortable: true, filter: true}
    ];
  airGridColumnDefs = [
    {headerName: 'AirMin', field: 'min', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'AirAvg', field: 'avg', sortable: true, filter: true},
    {headerName: 'AirMax', field: 'max', sortable: true, filter: true}
    ];
  gridColumnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];


  tempGridData = [
        { min: 6, avg: 11, max: 14 },
        { min: 8, avg: 16, max: 18 },
        { min: 7, avg: 13, max: 15 }
    ];
  humGridData = [
        { min: 6, avg: 11, max: 14 },
        { min: 8, avg: 16, max: 18 },
        { min: 7, avg: 13, max: 15 }
    ];
  airGridData = [
        { min: 6, avg: 11, max: 14 },
        { min: 8, avg: 16, max: 18 },
        { min: 7, avg: 13, max: 15 }
    ];
  gridData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    
  chartData = [
        {
            beverage: 'Coffee',
            Q1: 450,
            Q2: 560,
            Q3: 600,
            Q4: 700,
        },
        {
            beverage: 'Tea',
            Q1: 270,
            Q2: 380,
            Q3: 450,
            Q4: 520,
        },
        {
            beverage: 'Milk',
            Q1: 180,
            Q2: 170,
            Q3: 190,
            Q4: 200,
        },
    ];

  chartOptions = {
            data: this.chartData,
            title: {
                text: 'Beverage Expenses',
            },
            subtitle: {
                text: 'per quarter',
            },
            series: [{
                type: 'column',
                xKey: 'beverage',
                yKeys: ['Q1', 'Q2', 'Q3', 'Q4'],
                label: {},
            }],
        };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Funció per recuperar les col·lumnes d'una pàgina concreta, especificada pel paràmetre "pageId"
   * El paràmetre serveix per definir la URL que es cridarà del backend
   */
  getGridColumnDefs(pageId) {
    switch(pageId) {
      case 'temp':
        return this.tempGridColumnDefs;
      case 'hum':
        return this.humGridColumnDefs;
      case 'air':
        return this.airGridColumnDefs;
      default:
        return this.gridColumnDefs;
    }
  }

  /**
   * Funció per recuperar les dades del grid d'una pàgina concreta, especificada pel paràmetre "pageId"
   * El paràmetre serveix per definir la URL que es cridarà del backend
   */
  getGridData(pageId) {
    switch(pageId) {
      case 'temp':
        return this.tempGridData;
      case 'hum':
        return this.humGridData;
      case 'air':
        return this.airGridData;
      default:
        return this.gridData;
        // Si es fa servir una URL s'ha de posar " | async" al template per carregar les dades
        // [rowData]="gridData | async"
        //return this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
    }
  }

  /**
   * Funció per recuperar les dades del chart d'una pàgina concreta, especificada pel paràmetre "pageId"
   * El paràmetre serveix per definir la URL que es cridarà del backend
   */
  getChartOptions(pageId) {
    //return this.http.get('/assets/tools.json');
    return this.chartOptions;
  }

}