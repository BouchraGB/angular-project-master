import { Component, OnInit } from '@angular/core';
import {ServiceMontreService} from '../../Services/service-montre.service';

@Component({
  selector: 'app-montre-digitale',
  templateUrl: './montre-digitale.component.html',
  styleUrls: ['./montre-digitale.component.css']
})
export class MontreDigitaleComponent implements OnInit {

  public timer;

  constructor(private TimerService: ServiceMontreService) { }

  ngOnInit() {
    alert("cet exercice est supplimentaire permet d'affiche un montre en formats digitale" );
    this.timer = this.TimerService.getCurrentTimer();
  }

}
