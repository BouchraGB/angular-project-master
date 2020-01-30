import { Component, OnInit } from '@angular/core';
import {MontreAnalogiqueServiceService } from '../../Services/montre-analogique-service.service'

@Component({
  selector: 'app-montre-analogique',
  templateUrl: './montre-analogique.component.html',
  styleUrls: ['./montre-analogique.component.css']
})
export class MontreAnalogiqueComponent implements OnInit {

  public now;

  secondDiv : HTMLElement ;
  minDiv : HTMLElement ;
  hourDiv : HTMLElement;

  constructor(private TimerService: MontreAnalogiqueServiceService) { }

  ngOnInit() {
    this.secondDiv=document.getElementById('second-hand'); //document.querySelector('.second-hand');
    this.minDiv=document.getElementById('min-hand');// document.querySelector('.min-hand');
    this.hourDiv  =document.getElementById('hour-hand');
    setInterval(()=>this.setDate(),1000);

    
  }

  setDate(){        
    //get current date
    this.now= this.TimerService.getCurrentTimer();

    //get seconds
    let seconds = this.now.getSeconds();

    //get degre of seconde in cercle
    let secDeg =((seconds/60)*360)+90;   

    //change style of seconds
    this.secondDiv.style.transform='rotate('+secDeg+'deg)'; 
    
    //get minutes
    let mins = this.now.getMinutes();

    //get degre of minutes in cercle
    let minDeg =((mins/60) * 360) + ((seconds/60)*6) + 90;

    //change style of minutes
    this.minDiv.style.transform = 'rotate('+minDeg+'deg)';  

    //get hour
    let hour = this.now.getHours();

    //get degre of hour in cercle
    let hourDeg =((hour/12)*360) + ((mins/60)*3) + 90;

    //change style of hour
    this.hourDiv.style.transform = 'rotate('+hourDeg+'deg)';    
}

}
