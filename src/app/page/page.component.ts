import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    private pageService: PageService
  ) { }

  ngOnInit() {
    console.log('page->ngOnInt');
    this.route.paramMap.subscribe(params => {
      var pageId = params.get('id');

      this.gridColumnDefs = this.pageService.getGridColumnDefs(pageId);
      this.gridData = this.pageService.getGridData(pageId);
      this.chartOptions = this.pageService.getChartOptions(pageId);
    });
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