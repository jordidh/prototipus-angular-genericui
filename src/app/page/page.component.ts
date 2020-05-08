import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { ToolbarService } from '../toolbar.service';
import { MenuService } from '../menu.service';
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

  // Toolbar
  toolbarItemsForSelectedMenu;

  selectedMenu;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private menuService: MenuService,
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    // Ens subscribim per executar el codi del callback cada vegada que es produeixi un click en el menu que desenvoqui en una crida al route
    this.route.paramMap.subscribe(params => {
      var selectedMenu = this.menuService.getSelectedMenu();

      if (selectedMenu.pageId) {
        this.selectedMenu = selectedMenu;
        this.gridColumnDefs = this.pageService.getGridColumnDefs(selectedMenu.pageId);
        this.gridData = this.pageService.getGridData(selectedMenu.pageId);
        this.chartOptions = this.pageService.getChartOptions(selectedMenu.pageId);

        this.toolbarItemsForSelectedMenu = this.toolbarService.getTools(selectedMenu.pageId);
      } else {
        this.gridColumnDefs = this.pageService.getGridColumnDefs('temp');
        this.gridData = this.pageService.getGridData('temp');
        this.chartOptions = this.pageService.getChartOptions('temp');

        this.toolbarItemsForSelectedMenu = this.toolbarService.getTools('temp');
      }
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


  /** TOOLBAR functions */
  openCloseToolbar() {
    // Mostrem la llista d'eines
    var dropdown = document.getElementById("dropdown-toolbar")
    dropdown.classList.toggle("show");
  }

  filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var div = document.getElementById("dropdown-toolbar");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      var txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
}