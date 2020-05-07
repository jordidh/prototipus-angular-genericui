import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  gridColumnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];

  gridData = [];
  /*
  gridData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    */
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

  getGridColumnDefs() {
    //return this.http.get('/assets/tools.json');
    return this.gridColumnDefs;
  }

  getGridData() {
    // Get data from a remote server
    return this.gridData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');

    // Get data hardcoded
    //return this.gridData;
  }

  getChartOptions() {
    //return this.http.get('/assets/tools.json');
    return this.chartOptions;
  }

}