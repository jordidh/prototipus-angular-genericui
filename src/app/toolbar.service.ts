import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  // Eines que l'usuari actual pot fer servir en cada pantalla
  tools = [ 
    { menuId:1, tools: [ 
      { id:1, text:'new', route:'#'}, 
      { id:2, text:'edit', route:'#'},
      { id:3, text:'delete', route:'#'},
      { id:4, text:'print', route:'#'},
      { id:5, text:'export', route:'#'} 
      ] },
    { menuId:2, tools: [ 
      { id:6, text:'new', route:'#'}, 
      { id:7, text:'edit', route:'#'},
      { id:8, text:'delete', route:'#'},
      { id:9, text:'print', route:'#'},
      { id:10, text:'export', route:'#'} 
      ] },
    { menuId:3, tools: [ 
      { id:11, text:'new', route:'#'}, 
      { id:12, text:'edit', route:'#'},
      { id:13, text:'delete', route:'#'},
      { id:14, text:'print', route:'#'},
      { id:15, text:'export', route:'#'} 
      ] }
  ];

  constructor(
    private http: HttpClient
  ) { }

  getTools() {
    //return this.http.get('/assets/tools.json');
    return this.tools;
  }

}