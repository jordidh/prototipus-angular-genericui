import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  // Eines que l'usuari actual pot fer servir en cada pantalla
  tools = [ 
    { menuId:10, tools: [ 
      { id:101, text:'new', route:'#'}, 
      { id:102, text:'edit', route:'#'},
      { id:103, text:'delete', route:'#'},
      { id:104, text:'print', route:'#'},
      { id:105, text:'export', route:'#'} 
      ] },
    { menuId:11, tools: [ 
      { id:101, text:'new', route:'#'}, 
      { id:102, text:'edit', route:'#'},
      { id:103, text:'delete', route:'#'},
      { id:104, text:'print', route:'#'},
      { id:105, text:'export', route:'#'} 
      ] },
    { menuId:2, tools: [ 
      { id:21, text:'new', route:'#'}, 
      { id:22, text:'edit', route:'#'},
      { id:23, text:'delete', route:'#'},
      { id:24, text:'print', route:'#'},
      { id:25, text:'export', route:'#'} 
      ] },
    { menuId:3, tools: [ 
      { id:31, text:'new', route:'#'}, 
      { id:32, text:'edit', route:'#'},
      { id:33, text:'delete', route:'#'},
      { id:34, text:'print', route:'#'},
      { id:35, text:'export', route:'#'} 
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