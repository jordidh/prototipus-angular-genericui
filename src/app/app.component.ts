import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { ToolbarService } from './toolbar.service';
import { PageService } from './page.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    console.log('app->ngOnInt');
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}
