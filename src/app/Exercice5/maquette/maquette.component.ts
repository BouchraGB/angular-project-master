import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquette',
  templateUrl: './maquette.component.html',
  styleUrls: ['./maquette.component.css']
})
export class MaquetteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert("cet exercice est supplimentaire permet d'affiche une maquette de youtube" );

  }

}
