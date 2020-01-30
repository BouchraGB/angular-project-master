import { Component, OnInit } from '@angular/core';
import {ServiceMovieApiService} from '../../Services/service-movie-api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cinema-movie',
  templateUrl: './cinema-movie.component.html',
  styleUrls: ['./cinema-movie.component.css']
})
export class CinemaMovieComponent implements OnInit {

  movies : Response[];

  onemovie;

  moviewithoutone;

  images;

  Idmovie;

  constructor(private $ser: ServiceMovieApiService,private sanitizer:DomSanitizer,private router: Router) { }

  ngOnInit() {
    this.getMovies();
    alert("cet composant permet d'affiche le slide qui contient des films si les images ne figurant pas cad il ya un problem dans internet" );
  }

  getMovies() {
    this.$ser.getMovie().subscribe((res: Response) => {
      this.movies =Array.of(res);
      this.movies=this.movies[0]['results'];
      this.onemovie=Array.of(this.movies[0]);
      this.moviewithoutone=Array.of(this.movies.slice(1));
      this.moviewithoutone=this.moviewithoutone[0];
    });
  }

  getImage(path){
    return "https://image.tmdb.org/t/p/w500/"+path;
  }

  OpenMovie(id){
    this.Idmovie=id;
    this.router.navigate(['./movie/'+id]);
  }


}

