import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  tempGridColumnDefs = [
    {headerName: 'Day', field: 'day', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'TempMin', field: 'min', sortable: true, filter: true},
    {headerName: 'TempAvg', field: 'avg', sortable: true, filter: true},
    {headerName: 'TempMax', field: 'max', sortable: true, filter: true}
    ];
  humGridColumnDefs = [
    {headerName: 'Day', field: 'day', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'HumMin', field: 'min', sortable: true, filter: true},
    {headerName: 'HumAvg', field: 'avg', sortable: true, filter: true},
    {headerName: 'HumMax', field: 'max', sortable: true, filter: true}
    ];
  airGridColumnDefs = [
    {headerName: 'Day', field: 'day', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'AirMin', field: 'min', sortable: true, filter: true},
    {headerName: 'AirAvg', field: 'avg', sortable: true, filter: true},
    {headerName: 'AirMax', field: 'max', sortable: true, filter: true}
    ];
  gridColumnDefs = [
    {headerName: 'Day', field: 'day', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];


  tempGridData = [
        { day: 'dilluns', min: 6, avg: 11, max: 14 },
        { day: 'dimarts', min: 8, avg: 16, max: 18 },
        { day: 'dimecres', min: 7, avg: 13, max: 15 }
    ];
  humGridData = [
        { day: 'dilluns', min: 60, avg: 65, max: 70 },
        { day: 'dimarts', min: 80, avg: 95, max: 100 },
        { day: 'dimecres', min: 70, avg: 75, max: 90 }
    ];
  airGridData = [
        { day: 'dilluns', min: 6, avg: 11, max: 14 },
        { day: 'dimarts', min: 8, avg: 16, max: 18 },
        { day: 'dimecres', min: 7, avg: 13, max: 15 }
    ];
  gridData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    
  chartData = [
        { beverage: 'Coffee', Q1: 450, Q2: 560, Q3: 600, Q4: 700 },
        { beverage: 'Tea', Q1: 270, Q2: 380, Q3: 450, Q4: 520 },
        { beverage: 'Milk', Q1: 180, Q2: 170, Q3: 190, Q4: 200 }
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

  tempChartOptions = {
            data: this.tempGridData,
            title: {
                text: 'Temperature',
            },
            subtitle: {
                text: 'última setmana',
            },
            series: [{
                type: 'column',
                xKey: 'day',
                yKeys: ['min', 'avg', 'max'],
                label: {},
            }],
        };

  humChartOptions = {
            data: this.humGridData,
            title: {
                text: 'Humitat',
            },
            subtitle: {
                text: 'última setmana',
            },
            series: [{
                type: 'column',
                xKey: 'day',
                yKeys: ['min', 'avg', 'max'],
                label: {},
            }],
        };

  airChartOptions = {
            data: this.airGridData,
            title: {
                text: 'Aire',
            },
            subtitle: {
                text: 'última setmana',
            },
            series: [{
                type: 'column',
                xKey: 'day',
                yKeys: ['min', 'avg', 'max'],
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
    if (pageId) {
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
    } else {
      return this.gridColumnDefs;
    }
  }

  /**
   * Funció per recuperar les dades del grid d'una pàgina concreta, especificada pel paràmetre "pageId"
   * El paràmetre serveix per definir la URL que es cridarà del backend
   */
  getGridData(pageId) {
    if (pageId) {
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
    } else {
      return this.gridData;
    }
  }

  /**
   * Funció per recuperar les dades del chart d'una pàgina concreta, especificada pel paràmetre "pageId"
   * El paràmetre serveix per definir la URL que es cridarà del backend
   */
  getChartOptions(pageId) {
    //return this.http.get('/assets/tools.json');
    //return this.chartOptions;
    if (pageId) {
      switch(pageId) {
        case 'temp':
          return this.tempChartOptions;
        case 'hum':
          return this.humChartOptions;
        case 'air':
          return this.airChartOptions;
        default:
          return this.chartOptions;
          // Si es fa servir una URL s'ha de posar " | async" al template per carregar les dades
          // [rowData]="gridData | async"
          //return this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
      }
    } else {
      return this.chartOptions;
    }
  }
}