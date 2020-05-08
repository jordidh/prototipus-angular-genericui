import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenu();
  }

  openCloseSubMenu(menuItem) {
    var dropdown = document.getElementById("dropdown-btn-" + menuItem.id)
    dropdown.classList.toggle("active");
    var dropdownContent = dropdown.nextElementSibling;  // retorna els elements a continuació de l'actual => retornarà els subItems
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }

  setMenu(menu) {
    console.log(menu);
    this.menuService.setSelectedMenu(menu);
  }
}