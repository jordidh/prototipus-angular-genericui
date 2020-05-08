import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  messageType;
  message;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.messageType = 'info';
    this.message = "Select a menu option";
    // Ens subscribim per executar el codi del callback cada vegada que es produeixi un click en el menu que desenvoqui en una crida al route
    this.route.paramMap.subscribe(params => {
      //this.messageType = products[+params.get('messageType')];
    });
  }

  closeMessage(name) {
    var div = document.getElementById(name);
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}