import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import { MenuService } from './menu.service';
import { ToolbarService } from './toolbar.service';
import { AgGridModule } from 'ag-grid-angular';
import { PageComponent } from './page/page.component';
import { PageService } from './page.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, ToolbarComponent, ContextmenuComponent, PageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MenuService, ToolbarService, PageService]
})
export class AppModule { }
