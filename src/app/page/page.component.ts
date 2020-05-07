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
  gridColumnDefs = {};
  gridData = {};
  // chart
  chartOptions: any;

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.gridColumnDefs = this.pageService.getGridColumnDefs();
    this.gridData = this.pageService.getGridData();
    this.chartOptions = this.pageService.getChartOptions();
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  setGridView() {
    this.selectedView = 'grid';
  }

  setChartView() {
    this.selectedView = 'chart';
  }
}