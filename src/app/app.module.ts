import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { WelcomComponent } from './welcom/welcom.component';
import { AnimeComponent } from './anime/anime.component';
import { SerieComponent } from './serie/serie.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ErrorComponent,
    WelcomComponent,
    AnimeComponent,
    SerieComponent,
    MovieComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'welcom' ,component : WelcomComponent},
      {path : 'movie' ,component : MovieComponent},
      {path : 'serie' ,component : SerieComponent},
      {path : 'anime' ,component : AnimeComponent},
      {path : 'detail' ,component : DetailComponent},
      {path : '' ,redirectTo : 'welcom' ,pathMatch : 'full'},
      {path : '**' ,component : ErrorComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
