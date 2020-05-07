import { Component, OnInit, ViewChild } from '@angular/core';
import { PageService } from '../page.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  selectedView = 'grid'; // grid or chart

  // grid
  columnDefs = {};
  rowData = {};

  // chart
  options: any;
  beverageSpending = [
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

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.columnDefs = this.pageService.getColumnDefs();
    this.rowData = this.pageService.getRowData();

    this.options = {
            data: this.beverageSpending,
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
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}