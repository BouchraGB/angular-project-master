import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ServiceMovieApiService} from 'src/app/Services/service-movie-api.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  idmovie;

  images;

  video;

  oneimage;

  imagewithoutone;

  image: HTMLElement;

  vido: HTMLElement;

  i:number;

  executed;

  path;

  constructor(private sanitizer:DomSanitizer,private $ser: ServiceMovieApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    alert("cet composant permet d'affiche la video pour voire le film si vous avez pas obtenir les images ou la video cad il ya un probleme dans internet" );

    this.executed=true;
    this.i=0;
    this.idmovie = this.route.snapshot.paramMap.get("id");
    //this.vido=document.getElementById("frame");
    this.getVideo();
    //this.image=document.getElementById("imageId");
    this.getImages();

    /*setInterval(()=>{
      this.image.setAttribute("src","https://image.tmdb.org/t/p/w500/"+this.images[this.i]['file_path']);
      if (this.i>=Array.of(this.images).length) {
        this.i=0;
        this.executed=false;
      } else {
        this.i++;
        this.executed=false;
      }
 },3000);*/
  }

  getImages(){
    this.$ser.getImages(this.idmovie).subscribe((res: Response) => {
      this.images =Array.of(res);
      this.images=this.images[0]['backdrops'];
      /*this.oneimage=Array.of(this.images[0]);
      this.imagewithoutone=Array.of(this.images.slice(1));
      this.imagewithoutone=this.imagewithoutone[0];*/
      console.log(this.images[this.i]);
    });
  }


  getImage(path){
    return "https://image.tmdb.org/t/p/w500/"+path;
  }

  getVideo(){
      this.$ser.getVideos(this.idmovie).subscribe((res: Response) => {
      this.video =Array.of(res);
      this.video=this.video[0]['results'];
      this.video=Array.of(this.video[0]);
      this.path=this.video[0]['key'];
      this.getEmbedUrl(this.path);
    });
  }

  getEmbedUrl(item){
    //this.vido.setAttribute("src","https://www.youtube.com/embed/"+item);
   return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+item);
  }

}
