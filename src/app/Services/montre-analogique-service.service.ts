import { Injectable } from '@angular/core';
import { Observable , interval} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MontreAnalogiqueServiceService {

  private time;
  

  constructor() { 
    /*this.time=interval(1000).pipe(
      map( () => new Date())
    );

    this.time.subscribe(value=>this.time=value);*/
    
      
  }

  getCurrentTimer() { 
    new Observable(observer => {
      observer.next(new Date());
    }).subscribe(value=>this.time=value);

    //console.log(this.time); 
    return this.time ;
  }
}
