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

  selectedView; // grid or chart
  columnDefs = {};
  rowData = {};

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.columnDefs = this.pageService.getColumnDefs();
    this.rowData = this.pageService.getRowData();
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}