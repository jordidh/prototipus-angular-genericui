import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // Menúús que l'usuari actual pot veure
  menu = [ 
    { id:1, text:'pantalla 1', subItems: [ { id:10, text:'pantalla 1.1', route:'#'}, { id:11, text:'pantalla 1.2', route:'#'} ] }, 
    { id:2, text:'pantalla 2', route:'#' }, 
    { id:3, text:'pantalla 3', route:'#' },
    { id:4, text:'pantalla 4', subItems: [ { id:40, text:'pantalla 4.1', route:'#'}, { id:41, text:'pantalla 4.2', route:'#'} ] }, 
    { id:5, text:'pantalla 5', subItems: [ { id:50, text:'pantalla 5.1', route:'#'}, { id:51, text:'pantalla 5.2', route:'#'} ] }, 
    { id:6, text:'pantalla 6', subItems: [ { id:60, text:'pantalla 6.1', route:'#'}, { id:61, text:'pantalla 6.2', route:'#'} ] }, 
    { id:7, text:'pantalla 7', subItems: [ { id:70, text:'pantalla 7.1', route:'#'}, { id:71, text:'pantalla 7.2', route:'#'} ] },
    { id:8, text:'pantalla 8', subItems: [ { id:80, text:'pantalla 8.1', route:'#'}, { id:81, text:'pantalla 7.2', route:'#'} ] },
    { id:9, text:'pantalla 9', subItems: [ { id:90, text:'pantalla 9.1', route:'#'}, { id:91, text:'pantalla 7.2', route:'#'} ] }
  ];

  selectedMenuId = 0;

  constructor(
    private http: HttpClient
  ) { }

  getMenu() {
    //return this.http.get('/assets/menus.json');
    return this.menu;
  }

  getSelectedMenu() {
    //return this.http.get('/assets/menus.json');
    return this.selectedMenuId;
  }

  setSelectedMenu(id) {
    //return this.http.get('/assets/menus.json');
    this.selectedMenuId = id;
  }

}