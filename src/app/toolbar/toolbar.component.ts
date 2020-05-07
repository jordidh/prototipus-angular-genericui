import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  toolbarItems;
  toolbarItemsForSelectedMenu;
  selectedMenu;

  constructor(
    private toolbarService: ToolbarService,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.toolbarItems = this.toolbarService.getTools();
    this.selectedMenu = this.menuService.getSelectedMenu();
  }

  openCloseToolbar() {
    // Recuperem les eines segons al menu que estem
    this.selectedMenu = this.menuService.getSelectedMenu();
    this.toolbarItemsForSelectedMenu = [];
    for (var i = 0; i < this.toolbarItems.length; i++) {
      if (this.toolbarItems[i].menuId === this.selectedMenu.id) {
        this.toolbarItemsForSelectedMenu = this.toolbarItems[i].tools;
        break;
      }
    }

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