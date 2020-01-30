import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule , MatButtonModule , MatIconModule} from '@angular/material';
import { MontreAnalogiqueComponent } from './Exercice1/montre-analogique/montre-analogique.component';
import { CinemaMovieComponent } from './Exercice2/cinema-movie/cinema-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowMovieComponent } from './Exercice2/show-movie/show-movie.component';
import { NavbarComponent } from './Exercice3/navbar/navbar.component';
import { DummyComponent } from './Exercice3/dummy/dummy.component';
import { MontreDigitaleComponent } from './Exercice4/montre-digitale/montre-digitale.component';
import { MaquetteComponent } from './Exercice5/maquette/maquette.component';
import { DataVideoComponent } from './Exercice5/data-video/data-video.component';
import { NavbarGaucheComponent } from './Exercice5/navbar-gauche/navbar-gauche.component';
import { NavbarExo5Component } from './Exercice5/navbar-exo5/navbar-exo5.component';

@NgModule({
  declarations: [
    AppComponent,
    MontreAnalogiqueComponent,
    CinemaMovieComponent,
    ShowMovieComponent,
    NavbarComponent,
    DummyComponent,
    MontreDigitaleComponent,
    MaquetteComponent,
    DataVideoComponent,
    NavbarGaucheComponent,
    NavbarExo5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
