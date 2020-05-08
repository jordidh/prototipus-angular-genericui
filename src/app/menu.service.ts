import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // Menúús que l'usuari actual pot veure
  menu = [
    { id:1, text:'pantalla meteo', pageId:'meteo', subItems: [ 
      { id:10, text:'pantalla temp.', pageId:'temp', route:'page/temp'}, 
      { id:11, text:'pantalla hum.', pageId:'hum', route:'page/hum'}, 
      { id:12, text:'pantalla air', pageId:'air', route:'page/air'} ] }, 
    { id:2, text:'pantalla 2', pageId:'2', route:'page/2' }, 
    { id:3, text:'pantalla 3', pageId:'3', route:'page/3' },
    { id:4, text:'pantalla 4', pageId:'4', subItems: [ 
      { id:40, text:'pantalla 4.1', pageId:'40', route:'page40'}, 
      { id:41, text:'pantalla 4.2', pageId:'41', route:'page41'} ] }, 
    { id:5, text:'pantalla 5', pageId:'5', subItems: [ 
      { id:50, text:'pantalla 5.1', pageId:'50', route:'page50'}, 
      { id:51, text:'pantalla 5.2', pageId:'51', route:'page51'} ] }, 
    { id:6, text:'pantalla 6', pageId:'6', subItems: [ 
      { id:60, text:'pantalla 6.1', pageId:'60', route:'page60'}, 
      { id:61, text:'pantalla 6.2', pageId:'61', route:'page61'} ] }, 
    { id:7, text:'pantalla 7', pageId:'7', subItems: [ 
      { id:70, text:'pantalla 7.1', pageId:'70', route:'page70'}, 
      { id:71, text:'pantalla 7.2', pageId:'71', route:'page71'} ] },
    { id:8, text:'pantalla 8', pageId:'8', subItems: [ 
      { id:80, text:'pantalla 8.1', pageId:'80', route:'page80'}, 
      { id:81, text:'pantalla 8.2', pageId:'81', route:'page81'} ] },
    { id:9, text:'pantalla 9', pageId:'9', subItems: [ 
      { id:90, text:'pantalla 9.1', pageId:'90', route:'page90'}, 
      { id:91, text:'pantalla 9.2', pageId:'91', route:'page91'} ] }
  ];

  // menu = { id:1, text:'pantalla 1', pageId:'', subItems: [...] }
  selectedMenu = {};

  constructor(
    private http: HttpClient
  ) { }

  getMenu() {
    //return this.http.get('/assets/menus.json');
    return this.menu;
  }

  getSelectedMenu() {
    return this.selectedMenu;
  }

  setSelectedMenu(menu) {
    this.selectedMenu = menu;
  }

}