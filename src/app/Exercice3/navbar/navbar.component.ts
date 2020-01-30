import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert("cette exercice est supplimentaire permet d'affiche un toolbar est a partir de button selectionnée on peut les detecter" );

  }

}
