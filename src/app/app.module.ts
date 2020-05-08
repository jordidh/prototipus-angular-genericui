import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu.service';
import { ToolbarService } from './toolbar.service';
import { PageComponent } from './page/page.component';
import { PageService } from './page.service';

import { AgGridModule } from 'ag-grid-angular';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AgGridModule.withComponents([]), 
    AgChartsAngularModule,
    RouterModule.forRoot([
      { path: 'page/:id', component: PageComponent },
      { path: '**', component: ErrorComponent }
    ])
  ],
  declarations: [ AppComponent, MenuComponent, PageComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MenuService, ToolbarService, PageService]
})
export class AppModule { }
