import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontreAnalogiqueComponent } from './Exercice1/montre-analogique/montre-analogique.component';
import { CinemaMovieComponent } from './Exercice2/cinema-movie/cinema-movie.component';
import { ShowMovieComponent } from './Exercice2/show-movie/show-movie.component';
import { NavbarComponent } from './Exercice3/navbar/navbar.component';
import { DummyComponent } from './Exercice3/dummy/dummy.component';
import { MontreDigitaleComponent } from './Exercice4/montre-digitale/montre-digitale.component';
import { MaquetteComponent } from './Exercice5/maquette/maquette.component';



const routes: Routes = [
  { path:"exo1" , component:MontreAnalogiqueComponent}, 
  {path:"exo2",component:CinemaMovieComponent},
  {path:"exo3",component:NavbarComponent},
  {path:"exo4",component:MontreDigitaleComponent},
  {path:"exo5",component:MaquetteComponent},
  {path:"movie/:id",component:ShowMovieComponent},
  { path:"exo3/home" , component:DummyComponent},
  { path:"exo3/services" , component:DummyComponent},
  { path:"exo3/projects" , component:DummyComponent},
  { path:"exo3/aboutus" , component:DummyComponent},
  { path:"exo3/signup" , component:DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
