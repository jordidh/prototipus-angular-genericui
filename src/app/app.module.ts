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

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, ToolbarComponent, ContextmenuComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MenuService, ToolbarService]
})
export class AppModule { }
